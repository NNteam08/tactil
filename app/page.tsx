import Image from "next/image";
import Link from "next/link";
import {
  hero,
  whatIsTactil,
  flagshipProduct,
  whyItMatters,
  impactMetrics,
  mediaRecognition,
  overtimeOrigin,
  ctaBlock,
} from "@/content/home";

function Section({
  id,
  title,
  children,
  className = "",
  wide = false,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-6 ${className}`}
      aria-labelledby={title ? `${id || "section"}-heading` : undefined}
    >
      <div className={wide ? "mx-auto max-w-6xl" : "mx-auto max-w-4xl"}>
        {title && (
          <h2
            id={`${id || "section"}-heading`}
            className="font-display text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

const metrics = [
  { value: impactMetrics.learnersEngaged, label: "Learners engaged" },
  { value: impactMetrics.educatorsTrained, label: "Educators trained" },
  { value: impactMetrics.tactileKitsDeployed, label: "Tactile kits deployed" },
  { value: impactMetrics.regions, label: "Regions" },
  { value: impactMetrics.partnerTeams, label: "Partner teams" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── 1. HERO ─── */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-28 text-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image — blurred for readability */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover scale-110 blur-[2px]"
          aria-hidden="true"
        />

        {/* Gradient overlays — heavier for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" aria-hidden="true" />

        {/* Soft bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0b1120] to-transparent z-10" aria-hidden="true" />

        <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
          <Image
            src="/logo-tactil.svg"
            alt="Tactil"
            width={120}
            height={120}
            className="h-28 w-28 md:h-32 md:w-32 rounded-3xl mb-8 shadow-2xl shadow-orange-500/30"
          />

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
            <Image src="/logo-overtime.png" alt="" width={16} height={16} className="h-4 w-4 rounded" />
            <span className="text-sm font-medium text-white/90">{hero.subtitle}</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {hero.title}
          </h1>

          {/* Sticker icons */}
          <div className="flex justify-center gap-6 my-5">
            <Image src="/icons/icon-read.svg" alt="Read" width={44} height={44} className="h-11 w-11 drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
            <Image src="/icons/icon-touch.svg" alt="Touch" width={44} height={44} className="h-11 w-11 drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
            <Image src="/icons/icon-hear.svg" alt="Hear" width={44} height={44} className="h-11 w-11 drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] font-medium">
            {hero.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop/first-series"
              className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/40 hover:shadow-indigo-500/50 text-base"
            >
              Request a Kit
            </Link>
            <Link
              href="/shop/first-series"
              className="rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/40 hover:shadow-emerald-500/50 text-base"
            >
              Apply for a Grant
            </Link>
            <Link
              href="/community"
              className="rounded-xl bg-white/15 backdrop-blur-md border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/25 transition-all text-base"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT IS TACTIL ─── */}
      <Section title={whatIsTactil.title}>
        <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {whatIsTactil.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Soft divider */}
      <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ─── 3. FLAGSHIP PRODUCT ─── */}
      <Section
        id="flagship"
        className="bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-slate-900/50 dark:via-slate-900/50 dark:to-[#0b1120]"
        wide
      >
        <div className="text-center mb-12">
          <h2 id="flagship-heading" className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            {flagshipProduct.title}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {flagshipProduct.intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/shop/tactile-box-full.png"
              alt="Tactile box — full overview with Braille panels, wheels, motors, electronics, and gears"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/shop/braille-book-cover.png"
              alt="Braille book — Tactile Ecosystem: FIRST Tech Championship by Overtime FTC #33611"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3 mb-10" role="list">
          {flagshipProduct.items.map((item) => {
            const iconMap: Record<string, string> = {
              read: "/icons/icon-read.svg",
              touch: "/icons/icon-touch.svg",
              hear: "/icons/icon-hear.svg",
            };
            return (
              <li
                key={item.key}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-orange-500 transition-all"
              >
                <Image
                  src={iconMap[item.key] || "/icons/icon-braille.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 mb-4"
                />
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={flagshipProduct.ctaHref}
            className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-600/25"
          >
            Request a Kit
          </Link>
          <Link
            href={flagshipProduct.ctaHref}
            className="inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-all shadow-sm shadow-emerald-600/25"
          >
            Apply for Grant
          </Link>
        </div>
      </Section>

      {/* ─── 4. WHY IT MATTERS ─── */}
      <Section title={whyItMatters.title}>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          {whyItMatters.content}
        </p>
      </Section>

      {/* Soft divider */}
      <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ─── 5. PROOF / CREDIBILITY ─── */}
      <Section
        id="proof"
        className="bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-slate-900/50 dark:via-slate-900/50 dark:to-[#0b1120]"
        wide
      >
        <div className="text-center mb-12">
          <h2 id="proof-heading" className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Proof &amp; Credibility
          </h2>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16" role="list">
          {metrics.map((m) => (
            <li
              key={m.label}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <span className="font-display block text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                {m.value}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 block">
                {m.label}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          {mediaRecognition.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Tactil and Overtime have been featured on TV channels, news platforms, and social media.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {mediaRecognition.items.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                )}
                <span className="font-semibold text-sm text-slate-900 dark:text-white">
                  {item.name}
                </span>
                {"description" in item && item.description && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </span>
                )}
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                  {"platform" in item && item.platform === "youtube"
                    ? "Watch on YouTube →"
                    : "View →"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── 6. OVERTIME ORIGIN ─── */}
      <Section title={overtimeOrigin.title}>
        <div className="flex items-start gap-5 mb-10">
          <Image
            src="/logo-overtime.png"
            alt="Overtime FTC #33611 logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl shrink-0 shadow-sm"
          />
          <div className="space-y-3 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            {overtimeOrigin.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Projects by Overtime
        </h3>
        <ul className="grid gap-4 sm:grid-cols-3" role="list">
          {overtimeOrigin.projects.map((project) => (
            <li key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 h-full hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                <span className="font-bold text-slate-900 dark:text-white">
                  {project.name}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 flex-1 leading-relaxed">
                  {project.description}
                </span>
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform mt-1">
                  Visit →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Soft divider */}
      <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ─── 7. CTA BLOCK ─── */}
      <section
        id="cta"
        className="py-20 md:py-28 px-6"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-12 md:p-16 text-center shadow-xl shadow-indigo-600/20">
          <h2
            id="cta-heading"
            className="font-display text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight"
          >
            {ctaBlock.title}
          </h2>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto text-lg">
            {ctaBlock.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {ctaBlock.buttons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={`rounded-xl px-7 py-3.5 font-semibold transition-all shadow-sm text-base ${
                  btn.variant === "primary"
                    ? "bg-white text-indigo-700 hover:bg-indigo-50"
                    : btn.variant === "secondary"
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
