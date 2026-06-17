"use client";

import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLoginButton from "@/components/AdminLoginButton";

const Page = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  if (user) return null;

  return (
    <div
      className="
      h-screen flex items-center justify-center
      bg-zinc-100 dark:bg-zinc-950
"
    >
      <AdminLoginButton />
    </div>
  );
};

export default Page;
