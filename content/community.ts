export const chaptersIntro =
  "An International Chapter is a regional branch of Team Tactil. Chapters handle local production, distribution in their region, translation into the local language, handling orders locally, and quality check compliance.";

export const teams: { name: string; region?: string; link?: string }[] = [
  { name: "Overtime FTC #33611", region: "Founding team", link: "https://overtime-team.vercel.app" },
];

export const chapters: { name: string; region: string; contact?: string }[] = [
  // Add real chapters when available
];

export const partners: { name: string; region?: string; type?: string }[] = [
  // Add real partners when available
];

export const mapLocations: { id: string; name: string; type: "team" | "chapter" | "partner"; region: string; lat?: number; lng?: number }[] = [
  { id: "1", name: "Overtime FTC #33611", type: "team", region: "Shymkent, Kazakhstan", lat: 42.3154, lng: 69.5967 },
];

export const guideNames = {
  recreation: "Recreation / Creation guide",
  translation: "Translation guide",
};

export const overtimeTools = [
  {
    name: "Team Overtime",
    description: "Official Overtime FTC #33611 website — team info, FIRST & FTC education, training modules.",
    url: "https://overtime-team.vercel.app",
  },
  {
    name: "FTC Alliance Finder",
    description: "Find the perfect alliance partner — stats from FTCScout, compatibility scoring, pre-match agreements.",
    url: "https://ftcalliancefinder.netlify.app",
  },
  {
    name: "Психоподдержка FTC",
    description: "Mental health support for FTC participants — stress management, calming techniques, emotional analysis.",
    url: "https://psychohel.netlify.app",
  },
];
