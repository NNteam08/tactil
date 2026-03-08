"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 px-4 py-3" role="alert">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Full name
            </span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              className="rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-shadow"
              placeholder="John Doe"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-shadow"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete="new-password"
              className="rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-shadow"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors shadow-sm shadow-indigo-600/25"
          >
            {loading ? "Creating account…" : "Register"}
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
