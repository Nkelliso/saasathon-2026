"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building,
  Cog,
  Globe,
  KeyRound,
  Mail,
  UserRound,
} from "lucide-react";
import BackgroundGears from "@/components/graphics/BackgroundGears";
import {
  createSupabaseBrowserClient,
  isSupabaseBrowserConfigured,
} from "@/lib/supabase/client";

type AuthMode = "login" | "signup";

type AuthFormProps = {
  mode: AuthMode;
  initialError?: string;
};

const content = {
  login: {
    eyebrow: "// secure access",
    title: "Welcome back to the line.",
    description: "Sign in to your facility knowledge base and pick up where the last repair ended.",
    submit: "Enter workspace",
    switchPrompt: "New to Torque?",
    switchLabel: "Create an account",
    switchHref: "/signup",
  },
  signup: {
    eyebrow: "// establish access",
    title: "Put every answer on site.",
    description: "Create your workspace and start capturing the knowledge your machines depend on.",
    submit: "Create workspace",
    switchPrompt: "Already have access?",
    switchLabel: "Log in",
    switchHref: "/login",
  },
} as const;

function Field({
  label,
  name,
  type,
  placeholder,
  icon: Icon,
  autoComplete,
}: {
  label: string;
  name: string;
  type: "email" | "password" | "text";
  placeholder: string;
  icon: typeof Mail;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
        {label}
      </span>
      <span className="flex items-center gap-3 rounded-md border border-line bg-surface-2 px-3.5 transition-colors focus-within:border-accent focus-within:ring-1 focus-within:ring-accent-dim">
        <Icon className="size-4 shrink-0 text-fg-dim" strokeWidth={1.5} />
        <input
          required
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="h-11 w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-dim"
        />
      </span>
    </label>
  );
}

export default function AuthForm({ mode, initialError }: AuthFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "error" | "success";
    message: string;
  } | null>(() =>
    initialError ? { kind: "error", message: initialError } : null,
  );
  const copy = content[mode];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    if (!isSupabaseBrowserConfigured()) {
      setFeedback({
        kind: "error",
        message: "Supabase is not configured. Add the public project URL and publishable key to continue.",
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const supabase = createSupabaseBrowserClient();

      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
          setFeedback({ kind: "error", message: error.message });
          return;
        }

        router.replace("/query");
        router.refresh();
        return;
      }

      const name = String(formData.get("name") ?? "").trim();
      const organizationName = String(formData.get("organization") ?? "").trim();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            organization_name: organizationName,
          },
          emailRedirectTo: new URL(
            "/auth/callback?next=/query",
            window.location.origin,
          ).toString(),
        },
      });

      if (error) {
        setFeedback({ kind: "error", message: error.message });
        return;
      }

      if (data.session) {
        router.replace("/query");
        router.refresh();
        return;
      }

      setFeedback({
        kind: "success",
        message: "Check your work email to confirm your account, then return to sign in.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message: "Unable to contact Supabase. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function continueWithGoogle() {
    setFeedback(null);

    if (!isSupabaseBrowserConfigured()) {
      setFeedback({
        kind: "error",
        message: "Supabase is not configured. Add the public project URL and publishable key to continue.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: new URL(
            "/auth/callback?next=/query",
            window.location.origin,
          ).toString(),
        },
      });

      if (error || !data.url) {
        setFeedback({
          kind: "error",
          message: error?.message ?? "Google sign-in could not be started.",
        });
        return;
      }

      window.location.assign(data.url);
    } catch {
      setFeedback({
        kind: "error",
        message: "Unable to contact Supabase. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-grid relative min-h-screen overflow-hidden bg-bg px-5 py-5 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,var(--color-accent-dim),transparent_38%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-6xl overflow-hidden rounded-lg border border-line bg-surface lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden border-r border-line p-10 lg:block">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_52%,var(--color-accent-dim),transparent_42%)]" />
          <div className="pointer-events-none absolute -right-36 top-1/2 -translate-y-1/2 opacity-20">
            <BackgroundGears />
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <Link href="/" className="inline-flex w-fit items-center gap-2.5" aria-label="Torque home">
              <span className="grid size-8 place-items-center rounded-md border border-line bg-surface-2">
                <Cog className="size-4 text-accent" strokeWidth={1.5} />
              </span>
              <span className="font-mono text-xs font-medium tracking-[0.16em] text-fg">TORQUE</span>
            </Link>

            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">[ Operations intelligence ]</p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-fg">Diagnose the signal. Keep moving.</h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-fg-muted">
                Global machine knowledge and site-specific context, available to every operator at the point of failure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-surface p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-fg-muted">Knowledge sources</p>
                <p className="mt-2 font-mono text-lg tabular-nums text-fg">1,284</p>
              </div>
              <div className="bg-surface p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-fg-muted">Median answer</p>
                <p className="mt-2 font-mono text-lg tabular-nums text-fg">&lt; 2 min</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[680px] items-center justify-center px-5 py-12 sm:px-10 lg:min-h-0">
          <div className="w-full max-w-sm">
            <Link href="/" className="mb-14 inline-flex items-center gap-2.5 lg:hidden" aria-label="Torque home">
              <span className="grid size-8 place-items-center rounded-md border border-line bg-surface-2">
                <Cog className="size-4 text-accent" strokeWidth={1.5} />
              </span>
              <span className="font-mono text-xs font-medium tracking-[0.16em] text-fg">TORQUE</span>
            </Link>

            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{copy.title}</h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-fg-muted">{copy.description}</p>

            <button
              type="button"
              onClick={continueWithGoogle}
              disabled={isSubmitting}
              className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-line bg-surface-2 text-sm font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Globe className="size-4" strokeWidth={1.5} />
              Continue with Google
            </button>

            <div className="my-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.13em] text-fg-dim">
              <span className="h-px flex-1 bg-line" />
              or use email
              <span className="h-px flex-1 bg-line" />
            </div>

            <form onSubmit={submit} className="space-y-4">
              {mode === "signup" && (
                <>
                  <Field label="Your name" name="name" type="text" placeholder="Dana Reyes" icon={UserRound} autoComplete="name" />
                  <Field label="Facility" name="organization" type="text" placeholder="Kestrel Precision" icon={Building} autoComplete="organization" />
                </>
              )}
              <Field label="Work email" name="email" type="email" placeholder="operator@factory.com" icon={Mail} autoComplete="email" />
              <Field label="Password" name="password" type="password" placeholder="••••••••••••" icon={KeyRound} autoComplete={mode === "login" ? "current-password" : "new-password"} />

              {mode === "login" && (
                <button type="button" className="block text-sm text-fg-muted transition-colors hover:text-fg">
                  Forgot password?
                </button>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-medium text-black transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,107,26,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Authorizing" : copy.submit}
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </button>
            </form>

            {feedback && (
              <p
                role={feedback.kind === "error" ? "alert" : "status"}
                className={`mt-4 border-l-2 px-3 py-2 text-sm leading-6 ${feedback.kind === "error" ? "border-fault bg-surface-2 text-fg-muted" : "border-ok bg-surface-2 text-fg-muted"}`}
              >
                {feedback.message}
              </p>
            )}

            <p className="mt-7 text-center text-sm text-fg-muted">
              {copy.switchPrompt}{" "}
              <Link href={copy.switchHref} className="text-fg transition-colors hover:text-accent">
                {copy.switchLabel}
              </Link>
            </p>

            <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.13em] text-fg-dim">
              Encrypted session / Role-based access
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
