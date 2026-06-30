export type InspiraChangelogType =
  | "release"
  | "added"
  | "updated"
  | "fixed"
  | "removed"
  | "migration";

export interface InspiraChangelogLink {
  label: string;
  to: string;
}

export interface InspiraChangelogEntry {
  type: InspiraChangelogType;
  date: string;
  title: string;
  description: string;
  links?: InspiraChangelogLink[];
}

export const inspiraChangelog: InspiraChangelogEntry[] = [
  {
    type: "added",
    date: "2026-06-30",
    title: "Floating Card added.",
    description:
      "A perspective hover card with cursor-tracked tilt, depth, and glare for more dimensional card moments.",
    links: [{ label: "Floating Card", to: "/components/cards/floating-card" }],
  },
  {
    type: "updated",
    date: "2026-06-30",
    title: "Docs interface refined.",
    description:
      "The docs layout, component index, sidebars, and component pages moved toward a cleaner premium direction.",
    links: [{ label: "Components", to: "/components" }],
  },
  {
    type: "added",
    date: "2026-06-28",
    title: "Fey Cards joined the card collection.",
    description:
      "A layered hover card stack with image swapping and a clean heading reveal for product-led sections.",
    links: [{ label: "Fey Cards", to: "/components/cards/fey-cards" }],
  },
  {
    type: "added",
    date: "2026-04-01",
    title: "Animated Tabs added.",
    description:
      "A polished tab primitive for switching content with motion that feels native to the interface.",
    links: [{ label: "Animated Tabs", to: "/components/miscellaneous/animated-tabs" }],
  },
  {
    type: "added",
    date: "2026-03-08",
    title: "Images Badge and Scales added.",
    description:
      "Two compact interaction pieces for richer previews, badges, and comparison-style product moments.",
    links: [
      { label: "Images Badge", to: "/components/special-effects/images-badge" },
      { label: "Scales", to: "/components/special-effects/scales" },
    ],
  },
  {
    type: "added",
    date: "2026-01-17",
    title: "Encrypted Text and Progressive Blur added.",
    description:
      "Text and reveal effects expanded with a stronger set of motion utilities for modern landing pages.",
    links: [
      { label: "Encrypted Text", to: "/components/text-animations/encrypted-text" },
      { label: "Progressive Blur", to: "/components/special-effects/progressive-blur" },
    ],
  },
  {
    type: "added",
    date: "2026-01-07",
    title: "Animated Modal added.",
    description:
      "A motion-first modal pattern for focused product moments, dialogs, and rich interactive flows.",
    links: [{ label: "Animated Modal", to: "/components/miscellaneous/animated-modal" }],
  },
  {
    type: "added",
    date: "2026-01-05",
    title: "Design Testimonials added.",
    description:
      "A testimonial section designed for stronger social proof without adding heavy page structure.",
    links: [{ label: "Design Testimonials", to: "/components/testimonials/design-testimonials" }],
  },
  {
    type: "updated",
    date: "2026-01-04",
    title: "Silk Background playground added.",
    description:
      "Silk Background received live controls so users can tune the motion and visual output faster.",
    links: [{ label: "Silk Background", to: "/components/backgrounds/silk-background" }],
  },
  {
    type: "added",
    date: "2026-01-03",
    title: "Dither Shader and new backgrounds added.",
    description:
      "Dither Shader, Singularity Background, and Thunderstorm Background expanded the visual effects set.",
    links: [
      { label: "Dither Shader", to: "/components/special-effects/dither-shader" },
      { label: "Singularity Background", to: "/components/backgrounds/singularity-background" },
      { label: "Thunderstorm Background", to: "/components/backgrounds/thunderstorm-background" },
    ],
  },
  {
    type: "updated",
    date: "2026-01-03",
    title: "Pattern Background improved.",
    description:
      "Pattern Background received a playground and visibility fixes for clearer previews across themes.",
    links: [{ label: "Pattern Background", to: "/components/backgrounds/pattern-background" }],
  },
  {
    type: "fixed",
    date: "2025-12-30",
    title: "Component fixes shipped.",
    description:
      "Resolved issues across World Map, Particle Image, Animated Circular Progress Bar, and Glare Card.",
    links: [
      { label: "World Map", to: "/components/visualization/world-map" },
      { label: "Particle Image", to: "/components/special-effects/particle-image" },
      {
        label: "Animated Circular Progress Bar",
        to: "/components/miscellaneous/animated-circular-progressbar",
      },
      { label: "Glare Card", to: "/components/cards/glare-card" },
    ],
  },
  {
    type: "release",
    date: "2025-12-27",
    title: "Inspira UI v3 released.",
    description:
      "The documentation moved to Docus with a cleaner structure for browsing, installing, and copying components.",
  },
  {
    type: "fixed",
    date: "2025-12-23",
    title: "Performance fixes shipped.",
    description:
      "GitHub Globe and Falling Stars Background received focused performance improvements.",
    links: [
      { label: "GitHub Globe", to: "/components/visualization/github-globe" },
      { label: "Falling Stars Background", to: "/components/backgrounds/falling-stars" },
    ],
  },
  {
    type: "removed",
    date: "2025-12-23",
    title: "Blocks removed from the docs.",
    description:
      "Blocks were removed so the project could stay focused on reusable UI components and documentation.",
  },
  {
    type: "updated",
    date: "2025-12-16",
    title: "Component browsing improved.",
    description:
      "Component list and viewer updates made discovery, previewing, and copying easier before the Docus migration.",
    links: [{ label: "Components", to: "/components" }],
  },
  {
    type: "migration",
    date: "2025-10-15",
    title: "English component catalog imported.",
    description:
      "The first full English catalog landed with backgrounds, cards, buttons, text effects, visualizations, and utilities.",
    links: [{ label: "Browse catalog", to: "/components" }],
  },
  {
    type: "release",
    date: "2025-10-15",
    title: "Docus rebuild started.",
    description: "Inspira UI moved into the current Docus-powered documentation foundation.",
  },
  {
    type: "added",
    date: "2025-09-07",
    title: "Silk, Stractium, Stars, and Image Trail Cursor added.",
    description: "A strong visual-effects batch expanded backgrounds and cursor interactions.",
    links: [
      { label: "Silk Background", to: "/components/backgrounds/silk-background" },
      { label: "Stractium Background", to: "/components/backgrounds/stractium-background" },
      { label: "Stars Background", to: "/components/backgrounds/stars-background" },
      { label: "Image Trail Cursor", to: "/components/cursors/image-trail-cursor" },
    ],
  },
  {
    type: "added",
    date: "2025-08-30",
    title: "Neural Background and Sleek Line Cursor added.",
    description:
      "The library gained a sharper background effect and a more refined cursor interaction.",
    links: [
      { label: "Neural Background", to: "/components/backgrounds/neural-background" },
      { label: "Sleek Line Cursor", to: "/components/cursors/sleek-line-cursor" },
    ],
  },
  {
    type: "added",
    date: "2025-08-03",
    title: "Halo Search added.",
    description:
      "A search component joined the forms collection for interfaces that need richer input moments.",
    links: [{ label: "Halo Search", to: "/components/input-and-forms/halo-search" }],
  },
  {
    type: "release",
    date: "2025-07-14",
    title: "Pro components became open source.",
    description: "Previously premium components were opened up for the wider Vue community.",
    links: [{ label: "Components", to: "/components" }],
  },
  {
    type: "updated",
    date: "2025-06-01",
    title: "Tailwind CSS v4 support shipped.",
    description:
      "Components were updated for Tailwind CSS v4 compatibility across the documentation and registry.",
  },
  {
    type: "added",
    date: "2025-05-08",
    title: "Black Hole Background added.",
    description: "A high-impact animated background joined the visual effects collection.",
    links: [
      { label: "Black Hole Background", to: "/components/backgrounds/black-hole-background" },
    ],
  },
  {
    type: "added",
    date: "2025-04-22",
    title: "Spring Calendar and Testimonial Slider added.",
    description: "The library expanded into richer interactive widgets and social proof patterns.",
    links: [
      { label: "Spring Calendar", to: "/components/special-effects/spring-calendar" },
      { label: "Testimonial Slider", to: "/components/miscellaneous/testimonial-slider" },
    ],
  },
  {
    type: "added",
    date: "2025-04-19",
    title: "Apple Card Carousel and Video Text added.",
    description:
      "A polished carousel and video-driven typography effect expanded the product storytelling set.",
    links: [
      { label: "Apple Card Carousel", to: "/components/cards/apple-card-carousel" },
      { label: "Video Text", to: "/components/backgrounds/video-text" },
    ],
  },
  {
    type: "added",
    date: "2025-03-24",
    title: "World Map added.",
    description:
      "Visualization components gained a map primitive for location and global presence sections.",
    links: [{ label: "World Map", to: "/components/visualization/world-map" }],
  },
  {
    type: "added",
    date: "2025-03-22",
    title: "Glowing Effect, Animated Testimonials, and Spline added.",
    description:
      "A visual polish batch added interaction glow, testimonial motion, and 3D embed support.",
    links: [
      { label: "Glowing Effect", to: "/components/special-effects/glowing-effect" },
      { label: "Animated Testimonials", to: "/components/miscellaneous/animated-testimonials" },
      { label: "Spline", to: "/components/visualization/spline" },
    ],
  },
  {
    type: "removed",
    date: "2025-02-19",
    title: "Copyright-sensitive components removed.",
    description:
      "Components with copyright risk were removed to keep the project clean and safe to use.",
  },
  {
    type: "added",
    date: "2025-02-17",
    title: "Timeline, Focus, and Fluid Cursor added.",
    description:
      "The library gained timeline storytelling, focus animation, and cursor motion primitives.",
    links: [
      { label: "Timeline", to: "/components/miscellaneous/timeline" },
      { label: "Focus", to: "/components/text-animations/focus" },
      { label: "Fluid Cursor", to: "/components/cursors/fluid-cursor" },
    ],
  },
  {
    type: "release",
    date: "2025-01-26",
    title: "Components migrated to Motion-V.",
    description: "Motion handling moved to Motion-V for smoother Vue-native animation foundations.",
  },
  {
    type: "added",
    date: "2025-01-04",
    title: "Book, Warp Background, File Upload, and File Tree added.",
    description:
      "The first 2025 expansion brought richer layout, background, form, and visualization components.",
    links: [
      { label: "Book", to: "/components/miscellaneous/book" },
      { label: "Warp Background", to: "/components/backgrounds/warp-background" },
      { label: "File Upload", to: "/components/input-and-forms/file-upload" },
      { label: "File Tree", to: "/components/visualization/file-tree" },
    ],
  },
  {
    type: "added",
    date: "2024-12-25",
    title: "Tetris and Morphing Tabs added.",
    description:
      "The year closed with playful background motion and a polished tab transition component.",
    links: [
      { label: "Tetris", to: "/components/backgrounds/tetris" },
      { label: "Morphing Tabs", to: "/components/miscellaneous/morphing-tabs" },
    ],
  },
  {
    type: "added",
    date: "2024-12-20",
    title: "Scratch To Reveal, Morphing Text, and Interactive Hover Button added.",
    description:
      "A compact interaction batch expanded reveal effects, text motion, and button polish.",
    links: [
      { label: "Scratch To Reveal", to: "/components/special-effects/scratch-to-reveal" },
      { label: "Morphing Text", to: "/components/text-animations/morphing-text" },
      { label: "Interactive Hover Button", to: "/components/buttons/interactive-hover-button" },
    ],
  },
  {
    type: "added",
    date: "2024-11-30",
    title: "Photo Gallery and Input added.",
    description: "The component catalog grew into media presentation and form basics.",
    links: [
      { label: "Photo Gallery", to: "/components/miscellaneous/photo-gallery" },
      { label: "Input", to: "/components/input-and-forms/input" },
    ],
  },
  {
    type: "added",
    date: "2024-11-20",
    title: "Animate Grid and Animated Tooltip added.",
    description: "Layout motion and tooltip interaction patterns joined the early catalog.",
    links: [
      { label: "Animate Grid", to: "/components/miscellaneous/animate-grid" },
      { label: "Animated Tooltip", to: "/components/miscellaneous/animated-tooltip" },
    ],
  },
  {
    type: "added",
    date: "2024-11-08",
    title: "Glare Card and Balance Slider added.",
    description: "Cards and controls gained richer interaction patterns.",
    links: [
      { label: "Glare Card", to: "/components/cards/glare-card" },
      { label: "Balance Slider", to: "/components/miscellaneous/balance-slider" },
    ],
  },
  {
    type: "added",
    date: "2024-11-02",
    title: "Aurora Background and Ripple added.",
    description: "Atmospheric background motion and ripple interaction entered the component set.",

    links: [
      { label: "Aurora Background", to: "/components/backgrounds/aurora-background" },
      { label: "Ripple", to: "/components/backgrounds/ripple" },
    ],
  },
  {
    type: "added",
    date: "2024-10-31",
    title: "Lens and Animated Circular Progress Bar added.",
    description:
      "The catalog gained a magnified media interaction and a compact progress component.",
    links: [
      { label: "Lens", to: "/components/miscellaneous/lens" },
      {
        label: "Animated Circular Progress Bar",
        to: "/components/miscellaneous/animated-circular-progressbar",
      },
    ],
  },
  {
    type: "removed",
    date: "2024-10-31",
    title: "Heavy globe implementation removed.",
    description:
      "An early globe implementation was removed for performance before the refined GitHub Globe landed.",
  },
  {
    type: "added",
    date: "2024-10-29",
    title: "Border Beam, Wavy Background, and Tracing Beam added.",
    description: "Beam effects and animated backgrounds expanded the visual effects library.",
    links: [
      { label: "Border Beam", to: "/components/special-effects/border-beam" },
      { label: "Wavy Background", to: "/components/backgrounds/wavy-background" },
      { label: "Tracing Beam", to: "/components/miscellaneous/tracing-beam" },
    ],
  },
  {
    type: "added",
    date: "2024-10-27",
    title: "Link Preview and GitHub Globe added.",
    description: "Preview and visualization patterns entered the component set.",
    links: [
      { label: "Link Preview", to: "/components/miscellaneous/link-preview" },
      { label: "GitHub Globe", to: "/components/visualization/github-globe" },
    ],
  },
  {
    type: "added",
    date: "2024-10-24",
    title: "Lamp Effect and Text Highlight added.",
    description: "The docs gained early hero-grade lighting and text emphasis effects.",
    links: [
      { label: "Lamp Effect", to: "/components/backgrounds/lamp-effect" },
      { label: "Text Highlight", to: "/components/text-animations/text-highlight" },
    ],
  },
  {
    type: "added",
    date: "2024-10-16",
    title: "Direction Aware Hover, Flip Words, HyperText, and Text Reveal Card added.",
    description:
      "The first big community wave brought stronger card and typography animation patterns.",
    links: [
      { label: "Direction Aware Hover", to: "/components/cards/direction-aware-hover" },
      { label: "Flip Words", to: "/components/text-animations/flip-words" },
      { label: "Hyper Text", to: "/components/text-animations/hyper-text" },
      { label: "Text Reveal Card", to: "/components/text-animations/text-reveal-card" },
    ],
  },
  {
    type: "added",
    date: "2024-10-11",
    title: "Animated Beam, Shimmer Button, and device mocks added.",
    description:
      "The library gained beam motion, button polish, and iPhone/Safari mockup components.",
    links: [
      { label: "Animated Beam", to: "/components/special-effects/animated-beam" },
      { label: "Shimmer Button", to: "/components/buttons/shimmer-button" },
      { label: "iPhone Mockup", to: "/components/device-mocks/iphone-mockup" },
      { label: "Safari Mockup", to: "/components/device-mocks/safari-mockup" },
    ],
  },
  {
    type: "added",
    date: "2024-10-06",
    title: "Dock and Container Scroll added.",
    description: "Navigation and scroll storytelling patterns became part of the early library.",
    links: [
      { label: "Dock", to: "/components/miscellaneous/dock" },
      { label: "Container Scroll", to: "/components/miscellaneous/container-scroll" },
    ],
  },
  {
    type: "added",
    date: "2024-09-29",
    title: "Card Spotlight added.",
    description: "The card collection gained an early pointer-reactive spotlight interaction.",
    links: [{ label: "Card Spotlight", to: "/components/cards/card-spotlight" }],
  },
  {
    type: "added",
    date: "2024-09-23",
    title: "Animated List and Marquee added.",
    description: "Motion primitives for lists and scrolling content became early building blocks.",
    links: [
      { label: "Animated List", to: "/components/miscellaneous/animated-list" },
      { label: "Marquee", to: "/components/miscellaneous/marquee" },
    ],
  },
  {
    type: "added",
    date: "2024-09-18",
    title: "Particles Background added.",
    description: "Inspira UI started building its animated background language.",
    links: [{ label: "Particles Background", to: "/components/backgrounds/particles-bg" }],
  },
  {
    type: "added",
    date: "2024-09-08",
    title: "Pattern Background and Blur Reveal added.",
    description:
      "The first visual effects and text reveal components shaped the library direction.",
    links: [
      { label: "Pattern Background", to: "/components/backgrounds/pattern-background" },
      { label: "Blur Reveal", to: "/components/text-animations/blur-reveal" },
    ],
  },
  {
    type: "release",
    date: "2024-09-06",
    title: "Plugin and documentation foundation added. Released to public.",
    description:
      "Inspira UI gained plugin setup, component docs, and the first reusable docs primitives.",
    links: [{ label: "Getting Started", to: "/getting-started" }],
  },
  {
    type: "release",
    date: "2024-09-01",
    title: "Inspira UI development started.",
    description: "The first commit created the project that became Inspira UI for Vue and Nuxt.",
  },
];
