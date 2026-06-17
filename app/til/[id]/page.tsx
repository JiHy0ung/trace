import { dummyData } from "@/lib/dummy";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const data = dummyData.find((item) => item.id === id);

  if (!data) {
    notFound();
  }

  return (
    <div
      className="h-screen w-full px-6
      flex flex-col justify-start items-center
      pt-18
      bg-zinc-100 dark:bg-zinc-950
      "
    >
      <div className="flex flex-col max-w-2xl divide-y-[0.5px] divide-solid divide-zinc-700 gap-8">
        <div
          className="
          flex flex-col justify-start items-center gap-3
          pb-8
          "
        >
          <h1 className="font-bold text-3xl dark:text-zinc-100">
            {data.title}
          </h1>
          <p className="font-medium text-xs text-zinc-400 ">
            {data.date.toLocaleDateString("ko-KR")}
          </p>
        </div>
        <div className="dark:text-zinc-100">{data.contents}</div>
      </div>
    </div>
  );
};

export default page;
