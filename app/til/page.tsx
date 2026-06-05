import { TilCard } from "@/components/TilCard";
import { dummyData } from "@/lib/dummy";

export default function TilPage() {
  const data = dummyData;
  return (
    <div
      className="w-full h-screen
      flex flex-col justify-start items-center"
    >
      <div className="w-full max-w-2xl flex flex-col gap-9 px-6">
        <h1
          className="text-6xl font-normal tracking-tighter text-indigo-200/70
          [&_strong]:text-white [&_strong]:text-5xl [&_strong]:font-black"
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
            <TilCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
