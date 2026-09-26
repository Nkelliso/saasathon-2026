import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create a Torque operations workspace.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
