import MarkdownViewer from "@/components/MarkdownViewer";
import PostActions from "@/components/PostActions";
import { getPostById } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const post = await getPostById(Number(id));
  if (!post) notFound();

  return (
    <div className="h-screen w-full flex flex-col bg-zinc-100 dark:bg-zinc-950 overflow-y-auto custom-scroll">
      <div className="w-full max-w-2xl mx-auto px-6 pt-16 pb-32">
        <Link
          href="/til"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 mb-16"
        >
          ← back
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {post?.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 rounded bg-zinc-200 dark:bg-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-snug">
            {post?.title}
          </h1>

          <div className="flex items-center gap-3">
            <time className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
              {new Date(post?.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <PostActions post={post} />
          </div>
        </header>

        <MarkdownViewer contents={post?.contents} />
      </div>
    </div>
  );
};

export default page;
