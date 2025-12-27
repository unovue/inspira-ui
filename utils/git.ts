import { execSync } from "node:child_process";
import gitUrlParse from "git-url-parse";
import { readGitConfig } from "pkg-types";

export interface GitInfo {
  // Repository name
  name: string;
  // Repository owner/organization
  owner: string;
  // Repository URL
  url: string;
}

export function getGitBranch() {
  const envName =
    process.env.CF_PAGES_BRANCH ||
    process.env.CI_COMMIT_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.BRANCH ||
    process.env.GITHUB_REF_NAME;

  if (envName && envName !== "HEAD") {
    return envName;
  }
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (branch && branch !== "HEAD") {
      return branch;
    }
  } catch {
    // Ignore error
  }

  return "main";
}

export async function getLocalGitInfo(rootDir: string): Promise<GitInfo | undefined> {
  const remote = await getLocalGitRemote(rootDir);
  if (!remote) {
    return;
  }

  // https://www.npmjs.com/package/git-url-parse#clipboard-example
  const { name, owner, source } = gitUrlParse(remote);
  const url = `https://${source}/${owner}/${name}`;

  return {
    name,
    owner,
    url,
  };
}

async function getLocalGitRemote(dir: string): Promise<string | undefined> {
  try {
    const parsed = await readGitConfig(dir);
    if (!parsed) {
      return;
    }
    return parsed.remote?.origin?.url;
  } catch {
    // Ignore error
  }
}

export function getGitEnv(): GitInfo {
  // https://github.com/unjs/std-env/issues/59
  const envInfo = {
    // Provider
    provider:
      process.env.VERCEL_GIT_PROVIDER || // vercel
      (process.env.GITHUB_SERVER_URL ? "github" : undefined) || // github
      "",
    // Owner
    owner:
      process.env.VERCEL_GIT_REPO_OWNER || // vercel
      process.env.GITHUB_REPOSITORY_OWNER || // github
      process.env.CI_PROJECT_PATH?.split("/").shift() || // gitlab
      "",
    // Name
    name:
      process.env.VERCEL_GIT_REPO_SLUG ||
      process.env.GITHUB_REPOSITORY?.split("/").pop() || // github
      process.env.CI_PROJECT_PATH?.split("/").splice(1).join("/") || // gitlab
      "",
    // Url
    url: process.env.REPOSITORY_URL || "", // netlify
  };

  if (!envInfo.url && envInfo.provider && envInfo.owner && envInfo.name) {
    envInfo.url = `https://${envInfo.provider}.com/${envInfo.owner}/${envInfo.name}`;
  }

  // If only url available (ex: Netlify)
  if (!envInfo.name && !envInfo.owner && envInfo.url) {
    try {
      const { name, owner } = gitUrlParse(envInfo.url);
      envInfo.name = name;
      envInfo.owner = owner;
    } catch {
      // Ignore error
    }
  }

  return {
    name: envInfo.name,
    owner: envInfo.owner,
    url: envInfo.url,
  };
}
