import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { guideNames } from "@/content/shop";
import { guideUrls } from "@/lib/guides";

type Profile = { full_name: string | null; role: string } | null;
type PurchaseRequest = { id: string; product_id: string; status: string; created_at: string };
type GrantApp = { id: string; org_name: string | null; status: string; created_at: string };
type PartnerApp = { id: string; org_name: string | null; status: string; created_at: string };
type ChapterApp = { id: string; region: string | null; status: string; created_at: string };

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
    contacted: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
    fulfilled: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-200 dark:border-green-500/20",
    approved: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-200 dark:border-green-500/20",
    rejected: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20",
    cancelled: "bg-slate-50 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400 border-slate-200 dark:border-slate-500/20",
  };
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${colors[status] || colors.pending}`}>
      {status}
    </span>
  );
}

function SectionCard({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6">
      <h2 id={`${id}-heading`} className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ProfileContent({
  user,
  profile,
  purchaseRequests,
  grantApplications,
  partnerApplications,
  chapterApplications,
}: {
  user: User;
  profile: Profile;
  purchaseRequests: PurchaseRequest[];
  grantApplications: GrantApp[];
  partnerApplications: PartnerApp[];
  chapterApplications: ChapterApp[];
}) {
  const displayName = profile?.full_name || user.email?.split("@")[0] || "User";

  return (
    <div className="space-y-8">
      {/* Account */}
      <SectionCard id="account" title="Account">
        <dl className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Name</dt>
            <dd className="text-slate-900 dark:text-white font-medium">{displayName}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Email</dt>
            <dd className="text-slate-900 dark:text-white font-medium">{user.email}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Role</dt>
            <dd className="capitalize text-slate-900 dark:text-white font-medium">{profile?.role ?? "customer"}</dd>
          </div>
        </dl>
      </SectionCard>

      {/* Kit Requests */}
      <SectionCard id="kit-requests" title="Kit Requests">
        {purchaseRequests.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">
            No kit requests yet.{" "}
            <Link href="/shop/first-series" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Request a kit
            </Link>
          </p>
        ) : (
          <ul className="space-y-2" role="list">
            {purchaseRequests.map((req) => (
              <li key={req.id} className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-900/50 px-4 py-3">
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">FIRST Series Kit</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                    {new Date(req.created_at).toLocaleDateString()}
                  </span>
                </div>
                <StatusBadge status={req.status} />
              </li>
            ))}
          </ul>
        )}
      </SectionCard>

      {/* Grant Applications */}
      <SectionCard id="grant-apps" title="Grant Applications">
        {grantApplications.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">
            No grant applications.{" "}
            <Link href="/shop/first-series" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
              Apply for a grant
            </Link>
          </p>
        ) : (
          <ul className="space-y-2" role="list">
            {grantApplications.map((app) => (
              <li key={app.id} className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-900/50 px-4 py-3">
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">{app.org_name || "Grant application"}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
                <StatusBadge status={app.status} />
              </li>
            ))}
          </ul>
        )}
      </SectionCard>

      {/* Partner */}
      <SectionCard id="partner" title="Partner Application">
        {partnerApplications.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">
            No partner application.{" "}
            <Link href="/community#apply" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Apply as Partner
            </Link>
          </p>
        ) : (
          <ul className="space-y-2" role="list">
            {partnerApplications.map((app) => (
              <li key={app.id} className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-900/50 px-4 py-3">
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">{app.org_name || "Partner application"}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
                <StatusBadge status={app.status} />
              </li>
            ))}
          </ul>
        )}
      </SectionCard>

      {/* Chapter */}
      <SectionCard id="chapter" title="Chapter Application">
        {chapterApplications.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">
            No chapter application.{" "}
            <Link href="/community#apply" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Apply as International Chapter
            </Link>
          </p>
        ) : (
          <ul className="space-y-2" role="list">
            {chapterApplications.map((app) => (
              <li key={app.id} className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-900/50 px-4 py-3">
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">{app.region || "Chapter application"}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
                <StatusBadge status={app.status} />
              </li>
            ))}
          </ul>
        )}
      </SectionCard>

      {/* Resources */}
      <SectionCard id="resources" title="Resources">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={guideUrls.recreation}
            className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <div>
              <span className="font-medium text-slate-900 dark:text-white text-sm block">{guideNames.recreation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400">Download →</span>
            </div>
          </Link>
          <Link
            href={guideUrls.translation}
            className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </span>
            <div>
              <span className="font-medium text-slate-900 dark:text-white text-sm block">{guideNames.translation}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400">Download →</span>
            </div>
          </Link>
        </div>
      </SectionCard>
    </div>
  );
}
