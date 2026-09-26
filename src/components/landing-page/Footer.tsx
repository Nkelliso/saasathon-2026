import logo from "@/assets/logo.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={logo} alt={""} className="h-12 w-48" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-fg-muted">
            Operations knowledge for the machines your business depends on.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Access workspace
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
          </Link>
          <p className="text-sm text-fg-dim">© 2026 Torque</p>
        </div>
      </div>
    </footer>
  );
}
