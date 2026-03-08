export const hero = {
  title: "Tactil",
  subtitle: "Launched by Overtime FTC #33611",
  tagline: "Tactile learning kits for blind and low-vision students. Request a kit or apply for a free grant.",
};

export const whatIsTactil = {
  title: "What is Tactil",
  paragraphs: [
    "Tactil is a branch launched by Overtime, focused on inclusive tactile learning systems for robotics education.",
    "Our long-term goal is global impact and expansion — making tactile robotics education accessible everywhere.",
  ],
};

export const flagshipProduct = {
  title: "Flagship Product: Tactile Ecosystem for FIRST Series",
  intro: "The Tactile Ecosystem brings together three ways to learn — so blind and low-vision students can fully participate in FIRST Tech Challenge.",
  items: [
    {
      key: "read",
      title: "Read",
      description: "Braille book — full curriculum in Braille.",
    },
    {
      key: "hear",
      title: "Hear",
      description: "Audiobook and box audio guide — learn by listening.",
    },
    {
      key: "touch",
      title: "Touch",
      description: "Tactile box with fixed cell layout — learn by touch.",
    },
  ],
  cta: "Explore FIRST Series",
  ctaHref: "/shop/first-series",
};

export const whyItMatters = {
  title: "Why It Matters",
  content:
    "FTC and robotics education are heavily visual. That creates real barriers for blind and low-vision learners. Tactil exists to remove those barriers and make robotics education inclusive.",
};

export const impactMetrics = {
  learnersEngaged: 45,
  educatorsTrained: 12,
  tactileKitsDeployed: 8,
  regions: 5,
  partnerTeams: 7,
};

export const mediaRecognition = {
  title: "Media & Public Recognition",
  items: [
    {
      name: "Телеканал 24KZ",
      description: "Шымкентские школьники создают роботов-помощников",
      url: "https://www.youtube.com/watch?v=AxrGbBsu3Es",
      platform: "youtube" as const,
      logo: "/media/24kz.svg",
    },
    {
      name: "Ontustik TV",
      description: "Alem Tech Fest жарысының жеңімпаздары",
      url: "https://www.youtube.com/watch?v=bIxOaJ9PQRY",
      platform: "youtube" as const,
      logo: "/media/ontustik-tv.svg",
    },
    {
      name: "Han TV Telearnasy",
      description: "Назарбаев зияткерлік мектебінің оқушылары жеңіс тұғырынан көрінді",
      url: "https://www.youtube.com/watch?v=cKW8sJ5853c",
      platform: "youtube" as const,
      logo: "/media/han-tv.svg",
    },
    {
      name: "Uaqyt TV",
      description: "Кешкі кездесу — Overtime & Tactil interview",
      url: "https://www.youtube.com/watch?v=kTEdpYMjJWI",
      platform: "youtube" as const,
      logo: "/media/uaqyt-tv.svg",
    },
    {
      name: "Instagram Reel",
      description: "Overtime / Tactil feature",
      url: "https://www.instagram.com/reels/DUelOz5EZqx/",
      platform: "instagram" as const,
      logo: "/media/instagram.svg",
    },
  ],
};

export const overtimeOrigin = {
  title: "Overtime Origin",
  paragraphs: [
    "Tactil is launched by Overtime FTC #33611. Overtime is the founding team.",
    "Tactil grows from Overtime's inclusion work — bringing the same commitment to accessibility to students everywhere.",
  ],
  projects: [
    {
      name: "Team Overtime",
      description: "Official website of Overtime FTC #33611 — about the team, FIRST, FTC, and training modules for new teams.",
      url: "https://overtime-team.vercel.app",
    },
    {
      name: "FTC Alliance Finder",
      description: "Tool to find the perfect alliance partner for FTC competitions — stats, agreements, and compatibility scoring.",
      url: "https://ftcalliancefinder.netlify.app",
    },
    {
      name: "Психоподдержка FTC",
      description: "Mental health support for FTC participants — stress management, calming techniques, and emotional check-ins.",
      url: "https://psychohel.netlify.app",
    },
  ],
};

export const ctaBlock = {
  title: "Get Your Kit",
  subtitle: "No online payment needed — just submit a request.",
  buttons: [
    { label: "Request a Kit", href: "/shop/first-series", variant: "primary" as const },
    { label: "Apply for a Grant", href: "/shop/first-series", variant: "secondary" as const },
    { label: "Join Community", href: "/community", variant: "outline" as const },
  ],
};
