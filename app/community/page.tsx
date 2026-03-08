import Link from "next/link";
import {
  teams,
  chaptersIntro,
  chapters,
  partners,
  mapLocations,
  guideNames,
  overtimeTools,
} from "@/content/community";
import { guideUrls } from "@/lib/guides";
import { CommunityMap, type CommunityMapLocation } from "./CommunityMap";
import { PartnerApplyForm } from "./PartnerApplyForm";
import { ChapterApplyForm } from "./ChapterApplyForm";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={`${id}-heading`}
      className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
    >
      {children}
    </h2>
  );
}

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
        Community
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">
        Teams, chapters, and partners building inclusive robotics worldwide
      </p>

      {/* 1. Teams */}
      <section className="mb-14" aria-labelledby="teams-heading">
        <SectionHeading id="teams">Teams</SectionHeading>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          FTC teams involved with Tactil.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2" role="list">
          {teams.map((team) => (
            <li
              key={team.name}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-5 py-4 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
            >
              {team.link ? (
                <a
                  href={team.link}
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {team.name}
                </a>
              ) : (
                <span className="font-semibold text-slate-900 dark:text-white">
                  {team.name}
                </span>
              )}
              {team.region && (
                <span className="ml-2 text-sm text-slate-500 dark:text-slate-500">
                  — {team.region}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 2. International Chapters */}
      <section className="mb-14" aria-labelledby="chapters-heading">
        <SectionHeading id="chapters">International Chapters</SectionHeading>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          {chaptersIntro}
        </p>
        {chapters.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-6 text-center text-sm text-slate-500 dark:text-slate-500">
            No chapters yet. Apply below to become one.
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {chapters.map((ch) => (
              <li
                key={ch.name}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-5 py-4"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {ch.name}
                </span>
                <span className="ml-2 text-sm text-slate-500 dark:text-slate-500">
                  — {ch.region}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 3. Partners */}
      <section className="mb-14" aria-labelledby="partners-heading">
        <SectionHeading id="partners">Partners</SectionHeading>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Schools, NGOs, and organizations working with Tactil.
        </p>
        {partners.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-6 text-center text-sm text-slate-500 dark:text-slate-500">
            No partners listed yet. Apply below to become one.
          </div>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {partners.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-5 py-4"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {p.name}
                </span>
                {(p.region || p.type) && (
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-500">
                    — {[p.region, p.type].filter(Boolean).join(", ")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 4. Map */}
      <section className="mb-14" aria-labelledby="map-heading">
        <SectionHeading id="map">Map</SectionHeading>
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
          <CommunityMap locations={mapLocations as CommunityMapLocation[]} />
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm" role="list">
          {mapLocations.map((loc) => (
            <li
              key={loc.id}
              className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/30 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
              <span className="font-medium text-slate-900 dark:text-white">
                {loc.name}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                — {loc.region} ({loc.type})
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Apply Forms */}
      <section id="apply" className="mb-14" aria-labelledby="apply-heading">
        <SectionHeading id="apply">Apply</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Apply as Partner
            </h3>
            <PartnerApplyForm />
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Apply as International Chapter
            </h3>
            <ChapterApplyForm />
          </div>
        </div>
      </section>

      {/* 6. Resources */}
      <section className="mb-14" aria-labelledby="resources-heading">
        <SectionHeading id="resources">Resources</SectionHeading>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          Guides
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          <Link
            href={guideUrls.recreation}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">{guideNames.recreation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400">Download →</span>
            </div>
          </Link>
          <Link
            href={guideUrls.translation}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </span>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">{guideNames.translation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400">Download →</span>
            </div>
          </Link>
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          Tools by Overtime
        </h3>
        <ul className="grid gap-4 sm:grid-cols-3" role="list">
          {overtimeTools.map((tool) => (
            <li key={tool.url}>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 h-full hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                <span className="font-bold text-slate-900 dark:text-white">
                  {tool.name}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 flex-1 leading-relaxed">
                  {tool.description}
                </span>
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform mt-1">
                  Visit →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
