"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { ArrowRight, Globe } from "lucide-react";
import BackgroundGears from "../graphics/BackgroundGears";
import "../landing-page/Hero.css";

export default function AuthForm() {
  const copy = {
    // eyebrow: "// secure access",
    title: "Welcome to Torque",
    description:
      "Sign in to your facility knowledge base and pick up where the last repair ended.",
    submit: "Enter workspace",
    switchPrompt: "New to Torque?",
    switchLabel: "Create an account",
    switchHref: "/signup",
  } as const;

  return (
    <main className="auth-grid relative grid min-h-screen place-items-center overflow-hidden bg-bg px-5 py-10 sm:p-8">
      {/* <div className="pointer-events-none absolute left-1/2 top-1/2 size-[72vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[46vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line opacity-40" /> */}

      <section className="relative w-full max-w-lg overflow-hidden rounded-lg border border-line bg-surface p-7 sm:p-10">
        <div className="relative mx-auto max-w-md">
          <div className="pointer-events-none absolute -right-36 top-1/2 -translate-y-1/2 opacity-20">
            <BackgroundGears />
          </div>
          <Link
            href="/"
            className="mb-10 inline-flex w-fit items-center gap-2.5"
            aria-label="Torque home"
          >
            <Image alt="" src={logo} className="h-14 w-44" />
          </Link>

          <div>
            <span className="bg-orange-900 text-orange-300 rounded-full text-sm px-2">
              Organisation Dashboard
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-fg-muted">
            {copy.description}
          </p>

          <Link
            href="/machine"
            className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-line bg-surface-2 text-sm font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface"
          >
            <Globe className="size-4" strokeWidth={1.5} />
            Access the demo
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
