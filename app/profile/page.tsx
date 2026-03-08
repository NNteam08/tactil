import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProfileContent } from "./ProfileContent";
import { LogOutButton } from "./LogOutButton";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirectTo=/profile");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  const { data: purchaseRequests } = await supabase
    .from("purchase_requests")
    .select("id, product_id, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const { data: grantApps } = await supabase
    .from("grant_applications")
    .select("id, org_name, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const { data: partnerApps } = await supabase
    .from("partner_applications")
    .select("id, org_name, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const { data: chapterApps } = await supabase
    .from("chapter_applications")
    .select("id, region, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Profile
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage your account and track your requests
          </p>
        </div>
        <LogOutButton />
      </div>
      <ProfileContent
        user={user}
        profile={profile}
        purchaseRequests={purchaseRequests ?? []}
        grantApplications={grantApps ?? []}
        partnerApplications={partnerApps ?? []}
        chapterApplications={chapterApps ?? []}
      />
    </div>
  );
}
