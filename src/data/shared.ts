export const companies = {
  ixilix: { name: "Ixilix", logo: "companies/ixilix.webp" },
  playrix: { name: "Playrix", logo: "companies/playrix.webp" },
  rubyplay: { name: "RubyPlay", logo: "companies/rubyplay.webp" },
  voodoo: { name: "Voodoo", logo: "companies/voodoo.webp" },
  armath: { name: "Armath", logo: "companies/koreez.webp" },
  rockbite: { name: "Rockbite", logo: "companies/rockbite.webp" },
  plexonic: { name: "Plexonic", logo: "companies/plexonic.webp" },
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
      title: "Frontend Team Lead at Ixilix",
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
      roleTitle: "Technical Lead",
      company: companies.playrix,
      title: "Technical Lead at Playrix",
      date: "Jan 2026 - Mar 2026",
    },
    {
      id: "playrix-framework",
      roleTitle: "Programming Lead, Playables Framework",
      company: companies.playrix,
      title: "Programming Lead, Playables Framework at Playrix",
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
      title: "Senior Game Engine Developer at RubyPlay",
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
      title: "Lead Browser Game Developer at Voodoo",
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
      title: "Co-Founder & CEO at Armath (formerly Koreez)",
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
      title: "Senior Software Engineer at Rockbite Games",
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
      title: "Game Developer at Plexonic",
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
