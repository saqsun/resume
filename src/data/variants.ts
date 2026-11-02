import type { JobContent } from "./types";
import {
  leadershipExperience,
  armathAchievements,
  rockbiteExperience,
  plexonicExperience,
} from "./shared.ts";

export type VariantId =
  | "html5GameEngineer"
  | "frontendPlatformEngineer"
  | "technicalEngineeringLead";

export interface VariantData {
  employmentThumbnails: "all" | Record<string, string[]>;
  title: string;
  summary: string;
  skills: string[];
  jobContent: Record<string, JobContent>;
}

export const variants: Record<VariantId, VariantData> = {
  html5GameEngineer: {
    employmentThumbnails: "all",
    title: "Senior / Lead HTML5 Game Engineer",
    summary:
      "HTML5 game engineer and technical lead with 15+ years building browser games, reusable engines, and production tooling. Expertise in TypeScript, PixiJS, WebGL, mobile performance, and delivery from prototype through release.",
    skills: [
      "TypeScript",
      "JavaScript",
      "PixiJS",
      "WebGL",
      "Canvas",
      "Game architecture",
      "Gameplay systems",
      "State machines",
      "Physics",
      "Animation",
      "Mobile performance",
      "Asset pipelines",
      "Developer tooling",
      "Code reviews",
    ],
    jobContent: {
      ixilix: {
        intro:
          "Led browser-game architecture and delivery using React, TypeScript, and PixiJS.",
        bullets: [
          "Built responsive UI, live results, side-bet flows, tutorials, and API integrations.",
          [
            "Reduced package size from ",
            { text: "~62 MB to 9.6 MB", bold: true },
            " and coordinated releases.",
          ],
          leadershipExperience.ixilix,
        ],
      },
      "playrix-lead": {
        intro: [
          ...leadershipExperience.playrix,
          ", setting framework direction and reviewing code.",
        ],
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Built runtimes, asset loading, physics, and animation with PixiJS, Matter.js, Spine, and GSAP.",
        bullets: [
          [
            "Reduced builds from ",
            { text: "~4.2 MB to 1.4 MB", bold: true },
            " and loading from ",
            { text: "~2.5 s to 1.6 s", bold: true },
            ".",
          ],
          "Optimized textures, audio, memory, and runtime for lower-end Android devices.",
        ],
      },
      rubyplay: {
        intro: [
          "Built ",
          { text: "shared HTML5 engine systems", bold: true },
          " and production frameworks.",
        ],
        bullets: [
          "Implemented game states, asset loading, configuration, animation, and integrations.",
          "Improved runtime reliability and memory use; integrated Sentry diagnostics.",
        ],
      },
      voodoo: {
        intro: [
          { text: "Led HTML5 game delivery", bold: true },
          " for mobile web and third-party platforms using TypeScript, PixiJS, Canvas, and WebGL.",
        ],
        bullets: [
          "Built gameplay, controls, animation, feedback, and complete win/fail flows.",
          "Created reusable systems and templates; optimized assets, startup, and mobile performance.",
          "Reviewed solutions with design, art, product, and marketing teams.",
        ],
      },
      armath: {
        intro: [
          "Co-founded and led a studio building mobile, PC, and browser games for international clients.",
          ...armathAchievements,
        ],
        bullets: [
          leadershipExperience.armath,
          "Built gameplay, UI, physics, progression, internal tools, and prototyping workflows.",
          "Managed clients, publishing, and live support.",
        ],
      },
      rockbite: rockbiteExperience,
      plexonic: {
        intro: plexonicExperience.intro,
        bullets: [plexonicExperience.port],
      },
    },
  },
  frontendPlatformEngineer: {
    employmentThumbnails: {
      ixilix: ["games/ixilix/redwing.webp"],
      "playrix-framework": ["games/playrix/gardenscapes-rescue-puzzle.webp"],
      rockbite: ["games/rockbite/overlap2d.webp"],
    },
    title: "Senior Frontend / Platform Engineer",
    summary:
      "Frontend / Platform Engineer with 15+ years building production applications, reusable architecture, and developer tooling. Strong in TypeScript, React, API integration, browser performance, and build systems; experienced owning delivery and mentoring engineers.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Frontend architecture",
      "Reusable UI",
      "State management",
      "API integration",
      "Browser performance",
      "Build tooling",
      "Developer tooling",
      "Testing",
      "Observability",
      "CI/CD",
      "Code reviews",
    ],
    jobContent: {
      ixilix: {
        intro:
          "Led frontend architecture and delivery with React, TypeScript, and PixiJS.",
        bullets: [
          "Built reusable UI, responsive layouts, real-time features, analytics, and API integrations.",
          [
            "Reduced package size from ",
            { text: "~62 MB to 9.6 MB", bold: true },
            " and coordinated releases.",
          ],
          leadershipExperience.ixilix,
        ],
      },
      "playrix-lead": {
        intro: [
          ...leadershipExperience.playrix,
          ", owning platform standards, reviews, and releases.",
        ],
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Built TypeScript runtimes, asset pipelines, and automation to reduce repetitive work.",
        bullets: [
          [
            "Reduced builds from ",
            { text: "~4.2 MB to 1.4 MB", bold: true },
            " and loading from ",
            { text: "~2.5 s to 1.6 s", bold: true },
            ".",
          ],
        ],
      },
      rubyplay: {
        intro: [
          "Built ",
          { text: "reusable browser runtimes", bold: true },
          " and shared platform components.",
        ],
        bullets: [
          "Implemented state management, asset loading, configuration, integrations, and release tooling.",
          "Integrated Sentry; improved observability, runtime stability, and debugging.",
        ],
      },
      voodoo: {
        intro:
          "Led high-performance browser experiences for mobile web and third-party platforms.",
        bullets: [
          [
            "Built responsive, animation-rich interfaces and ",
            { text: "reusable frontend systems", bold: true },
            " with TypeScript, Canvas, and WebGL.",
          ],
          "Improved loading, asset size, and cross-device performance through reusable templates.",
          "Supported developers through reviews, debugging, and release with product and design teams.",
        ],
      },
      armath: {
        intro: [
          "Co-founded and led a studio delivering web, mobile, and interactive products for international clients.",
          ...armathAchievements,
        ],
        bullets: [
          leadershipExperience.armath,
          "Owned frontend architecture, product direction, and delivery workflows.",
          "Built shared application foundations, components, and internal tooling across projects.",
          "Led multidisciplinary teams, client delivery, publishing, and live support while staying hands-on.",
        ],
      },
      rockbite: rockbiteExperience,
      plexonic: {
        intro: plexonicExperience.intro,
        bullets: [
          plexonicExperience.port,
          "Built UI, application logic, animation, and reusable components with design, backend, and QA teams.",
        ],
      },
    },
  },
  technicalEngineeringLead: {
    employmentThumbnails: {
      armath: ["games/armath/roofbot.webp", "games/armath/parallyzed.webp"],
    },
    title: "Technical Lead / Engineering Lead",
    summary:
      "Technical / Engineering Lead with 15+ years building products and leading teams. Hands-on in TypeScript, frontend architecture, browser performance, and tooling. Experienced in technical strategy, mentoring, cross-functional delivery, and production reliability.",
    skills: [
      "TypeScript",
      "React",
      "System architecture",
      "Frontend architecture",
      "Technical planning",
      "Code reviews",
      "Mentoring",
      "Team leadership",
      "Hiring",
      "Developer tooling",
      "CI/CD",
      "Performance optimization",
      "Production debugging",
      "Release management",
    ],
    jobContent: {
      ixilix: {
        intro:
          "Owned frontend technical direction, delivery, and production readiness.",
        bullets: [
          leadershipExperience.ixilix,
          "Reviewed architecture and coordinated engineering, QA, design, and product.",
          [
            "Stayed hands-on in React, TypeScript, and PixiJS; reduced one package from ",
            { text: "~62 MB to 9.6 MB", bold: true },
            ".",
          ],
        ],
      },
      "playrix-lead": {
        intro: [
          ...leadershipExperience.playrix,
          ", guiding architecture and cross-functional delivery.",
        ],
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Defined framework architecture and built asset pipelines and delivery automation.",
        bullets: [
          [
            "Reduced builds from ",
            { text: "~4.2 MB to 1.4 MB", bold: true },
            " and loading from ",
            { text: "~2.5 s to 1.6 s", bold: true },
            ".",
          ],
        ],
      },
      rubyplay: {
        intro: [
          {
            text: "Owned shared engine systems and production reliability",
            bold: true,
          },
          ".",
        ],
        bullets: [
          "Guided architecture, reviews, integrations, and release tooling across projects.",
          "Integrated Sentry; improved diagnostics and resolved runtime issues with backend, QA, and product.",
        ],
      },
      voodoo: {
        intro: [
          { text: "Led technical delivery", bold: true },
          " across browser projects, balancing architecture, performance, team support, and deadlines.",
        ],
        bullets: [
          "Defined shared patterns and templates; reviewed rendering and integration solutions.",
          "Coordinated engineering, design, art, product, and marketing from concept through release.",
          "Stayed hands-on in TypeScript, Canvas, and WebGL, optimizing assets and mobile performance.",
        ],
      },
      armath: {
        intro: [
          "Co-founded and led a studio, owning technical strategy, team building, and delivery for international clients.",
          ...armathAchievements,
        ],
        bullets: [
          "Defined architecture, hiring, standards, roadmaps, and delivery processes.",
          leadershipExperience.armath,
          "Managed clients, scope, publishing, and live support; built production tooling.",
        ],
      },
      rockbite: rockbiteExperience,
      plexonic: {
        intro: plexonicExperience.intro,
        bullets: [
          plexonicExperience.port,
          "Delivered gameplay, UI, animation, and reusable components alongside design, backend, art, and QA.",
        ],
      },
    },
  },
};

export function isVariantId(value: string | null): value is VariantId {
  return value !== null && Object.hasOwn(variants, value);
}

export const pdfFiles: Record<VariantId, string> = {
  html5GameEngineer: "Sargis-Sargsyan-Senior-Lead-HTML5-Game-Engineer.pdf",
  frontendPlatformEngineer:
    "Sargis-Sargsyan-Senior-Frontend-Platform-Engineer.pdf",
  technicalEngineeringLead: "Sargis-Sargsyan-Technical-Engineering-Lead.pdf",
};
