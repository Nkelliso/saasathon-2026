import type { Metadata } from "next";
import { OrganizationConsole } from "@/components/organization/organization-console";

export const metadata: Metadata = {
  title: "Organization",
  description: "Manage organization members.",
};

export default function OrgPage() {
  return <OrganizationConsole />;
}

