"use client";

import { useAuth } from "@/app/context/AuthContext";
import { editPost, getPostById } from "@/lib/post";
import { supabase } from "@/lib/supabase";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditPage({ params }: PageProps) {
  const { id } = use(params);
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [saveTag, setSaveTag] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(Number(id));

      if (!post) return;

      setTitle(post.title);
      setContents(post.contents);
      setTags(post.tags);
    };

    fetchPost();
  }, [id]);
  const { user, setUser } = useAuth();
  const router = useRouter();

  const { theme } = useTheme();

  const mdTheme: "light" | "dark" = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      setUser(null);
      router.replace("/");
    };

    if (!user) return;

    if (user.id !== USER_ID) {
      logout();
    }
  }, [user, router, setUser]);

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
          value={contents}
          onChange={(v) => setContents(v || "")}
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
        <div className="flex justify-center items-center gap-3">
          {tags.map((item, i) => (
            <div
              key={i}
              className="
              flex justify-center items-center gap-1 px-2 py-1
              text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400
              bg-zinc-200 dark:bg-zinc-800
              border border-zinc-300 dark:border-zinc-700 rounded"
            >
              #{item}
              <button
                onClick={() => {
                  setTags(tags.filter((tag) => tag !== item));
                }}
                className="
                w-4 h-4
                flex justify-center items-center pb-0.5
                rounded-xl
                text-[10px] text-zinc-500 dark:text-zinc-400
                bg-zinc-300 dark:bg-zinc-700
                text-zinc-500 dark:text-zinc-400
                hover:bg-zinc-300/50 hover:dark:bg-zinc-600
                cursor-pointer
                "
              >
                x
              </button>
            </div>
          ))}
          <input
            value={saveTag}
            onChange={(e) => setSaveTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (tags.includes(saveTag)) return;
                setTags([...tags, saveTag.trim()]);
                setSaveTag("");
              }
            }}
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
          onClick={() => {
            if (!title.trim() || !contents.trim()) {
              console.log("제목/내용을 작성해주세요.");
              router.replace("/til");
              return;
            }
            editPost(Number(id), title, contents, tags);
            router.replace("/til");
          }}
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
          편집
        </button>
      </div>
    </div>
  );
}
