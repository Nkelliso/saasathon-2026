"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import "./Hero.css";

const transition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const };

export default function Hero() {
  return (
    <section className="hero-bg relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_62%_36%,rgba(255,157,0,0.25),transparent_48%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="mb-6 flex items-center gap-2">
            <span className="bg-orange-900 text-orange-300 rounded-full text-sm px-2">
              Operational Intelligence
            </span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-fg sm:text-6xl lg:text-7xl lg:leading-[0.98]">
            Keep the line <span className="text-fg-muted">moving.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-fg-muted sm:text-lg">
            Instant machine diagnosis from service records, manufacturer
            manuals, and the knowledge your team builds on the floor.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/query"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-black transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,107,26,0.25)]"
            >
              Diagnose a machine
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
            <a
              href="#system"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm text-fg transition-colors hover:border-line-strong"
            >
              See the system
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[530px]"
        >
          PLACEHOLDER SECTION
        </motion.div>
      </div>
    </section>
  );
}
