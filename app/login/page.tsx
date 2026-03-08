import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-sm px-4 py-16 animate-pulse text-neutral-500">Loading…</div>}>
      <LoginForm />
    </Suspense>
  );
}
