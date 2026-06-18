import { ITil } from "@/types";

interface TilCardProps {
  data: ITil;
  index?: number;
}

export const TilCard = ({ data, index }: TilCardProps) => {
  return (
    <article className="group py-8 px-4 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-start gap-6">
        {index !== undefined && (
          <span className="text-xs font-mono text-zinc-300 dark:text-zinc-700 pt-1 min-w-[2rem] select-none">
            {String(index).padStart(2, "0")}
          </span>
        )}

        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100  transition-colors duration-200">
            {data.title}
          </h2>

          <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed line-clamp-2">
            {data.contents}
          </p>

          <div className="flex items-center justify-between">
            <time className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
              {data.date.toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
            <span className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 group-hover:gap-2 transition-all duration-200">
              Read more <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
