"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const inputClass = "rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-shadow";

export function ChapterApplyForm() {
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
    const region = (form.elements.namedItem("region") as HTMLInputElement)?.value ?? "";
    const contact = (form.elements.namedItem("contact") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
    const supabase = createClient();
    const { error: err } = await supabase.from("chapter_applications").insert({
      user_id: userId,
      region: region || null,
      contact: contact || null,
      message: message || null,
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
      <p className="text-slate-500 dark:text-slate-400">
        Please{" "}
        <Link
          href="/login?redirectTo=/community#apply"
          className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          log in
        </Link>{" "}
        to apply as an International Chapter.
      </p>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-4 py-3">
        <p className="text-green-700 dark:text-green-400">
          Application submitted. Check status in your{" "}
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
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Region</span>
        <input type="text" name="region" className={inputClass} placeholder="Country or region for the chapter" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Contact</span>
        <input type="text" name="contact" className={inputClass} placeholder="Email or phone" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
        <textarea
          name="message"
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your capacity for local production, distribution, translation"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors shadow-sm shadow-indigo-600/25"
      >
        {loading ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
