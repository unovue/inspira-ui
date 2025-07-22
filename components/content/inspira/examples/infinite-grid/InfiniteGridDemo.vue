<template>
  <ClientOnly>
    <div class="flex flex-col h-[28rem] w-full items-center justify-center relative">
      <div
        ref="el"
        class="absolute inset-0 z-50 flex flex-col justify-center items-center"
        :class="{}"
      >
        <InfiniteGrid
          :card-data
          @tiles-loaded="onTilesLoaded"
        />
      </div>
      <span
        v-if="!tilesLoaded"
        class="text-lg font-semibold z-[51]"
      >
        Loading Tiles
      </span>

      <InteractiveHoverButton
        v-if="tilesLoaded"
        text="View Fullscreen"
        class="absolute bottom-0 z-[52]"
        @click="toggle"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
import { useTemplateRef } from "vue";

const el = useTemplateRef<HTMLElement>("el");

const { toggle } = useFullscreen(el);
const tilesLoaded = ref(false);

const cardData = [
  {
    title: "Visionary Insights",
    badge: "New",
    image: "https://picsum.photos/1366/768",
    description: "Next-gen AI system delivering business intelligence in real-time",
    tags: ["AI", "Big Data", "BI"],
    date: "2025",
  },
  {
    title: "UI Framework",
    badge: "Updated",
    image: "https://picsum.photos/1366/768",
    description: "Robust design framework featuring sleek and responsive components",
    tags: ["UI", "React", "Toolkit"],
    date: "2025",
  },
  {
    title: "NextGen App",
    badge: "Beta",
    image: "https://picsum.photos/1366/768",
    description: "Progressive mobile-first app optimized for speed and usability",
    tags: ["Mobile", "Flutter", "UX"],
    date: "2025",
  },
  {
    title: "Edge Gateway",
    badge: "Stable",
    image: "https://picsum.photos/1366/768",
    description: "Smart API gateway enabling distributed edge routing",
    tags: ["API", "Edge", "Infrastructure"],
    date: "2025",
  },
  {
    title: "Insight Panel",
    badge: "Live",
    image: "https://picsum.photos/1366/768",
    description: "Customizable analytics panel for performance monitoring",
    tags: ["Dashboard", "Vue", "Insights"],
    date: "2025",
  },
  {
    title: "DataCore",
    badge: "Optimized",
    image: "https://picsum.photos/1366/768",
    description: "Reliable database solution with advanced indexing",
    tags: ["SQL", "Database", "Indexing"],
    date: "2025",
  },
  {
    title: "Fortress Auth",
    badge: "Critical",
    image: "https://picsum.photos/1366/768",
    description: "Advanced identity platform with biometric authentication",
    tags: ["Security", "OAuth2", "Biometrics"],
    date: "2024",
  },
  {
    title: "OpsHub",
    badge: "Automated",
    image: "https://picsum.photos/1366/768",
    description: "Infrastructure as code with seamless deployment pipelines",
    tags: ["DevOps", "Terraform", "CI/CD"],
    date: "2024",
  },
  {
    title: "TestBench",
    badge: "Complete",
    image: "https://picsum.photos/1366/768",
    description: "Unified testing platform supporting unit and E2E tests",
    tags: ["QA", "Testing", "Mocha"],
    date: "2024",
  },
  {
    title: "AI Metrics",
    badge: "New",
    image: "https://picsum.photos/1366/768",
    description: "Cloud-native platform analyzing ML model performance",
    tags: ["ML", "AI", "Monitoring"],
    date: "2025",
  },
  {
    title: "Component Forge",
    badge: "Updated",
    image: "https://picsum.photos/1366/768",
    description: "Reusable UI components with seamless design integration",
    tags: ["React", "UI Kit", "Figma"],
    date: "2025",
  },
  {
    title: "Hybrid Mobile",
    badge: "Beta",
    image: "https://picsum.photos/1366/768",
    description: "Unified codebase for building apps across all platforms",
    tags: ["Ionic", "Mobile", "Cross-platform"],
    date: "2025",
  },
  {
    title: "Micro API Hub",
    badge: "Stable",
    image: "https://picsum.photos/1366/768",
    description: "Lightweight microservices API router for distributed systems",
    tags: ["Microservices", "API", "Express"],
    date: "2025",
  },
  {
    title: "Live Metrics",
    badge: "Live",
    image: "https://picsum.photos/1366/768",
    description: "Streaming dashboard with real-time data visualization",
    tags: ["Monitoring", "Charts", "D3.js"],
    date: "2025",
  },
  {
    title: "DataVault",
    badge: "Optimized",
    image: "https://picsum.photos/1366/768",
    description: "Secure and scalable data storage with automated backups",
    tags: ["PostgreSQL", "Cloud", "Storage"],
    date: "2025",
  },
  {
    title: "ShieldWall",
    badge: "Critical",
    image: "https://picsum.photos/1366/768",
    description: "Enterprise-grade security with threat detection engine",
    tags: ["Security", "Firewall", "Zero Trust"],
    date: "2024",
  },
  {
    title: "Pipeline Master",
    badge: "Automated",
    image: "https://picsum.photos/1366/768",
    description: "Containerized deployment pipeline with monitoring hooks",
    tags: ["CI/CD", "Kubernetes", "Docker"],
    date: "2024",
  },
  {
    title: "AssureTest",
    badge: "Complete",
    image: "https://picsum.photos/1366/768",
    description: "End-to-end test framework with smart coverage analysis",
    tags: ["Cypress", "QA", "Automation"],
    date: "2024",
  },
];

function onTilesLoaded() {
  tilesLoaded.value = true;
}
</script>
