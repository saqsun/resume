import type { JobContent, JobText } from "./types";

export const armathAchievements = [
  " Led development of ",
  {
    text: "Roofbot",
    href: "https://store.steampowered.com/app/545660/Roofbot/",
  },
  { text: " (Apple’s Free App of the Week)", bold: true },
  " and ",
  {
    text: "Parallyzed",
    href: "https://store.steampowered.com/app/545670/Parallyzed/",
  },
  { text: " (Google Play Indie Games Festival finalist)", bold: true },
  ".",
];

// Nomination: https://android-developers.googleblog.com/2016/04/the-google-play-awards-coming-to-google.html
export const rockbiteExperience: JobContent = {
  intro: [
    "Made substantial contributions to ",
    {
      text: "Tapventures",
      href: "https://tapventures.en.uptodown.com/android",
    },
    ", a Java/libGDX game later nominated for the ",
    {
      text: "2016 Google Play Award for Best Use of Google Play Game Services",
      bold: true,
    },
    ".",
  ],
  bullets: [
    [{ text: "Ported Tapventures to iOS", bold: true }, " using RoboVM."],
    [
      "Contributed ",
      {
        text: "RoboVM iOS bindings",
        href: "https://github.com/BlueRiverInteractive/robovm-ios-bindings/pull/134",
      },
      " to support the project’s SDK integration needs, including the Xplode SDK.",
    ],
    [
      "Helped build ",
      { text: "Overlap2D", href: "https://libgdx.com/wiki/tools/overlap2d" },
      ", an open-source 2D scene and UI editor; contributed editor features and refactoring.",
    ],
  ],
};

export const plexonicExperience: { intro: JobText; port: JobText } = {
  intro: [
    "Made substantial contributions to ",
    { text: "Panda Jam", href: "https://panda-jam.en.uptodown.com/android" },
    "’s development using ActionScript, Adobe AIR, and Flash.",
  ],
  port: [
    { text: "Independently ported Panda Jam", bold: true },
    " from Flash to iOS and Android.",
  ],
};

export const leadershipExperience = {
  ixilix: [
    "Managed ",
    { text: "4 direct reports", bold: true },
    ", held regular 1:1s, and mentored engineers.",
  ],
  playrix: ["Led a ", { text: "team of 4", bold: true }],
  armath: [
    "Built and led a ",
    { text: "team of approximately 20", bold: true },
    " at its peak; hired all team members across art, animation, development, and QA.",
  ],
} satisfies Record<string, JobText>;

export const companies = {
  ixilix: {
    name: "Ixilix",
    logo: "companies/ixilix.webp",
    href: "https://www.ixilix.com/",
  },
  playrix: {
    name: "Playrix",
    logo: "companies/playrix.webp",
    href: "https://playrix.com/",
  },
  rubyplay: {
    name: "RubyPlay",
    logo: "companies/rubyplay.webp",
    href: "https://rubyplay.com/",
  },
  voodoo: {
    name: "Voodoo",
    logo: "companies/voodoo.webp",
    href: "https://www.voodoo.io/",
  },
  armath: {
    name: "Armath (formerly Koreez)",
    logo: "companies/koreez.webp",
  },
  rockbite: {
    name: "Rockbite Games",
    logo: "companies/rockbite.webp",
    href: "https://rockbitegames.com/",
  },
  plexonic: {
    name: "Plexonic",
    logo: "companies/plexonic.webp",
    href: "https://plexonic.com/",
  },
};

