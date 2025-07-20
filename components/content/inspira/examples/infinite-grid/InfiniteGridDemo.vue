<template>
  <ClientOnly>
    <div class="flex min-h-40 items-center justify-center">
      <InteractiveHoverButton
        text="Open Preview"
        @click="toggle"
      />
      <div
        ref="el"
        :class="{ hidden: !isFullscreen }"
        class="fixed inset-0 z-50"
      >
        <InfiniteGrid :card-data />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
import { useTemplateRef } from "vue";

const el = useTemplateRef<HTMLElement>("el");

const { isFullscreen, toggle } = useFullscreen(el);

const cardData = [
  {
    title: "Visionary Insights",
    badge: "New",
    image: "https://picsum.photos/300/300.webp",
    description: "Next-gen AI system delivering business intelligence in real-time",
    tags: ["AI", "Big Data", "BI"],
    date: "2025",
  },
  {
    title: "UI Framework",
    badge: "Updated",
    image: "https://picsum.photos/300/300.webp",
    description: "Robust design framework featuring sleek and responsive components",
    tags: ["UI", "React", "Toolkit"],
    date: "2025",
  },
  {
    title: "NextGen App",
    badge: "Beta",
    image: "https://picsum.photos/300/300.webp",
    description: "Progressive mobile-first app optimized for speed and usability",
    tags: ["Mobile", "Flutter", "UX"],
    date: "2025",
  },
  {
    title: "Edge Gateway",
    badge: "Stable",
    image: "https://picsum.photos/300/300.webp",
    description: "Smart API gateway enabling distributed edge routing",
    tags: ["API", "Edge", "Infrastructure"],
    date: "2025",
  },
  {
    title: "Insight Panel",
    badge: "Live",
    image: "https://picsum.photos/300/300.webp",
    description: "Customizable analytics panel for performance monitoring",
    tags: ["Dashboard", "Vue", "Insights"],
    date: "2025",
  },
  {
    title: "DataCore",
    badge: "Optimized",
    image: "https://picsum.photos/300/300.webp",
    description: "Reliable database solution with advanced indexing",
    tags: ["SQL", "Database", "Indexing"],
    date: "2025",
  },
  {
    title: "Fortress Auth",
    badge: "Critical",
    image: "https://picsum.photos/300/300.webp",
    description: "Advanced identity platform with biometric authentication",
    tags: ["Security", "OAuth2", "Biometrics"],
    date: "2024",
  },
  {
    title: "OpsHub",
    badge: "Automated",
    image: "https://picsum.photos/300/300.webp",
    description: "Infrastructure as code with seamless deployment pipelines",
    tags: ["DevOps", "Terraform", "CI/CD"],
    date: "2024",
  },
  {
    title: "TestBench",
    badge: "Complete",
    image: "https://picsum.photos/300/300.webp",
    description: "Unified testing platform supporting unit and E2E tests",
    tags: ["QA", "Testing", "Mocha"],
    date: "2024",
  },
  {
    title: "AI Metrics",
    badge: "New",
    image: "https://picsum.photos/300/300.webp",
    description: "Cloud-native platform analyzing ML model performance",
    tags: ["ML", "AI", "Monitoring"],
    date: "2025",
  },
  {
    title: "Component Forge",
    badge: "Updated",
    image: "https://picsum.photos/300/300.webp",
    description: "Reusable UI components with seamless design integration",
    tags: ["React", "UI Kit", "Figma"],
    date: "2025",
  },
  {
    title: "Hybrid Mobile",
    badge: "Beta",
    image: "https://picsum.photos/300/300.webp",
    description: "Unified codebase for building apps across all platforms",
    tags: ["Ionic", "Mobile", "Cross-platform"],
    date: "2025",
  },
  {
    title: "Micro API Hub",
    badge: "Stable",
    image: "https://picsum.photos/300/300.webp",
    description: "Lightweight microservices API router for distributed systems",
    tags: ["Microservices", "API", "Express"],
    date: "2025",
  },
  {
    title: "Live Metrics",
    badge: "Live",
    image: "https://picsum.photos/300/300.webp",
    description: "Streaming dashboard with real-time data visualization",
    tags: ["Monitoring", "Charts", "D3.js"],
    date: "2025",
  },
  {
    title: "DataVault",
    badge: "Optimized",
    image: "https://picsum.photos/300/300.webp",
    description: "Secure and scalable data storage with automated backups",
    tags: ["PostgreSQL", "Cloud", "Storage"],
    date: "2025",
  },
  {
    title: "ShieldWall",
    badge: "Critical",
    image: "https://picsum.photos/300/300.webp",
    description: "Enterprise-grade security with threat detection engine",
    tags: ["Security", "Firewall", "Zero Trust"],
    date: "2024",
  },
  {
    title: "Pipeline Master",
    badge: "Automated",
    image: "https://picsum.photos/300/300.webp",
    description: "Containerized deployment pipeline with monitoring hooks",
    tags: ["CI/CD", "Kubernetes", "Docker"],
    date: "2024",
  },
  {
    title: "AssureTest",
    badge: "Complete",
    image: "https://picsum.photos/300/300.webp",
    description: "End-to-end test framework with smart coverage analysis",
    tags: ["Cypress", "QA", "Automation"],
    date: "2024",
  },
];
</script>

<style scoped></style>
