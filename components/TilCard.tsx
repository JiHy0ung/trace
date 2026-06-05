import { ITil } from "@/types";

interface TilCardProps {
  data: ITil;
}

export const TilCard = ({ data }: TilCardProps) => {
  return (
    <div
      className="
      flex flex-col justify-center items-start gap-2 px-6 py-5
      bg-indigo-900/10
      border-[1px] border-indigo-300/30 rounded-xl"
    >
      <div className="flex justify-center items-center gap-2">
        {data.tags.map((tag, index) => (
          <div
            key={index}
            className="
            flex justify-center items-center px-3
            rounded-xl
            text-indigo-300 font-medium text-sm
            bg-indigo-300/10
            "
          >
            {tag}
          </div>
        ))}
      </div>

      <h1 className="font-semibold">{data.title}</h1>

      <p className="text-sm text-white/60 break-keep">
        {data.contents.length > 100
          ? data.contents.slice(0, 100) + "..."
          : data.contents}
      </p>

      <div className="w-full flex justify-between text-xs">
        <p className="text-xs">{data.date.toLocaleDateString()}</p>
        <p
          className="
          relative
          inline-block
          text-indigo-300
          cursor-pointer

          after:absolute
          after:left-0
          after:bottom-0
          after:h-[.5px]
          after:w-0
          after:bg-current

          after:transition-all
          after:duration-300

          hover:after:w-full
          "
        >
          → 자세히 보기
        </p>
      </div>
    </div>
  );
};