export const shared = {
  name: "Sargis Sargsyan",
  portrait: "profile/profile.webp",
  contact: {
    location: "Yerevan, Armenia",
    phone: { label: "+374 93 443261", href: "tel:+37493443261" },
    email: "sargissargsyan@icloud.com",
  },
  languages: [
    { name: "Armenian", proficiency: 100 },
    { name: "Russian", proficiency: 100 },
    { name: "English", proficiency: 80 },
  ],
  education: [
    {
      degree: "M.Sc. & B.Sc.",
      subject: "Mathematics & Computer Science",
      university: "National Polytechnic University of Armenia",
      date: "2006 – 2012",
    },
  ],
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saqsun/",
    },
    {
      label: "GitHub",
      href: "https://github.com/saqsun",
    },
    {
      label: "Portfolio",
      href: "https://saqsun.github.io/",
    },
  ],
  jobs: [
    {
      id: "ixilix",
      company: companies.ixilix,
      role: "Frontend Team Lead",
      date: "Mar 2026 - May 2026",
      images: [
        {
          src: "games/ixilix/redwing.webp",
          alt: "RedWing",
          href: "https://www.winkingdom5.com/game/redwing",
        },
        {
          src: "games/ixilix/hathix.webp",
          alt: "HathiX",
          href: "https://www.winkingdom5.com/game/hathix",
        },
        {
          src: "games/ixilix/rikshax.webp",
          alt: "RikshaX",
          href: "https://www.winkingdom5.com/game/rikshax",
        },
        {
          src: "games/ixilix/udaanx.webp",
          alt: "UdaanX",
          href: "https://www.winkingdom5.com/game/udaanx",
        },
      ],
    },
    {
      id: "playrix-lead",
      company: companies.playrix,
      role: "Technical Lead",
      date: "Jan 2026 - Mar 2026",
    },
    {
      id: "playrix-framework",
      company: companies.playrix,
      role: "Programming Lead, Playables Framework",
      date: "Jul 2025 - Dec 2025",
      images: [
        {
          src: "games/playrix/gardenscapes-rescue-puzzle.webp",
          alt: "Gardenscapes: rescue puzzle",
          href: "https://saqsun.github.io/projects/playable-ads/30.gs_playable2002/",
        },
        {
          src: "games/playrix/gardenscapes-warm-the-room.webp",
          alt: "Gardenscapes: warm the room",
          href: "https://saqsun.github.io/projects/playable-ads/31.gs_playable2003/",
        },
        {
          src: "games/playrix/gardenscapes-repair-the-crossing.webp",
          alt: "Gardenscapes: repair the crossing",
          href: "https://saqsun.github.io/projects/playable-ads/33.gs_playable2005/",
        },
      ],
    },
    {
      id: "rubyplay",
      company: companies.rubyplay,
      role: "Senior Game Engine Developer",
      date: "Sep 2024 - May 2025",
      images: [
        {
          src: "games/rubyplay/giga-match-sugar-skull.webp",
          alt: "Giga Match Sugar Skull",
          href: "https://demo.rubyplay.com/launcher?gamename=rp_136&mode=offline",
        },
        {
          src: "games/rubyplay/immortal-ways-spooktacular.webp",
          alt: "Immortal Ways Spooktacular",
          href: "https://demo.rubyplay.com/launcher?gamename=rp_126&mode=offline",
        },
        {
          src: "games/rubyplay/diamond-explosion-patriots.webp",
          alt: "Diamond Explosion Patriots",
          href: "https://demo.rubyplay.com/launcher?gamename=rp_124&mode=offline",
        },
      ],
    },
    {
      id: "voodoo",
      company: companies.voodoo,
      role: "Lead Browser Game Developer",
      date: "Sep 2023 - Aug 2024",
      images: [
        {
          src: "games/voodoo/mob-control.webp",
          alt: "Mob Control",
          href: "https://saqsun.github.io/projects/playable-ads/35.moc_pl21/",
        },
        {
          src: "games/voodoo/collect-em-all.webp",
          alt: "Collect Em All! Clear the Dots",
          href: "https://saqsun.github.io/projects/playable-ads/36.cel_pl26/",
        },
      ],
    },
    {
      id: "armath",
      company: companies.armath,
      role: "Co-Founder & CEO",
      date: "Jan 2016 - Sep 2023",
      images: [
        {
          src: "games/armath/solitaire-klondike-chronicles.webp",
          alt: "Solitaire: Klondike Chronicles",
          href: "https://yandex.ru/games/app/170461",
        },
        {
          src: "games/armath/break-and-crush.webp",
          alt: "Break & Crush",
          href: "https://yandex.ru/games/app/171326",
        },
        {
          src: "games/armath/roofbot.webp",
          alt: "Roofbot",
          href: "https://store.steampowered.com/app/545660/Roofbot/",
        },
        {
          src: "games/armath/parallyzed.webp",
          alt: "Parallyzed",
          href: "https://store.steampowered.com/app/545670/Parallyzed/",
        },
      ],
    },
    {
      id: "rockbite",
      company: companies.rockbite,
      role: "Senior Software Engineer",
      date: "Jun 2014 - May 2015",
      images: [
        {
          src: "games/rockbite/tapventures.webp",
          alt: "Tapventures",
          href: "https://tapventures.en.uptodown.com/android",
        },
        {
          src: "games/rockbite/overlap2d.webp",
          alt: "Overlap2D",
          href: "https://libgdx.com/wiki/tools/overlap2d",
        },
      ],
    },
    {
      id: "plexonic",
      company: companies.plexonic,
      role: "Game Developer",
      date: "Jan 2011 - Jun 2014",
      images: [
        {
          src: "games/plexonic/paint-monsters.webp",
          alt: "Paint Monsters",
          href: "https://play.google.com/store/apps/details?id=air.com.sgn.paintmonsters.gp&hl=pt",
        },
        {
          src: "games/plexonic/panda-jam.webp",
          alt: "Panda Jam",
          href: "https://panda-jam.en.uptodown.com/android",
        },
      ],
    },
  ],
  openSourceProjects: [
    {
      name: "Replayable",
      imageFit: "contain" as const,
      image: "open-source/replayable.webp",
      description: "Playable ads, at scale",
      docs: "https://replayablejs.github.io/replayable/",
      source: "https://github.com/replayablejs/replayable",
      sourceLabel: "GitHub ↗",
    },
    {
      name: "reparticle",
      imageFit: "cover" as const,
      image: "open-source/reparticle.webp",
      description: "GPU particle engine with JSON-defined behavior",
      docs: "https://reparticlejs.github.io/reparticle/",
      source: "https://github.com/reparticlejs/reparticle",
      sourceLabel: "GitHub ↗",
    },
  ],
};
