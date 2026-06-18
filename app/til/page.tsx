import { TilCard } from "@/components/TilCard";
import { dummyData } from "@/lib/dummy";
import Link from "next/link";

export default function TilPage() {
  const data = dummyData;
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-2xl mx-auto px-6 pt-20 pb-32">
        <header className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Learning Journal
          </p>
          <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Today I Learn
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
              {data.length} entries
            </span>
          </div>
        </header>

        <div className="flex flex-col">
          {data.map((item, index) => (
            <Link key={item.id} href={`/til/${item.id}`}>
              <TilCard data={item} index={index + 1} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
