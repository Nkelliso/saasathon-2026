import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Access your Torque operations workspace.",
};

export default async function LoginPage(props: PageProps<"/login">) {
  const { error } = await props.searchParams;
  const initialError = Array.isArray(error) ? error[0] : error;

  return <AuthForm mode="login" initialError={initialError} />;
}
