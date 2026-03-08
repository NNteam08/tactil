import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/community", label: "Community" },
  { href: "/profile", label: "Profile" },
];

const overtimeLinks = [
  { href: "https://overtime-team.vercel.app", label: "Team Overtime" },
  { href: "https://ftcalliancefinder.netlify.app", label: "FTC Alliance Finder" },
  { href: "https://psychohel.netlify.app", label: "Психоподдержка FTC" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0a0f1a]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo-tactil.svg"
                alt="Tactil"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl"
              />
              <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Tactil
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-3">
              Tactile learning kits for blind and low-vision students. Request a kit or apply for a grant.
            </p>
            <div className="flex items-center gap-3">
              <Image src="/icons/icon-read.svg" alt="" width={24} height={24} className="h-6 w-6 opacity-60" />
              <Image src="/icons/icon-touch.svg" alt="" width={24} height={24} className="h-6 w-6 opacity-60" />
              <Image src="/icons/icon-hear.svg" alt="" width={24} height={24} className="h-6 w-6 opacity-60" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Overtime FTC #33611
            </p>
            <ul className="space-y-2" role="list">
              {overtimeLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <Image
              src="/logo-overtime.png"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 rounded"
            />
            <span>Launched by Overtime FTC #33611</span>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Tactil
          </span>
        </div>
      </div>
    </footer>
  );
}
