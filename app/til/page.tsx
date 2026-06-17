import { TilCard } from "@/components/TilCard";
import { dummyData } from "@/lib/dummy";
import Link from "next/link";

export default function TilPage() {
  const data = dummyData;
  return (
    <div
      className="w-full h-screen
      flex flex-col justify-start items-center
      pt-12
      bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="w-full max-w-2xl flex flex-col gap-9 px-6">
        <h1
          className="
          font-normal tracking-tighter
          text-6xl
          text-zinc-500 dark:text-zinc-400
          [&_strong]:text-zinc-700
          [&_strong]:dark:text-zinc-100
          [&_strong]:text-5xl
          [&_strong]:font-black"
        >
          <strong>T</strong>oday <strong>I</strong> <strong>L</strong>earn
        </h1>
        <div
          className="
            grid
            grid-cols-1
            gap-5"
        >
          {data.map((item) => (
            <Link key={item.id} href={`/til/${item.id}`}>
              <TilCard data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
