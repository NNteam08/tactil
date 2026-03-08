"use client";

import dynamic from "next/dynamic";

const CommunityMapClient = dynamic(() => import("./CommunityMapClient").then((m) => m.CommunityMapClient), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 h-64 flex items-center justify-center text-neutral-500 dark:text-neutral-400"
      aria-hidden
    >
      Loading map…
    </div>
  ),
});

export type CommunityMapLocation = {
  id: string;
  name: string;
  type: "team" | "chapter" | "partner";
  region: string;
  lat?: number;
  lng?: number;
};

export function CommunityMap({ locations }: { locations: CommunityMapLocation[] }) {
  return <CommunityMapClient locations={locations} />;
}
