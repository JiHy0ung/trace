import { dummyData } from "@/lib/dummy";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const data = dummyData.find((item) => item.id === id.toString());

  if (!data) {
    notFound();
  }

  return (
    <div
      className="h-screen w-full px-6
      flex flex-col justify-start items-center
      pt-18
      "
    >
      <div className="flex flex-col max-w-2xl divide-y divide-solid divide-zinc-300 gap-8">
        <div
          className="
          flex flex-col justify-start items-center gap-3
          pb-8
          "
        >
          <h1 className="font-bold text-3xl ">{data.title}</h1>
          <p className="font-medium text-xs">
            {data.date.toLocaleDateString()}
          </p>
        </div>
        <div>{data.contents}</div>
      </div>
    </div>
  );
};

export default page;
