export type VariantId =
  | "html5GameEngineer"
  | "frontendPlatformEngineer"
  | "technicalEngineeringLead";

export interface VariantData {
  title: string;
  summary: string;
  skills: string[];
  jobContent: Record<string, { intro: string; bullets: string[] }>;
}

export const variants: Record<VariantId, VariantData> = {
  html5GameEngineer: {
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
          "Reduced package size from ~62 MB to 9.6 MB; mentored developers and coordinated releases.",
        ],
      },
      "playrix-lead": {
        intro:
          "Led framework direction, code reviews, and delivery automation.",
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Built runtimes, asset loading, physics, and animation with PixiJS, Matter.js, Spine, and GSAP.",
        bullets: [
          "Reduced builds from ~4.2 MB to 1.4 MB and loading from ~2.5 s to 1.6 s.",
          "Optimized textures, audio, memory, and runtime for lower-end Android devices.",
        ],
      },
      rubyplay: {
        intro: "Built shared HTML5 engine systems and production frameworks.",
        bullets: [
          "Implemented game states, asset loading, configuration, animation, and integrations.",
          "Improved runtime reliability and memory use; integrated Sentry diagnostics.",
        ],
      },
      voodoo: {
        intro:
          "Led HTML5 game delivery for mobile web and third-party platforms using TypeScript, PixiJS, Canvas, and WebGL.",
        bullets: [
          "Built gameplay, controls, animation, feedback, and complete win/fail flows.",
          "Created reusable systems and templates; optimized assets, startup, and mobile performance.",
          "Reviewed solutions with design, art, product, and marketing teams.",
        ],
      },
      armath: {
        intro:
          "Co-founded and led a studio building mobile, PC, and browser games for international clients.",
        bullets: [
          "Owned product direction, architecture, hiring, and delivery across multidisciplinary teams.",
          "Built gameplay, UI, physics, progression, internal tools, and prototyping workflows.",
          "Managed clients, publishing, and live support; contributed to Roofbot and Parallyzed.",
        ],
      },
      rockbite: {
        intro:
          "Built iOS and Android games with Java, libGDX, and RoboVM. Contributed gameplay, UI, and platform systems.",
        bullets: [
          "Developed Overlap2D scene-editor tools and reusable asset workflows.",
        ],
      },
      plexonic: {
        intro:
          "Developed mobile and social games for iOS, Android, and Facebook using ActionScript, Adobe AIR, and Flash.",
        bullets: [
          "Built gameplay, levels, UI, animation, and reusable systems with design, art, backend, and QA teams.",
        ],
      },
    },
  },
  frontendPlatformEngineer: {
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
          "Reduced package size from ~62 MB to 9.6 MB; mentored engineers and coordinated releases.",
        ],
      },
      "playrix-lead": {
        intro: "Led platform standards, code reviews, and release workflows.",
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Built TypeScript runtimes, templates, asset pipelines, and developer automation.",
        bullets: [
          "Reduced builds from ~4.2 MB to 1.4 MB and loading from ~2.5 s to 1.6 s.",
          "Improved runtime efficiency and reduced repetitive implementation work.",
        ],
      },
      rubyplay: {
        intro:
          "Built reusable browser runtimes and shared platform components.",
        bullets: [
          "Implemented state management, asset loading, configuration, integrations, and release tooling.",
          "Integrated Sentry; improved observability, runtime stability, and debugging.",
        ],
      },
      voodoo: {
        intro:
          "Led high-performance browser experiences for mobile web and third-party platforms.",
        bullets: [
          "Built responsive, animation-rich interfaces and shared systems with TypeScript, Canvas, and WebGL.",
          "Improved loading, asset size, and cross-device performance through reusable templates.",
          "Supported developers through reviews, debugging, and release with product and design teams.",
        ],
      },
      armath: {
        intro:
          "Co-founded and led a studio delivering web, mobile, and interactive products for international clients.",
        bullets: [
          "Owned frontend architecture, product direction, hiring, and delivery workflows.",
          "Built shared application foundations, components, and internal tooling across projects.",
          "Led multidisciplinary teams, client delivery, publishing, and live support while staying hands-on.",
        ],
      },
      rockbite: {
        intro:
          "Built cross-platform applications and UI for iOS and Android with Java, libGDX, and RoboVM.",
        bullets: [
          "Contributed to Overlap2D’s visual editor, scene creation, and reusable asset workflows.",
        ],
      },
      plexonic: {
        intro:
          "Developed interactive applications for iOS, Android, and Facebook with ActionScript, Adobe AIR, and Flash.",
        bullets: [
          "Built UI, application logic, animation, and reusable components with design, backend, and QA teams.",
        ],
      },
    },
  },
  technicalEngineeringLead: {
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
          "Reviewed architecture, mentored engineers, and coordinated engineering, QA, design, and product.",
          "Stayed hands-on in React, TypeScript, and PixiJS; reduced one package from ~62 MB to 9.6 MB.",
        ],
      },
      "playrix-lead": {
        intro:
          "Led platform architecture, reviews, and cross-functional delivery.",
        bullets: [],
      },
      "playrix-framework": {
        intro:
          "Defined shared framework patterns, asset pipelines, and developer tooling.",
        bullets: [
          "Built automation to accelerate delivery and reduce repetitive work.",
          "Improved build size, loading, runtime efficiency, and mobile release reliability.",
        ],
      },
      rubyplay: {
        intro: "Owned shared engine systems and production reliability.",
        bullets: [
          "Guided architecture, reviews, integrations, and release tooling across projects.",
          "Integrated Sentry; improved diagnostics and resolved runtime issues with backend, QA, and product.",
        ],
      },
      voodoo: {
        intro:
          "Led technical delivery across browser projects, balancing architecture, performance, team support, and deadlines.",
        bullets: [
          "Defined shared patterns and templates; reviewed rendering and integration solutions.",
          "Coordinated engineering, design, art, product, and marketing from concept through release.",
          "Stayed hands-on in TypeScript, Canvas, and WebGL, optimizing assets and mobile performance.",
        ],
      },
      armath: {
        intro:
          "Co-founded and led a studio, owning technical strategy, team building, and delivery for international clients.",
        bullets: [
          "Defined architecture, hiring, standards, roadmaps, and delivery processes.",
          "Led multidisciplinary teams and mentored engineers while remaining hands-on.",
          "Managed clients, scope, publishing, and live support; built tooling and contributed to Roofbot and Parallyzed.",
        ],
      },
      rockbite: {
        intro:
          "Built cross-platform gameplay, UI, and platform systems for iOS and Android with Java, libGDX, and RoboVM.",
        bullets: [
          "Contributed to Overlap2D’s visual editor and reusable scene and asset workflows.",
        ],
      },
      plexonic: {
        intro:
          "Developed iOS, Android, and Facebook games with ActionScript, Adobe AIR, and Flash.",
        bullets: [
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
