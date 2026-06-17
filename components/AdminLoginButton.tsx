"use client";

import { supabase } from "@/lib/supabase";
import { GithubIcon } from "./ui/github";

const AdminLoginButton = () => {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/admin/write`,
      },
    });
  };

  return (
    <button
      onClick={login}
      className="
      flex justify-center items-center gap-1
      px-4 py-2
      border rounded
      dark:text-zinc-100
      cursor-pointer
      "
    >
      Login with{" "}
      <span>
        <GithubIcon size={18} />
      </span>
      GitHub
    </button>
  );
};

export default AdminLoginButton;
