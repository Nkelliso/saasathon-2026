import type { Metadata } from "next";
import { QueryConsole } from "@/components/query/query-console";
import { requireUser } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Diagnose",
  description: "Query global and site-specific machine knowledge.",
};

export default async function QueryPage() {
  await requireUser();
  return <QueryConsole />;
}
