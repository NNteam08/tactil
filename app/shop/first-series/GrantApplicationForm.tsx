"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const inputClass = "rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-shadow";

export function GrantApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserId(user?.id ?? null);
      setAuthLoading(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userId) return;
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value ?? "";
    const supabase = createClient();
    const { error: err } = await supabase.from("grant_applications").insert({
      user_id: userId,
      org_name: get("org_name") || null,
      org_type: get("org_type") || null,
      contact: get("contact") || null,
      region: get("region") || null,
      student_count: get("student_count") || null,
      message: get("message") || null,
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    setSubmitted(true);
  }

  if (authLoading) {
    return <p className="text-slate-500 dark:text-slate-400 animate-pulse">Loading…</p>;
  }

  if (!userId) {
    return (
      <div className="text-center py-6">
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Sign in to submit a grant application.
        </p>
        <Link
          href="/login?redirectTo=/shop/first-series"
          className="inline-flex rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/25"
        >
          Log in to apply
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-5 py-4">
        <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Application submitted!</p>
        <p className="text-sm text-green-600 dark:text-green-300">
          We&apos;ll review your application and get back to you. Track status in your{" "}
          <Link href="/profile" className="font-medium underline">Profile</Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 px-4 py-3" role="alert">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Organization name *</span>
          <input type="text" name="org_name" required className={inputClass} placeholder="School or organization" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Type</span>
          <select name="org_type" className={inputClass}>
            <option value="">Select type</option>
            <option value="school">School</option>
            <option value="ngo">NGO / Non-profit</option>
            <option value="community_center">Community Center</option>
            <option value="ftc_team">FTC Team</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Contact email *</span>
          <input type="email" name="contact" required className={inputClass} placeholder="you@org.com" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Region / Country *</span>
          <input type="text" name="region" required className={inputClass} placeholder="Country or region" />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Number of students who will benefit</span>
        <input type="text" name="student_count" className={inputClass} placeholder="e.g. 15 students" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Why does your organization need this kit?</span>
        <textarea
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your students, programs, and how the Tactile Ecosystem would help"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-500 disabled:opacity-50 transition-colors shadow-sm shadow-emerald-600/25"
      >
        {loading ? "Submitting…" : "Submit Grant Application"}
      </button>
    </form>
  );
}
