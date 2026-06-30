#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const componentRoot = "content/en/2.components/";
const ignoredFiles = new Set(["index.md", ".navigation.yml", "_dir.yml"]);
const dashRe = /-/g;
const wordStartRe = /\b\w/g;
const uiRe = /\bUi\b/g;
const svgRe = /\bSvg\b/g;
const threeDRe = /\b3d\b/gi;
const wrappingQuoteRe = /^["']|["']$/g;
const markdownExtensionRe = /\.md$/;
const componentPathRe = /^content\/en\/2\.components\/([^/]+)\/(.+)\.md$/;

const rawLog = execFileSync(
  "git",
  ["log", "--date=short", "--name-status", "--pretty=format:@@commit@@%H\t%h\t%ad\t%s"],
  { encoding: "utf8" },
);

function parseCommits(log) {
  const commits = [];
  let current;

  for (const line of log.split("\n")) {
    if (line.startsWith("@@commit@@")) {
      const [hash, shortHash, date, subject] = line.slice("@@commit@@".length).split("\t");

      current = {
        hash,
        shortHash,
        date,
        subject,
        files: [],
      };
      commits.push(current);
      continue;
    }

    if (!current || !line.trim()) {
      continue;
    }

    const [status, ...paths] = line.split("\t");

    current.files.push({
      status,
      path: paths.at(-1),
    });
  }

  return commits;
}

function isComponentDoc(filePath) {
  if (!filePath?.startsWith(componentRoot) || !filePath.endsWith(".md")) {
    return false;
  }

  return !ignoredFiles.has(filePath.split("/").at(-1));
}

function titleFromSlug(slug) {
  return slug
    .replace(dashRe, " ")
    .replace(wordStartRe, (letter) => letter.toUpperCase())
    .replace(uiRe, "UI")
    .replace(svgRe, "SVG")
    .replace(threeDRe, "3D");
}

function titleFromFile(filePath) {
  if (existsSync(filePath)) {
    const body = readFileSync(filePath, "utf8");
    const frontmatterTitle = body
      .split("\n")
      .find((line) => line.startsWith("title:"))
      ?.slice("title:".length)
      .trim();

    if (frontmatterTitle) {
      return frontmatterTitle.replace(wrappingQuoteRe, "");
    }
  }

  return titleFromSlug(filePath.split("/").at(-1).replace(markdownExtensionRe, ""));
}

function toLink(filePath) {
  const [, category, file] = filePath.match(componentPathRe) ?? [];

  if (!category || !file) {
    return undefined;
  }

  return `/components/${category}/${file}`;
}

function typeFor(status) {
  if (status.startsWith("A")) return "added";
  if (status.startsWith("D")) return "removed";
  return "updated";
}

function primaryType(grouped) {
  if (grouped.added?.length) return "added";
  if (grouped.removed?.length) return "removed";
  return "updated";
}

const events = parseCommits(rawLog)
  .map((commit) => {
    const componentFiles = commit.files.filter((file) => isComponentDoc(file.path));

    if (!componentFiles.length) {
      return undefined;
    }

    const grouped = componentFiles.reduce((result, file) => {
      const type = typeFor(file.status);
      result[type] ??= [];
      result[type].push(file.path);
      return result;
    }, {});

    const changedCount = componentFiles.length;
    const isBulkMigration = changedCount > 25;

    if (isBulkMigration && grouped.removed?.length) {
      return undefined;
    }

    const type = isBulkMigration ? "migration" : primaryType(grouped);
    const files = grouped[type] ?? componentFiles.map((file) => file.path);

    return {
      type,
      date: commit.date,
      commit: commit.shortHash,
      subject: commit.subject,
      count: changedCount,
      links: files.slice(0, 12).map((filePath) => ({
        label: titleFromFile(filePath),
        to: toLink(filePath),
      })),
    };
  })
  .filter(Boolean);

console.log(JSON.stringify(events, null, 2));
