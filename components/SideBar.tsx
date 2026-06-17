"use client";

import Image from "next/image";
import LogoDark from "../public/trace_logo_dark.png";
import LogoLight from "../public/trace_logo_light.png";
import { House, Moon, NotebookText, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const SideBar = () => {
  const pathName = usePathname();

  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return (
    <aside
      className={`
      w-18 shrink-0
      flex flex-col items-center pt-6 px-1 pb-8 gap-15
      bg-zinc-200 dark:bg-zinc-900
      border-r-1
      border-zinc-300 dark:border-zinc-800      
      `}
    >
      <Link href={"/"} className="mx-4 cursor-pointer">
        <Image
          src={currentTheme === "dark" ? LogoDark : LogoLight}
          alt="trace logo"
          width={36}
          height={36}
        />
      </Link>

      <div className="h-full flex flex-col items-center justify-between gap-1">
        <div className="h-full flex flex-col items-center gap-3">
          <Link href={"/"} className="p-3">
            <House
              className={` ${pathName === "/" ? (currentTheme === "dark" ? "text-zinc-100" : "text-zinc-800") : "text-zinc-400"}`}
              strokeWidth={2}
            />
          </Link>

          <Link href={"/til"} className="p-3">
            <NotebookText
              className={` ${pathName === "/til" ? (currentTheme === "dark" ? "text-zinc-100" : "text-zinc-800") : "text-zinc-400"}`}
              strokeWidth={2}
            />
          </Link>
        </div>

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="flex self-end p-3 cursor-pointer"
        >
          {theme === "dark" ? (
            <Moon className={"text-sky-300 fill-current"} strokeWidth={2} />
          ) : (
            <Sun className={"text-amber-500 fill-current"} />
          )}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
