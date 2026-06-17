"use client";

import { useAuth } from "@/app/context/AuthContext";
import { supabase } from "@/lib/supabase";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { user, setUser } = useAuth();
  const router = useRouter();

  const { theme } = useTheme();

  const mdTheme: "light" | "dark" = theme === "dark" ? "dark" : "light";

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.replace("/");
  };

  useEffect(() => {
    if (!user) return;

    if (user.id !== USER_ID) {
      logout();
    }
  }, [user]);

  if (!user || user.id !== USER_ID) {
    return null; // 또는 loading UI
  }

  return (
    <div
      className="
      w-full h-screen
      flex flex-col justify-start items-center
      bg-zinc-50 dark:bg-zinc-950
      "
    >
      <input
        className="
        w-full px-6 py-4
        outline-none
        border-b-[0.5px] border-zinc-400 dark:border-zinc-700
        text-3xl text-zinc-900 dark:text-zinc-100
        bg-zinc-50 dark:bg-zinc-950
        font-semibold
        "
        placeholder="제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="w-full h-full">
        <MDEditor
          value={content}
          onChange={(v) => setContent(v || "")}
          height="100%"
          data-color-mode={mdTheme}
          toolbarBottom={true}
          preview="edit"
        />
      </div>

      <div
        className="
        w-full p-4
        flex justify-between items-center
        bg-zinc-50 dark:bg-zinc-950
        border-t-[0.5px] border-zinc-400 dark:border-zinc-700
        "
      >
        <div className="flex flex-col">
          <div className="flex"></div>
          <input
            placeholder="#태그 입력"
            className="
            px-4 py-2
            outline-none
            border-b-[0.5px] border-zinc-300 dark:border-zinc-700 
            text-zinc-900 dark:text-zinc-200 text-sm
            placeholder:text-zinc-500
            "
          />
        </div>
        <button
          className="
          px-10 py-2.5
          bg-zinc-900 dark:bg-zinc-300
          text-sm text-zinc-100 dark:text-zinc-900
          font-medium
          border-[0.5px] border-zinc-500 rounded-4xl
          cursor-pointer
          hover:bg-zinc-700 hover:dark:bg-zinc-400
          "
        >
          발행
        </button>
      </div>
    </div>
  );
}
