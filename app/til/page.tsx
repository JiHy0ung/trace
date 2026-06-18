import { TilCard } from "@/components/TilCard";
import { dummyData } from "@/lib/dummy";
import Link from "next/link";

export default function TilPage() {
  const data = dummyData;
  return (
    <div className="w-full h-screen flex flex-col items-center bg-zinc-50 dark:bg-zinc-950">
      <header className="flex-none w-full max-w-2xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
          Learning Journal
        </p>
        <h1
          className="
          mb-6
          font-bold tracking-tighter
          text-5xl
          text-zinc-400
          [&_strong]:text-zinc-700
          [&_strong]:dark:text-zinc-100
          [&_strong]:text-4xl
          [&_strong]:font-black"
        >
          <strong>T</strong>oday <strong>I</strong> <strong>L</strong>earn
        </h1>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
            {data.length} entries
          </span>
        </div>
      </header>

      <div
        id="list"
        className=" flex-1
        overflow-y-auto custom-scroll"
      >
        <div className="w-full max-w-2xl mx-auto px-6 pb-16 flex flex-col">
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
