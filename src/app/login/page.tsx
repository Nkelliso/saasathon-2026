import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Access your Torque operations workspace.",
};

export default async function LoginPage() {
  return <AuthForm />;
}
