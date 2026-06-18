"use client";

import Image from "next/image";
import LogoDark from "../public/trace_logo_dark.png";
import LogoLight from "../public/trace_logo_light.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";
import { HomeIcon } from "./ui/home";
import { BookTextIcon } from "./ui/book-text";
import { PenToolIcon } from "./ui/pen-tool";
import { MoonIcon } from "./ui/moon";
import { SunIcon } from "./ui/sun";
import { KeyIcon } from "./ui/key";
import { UserRoundCheckIcon } from "./ui/user-round-check";
import { LogoutIcon } from "./ui/logout";

const ADMIN_ID = process.env.NEXT_PUBLIC_USER_ID;

const SideBar = () => {
  const pathName = usePathname();

  const { theme, setTheme, systemTheme } = useTheme();

  const { user, setUser } = useAuth();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const isTilPage = pathName.startsWith("/til");

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const isAdmin = user?.id === ADMIN_ID;

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <aside
      className={`
      w-18 shrink-0
      flex flex-col items-center pt-6 px-1 pb-8 gap-15
      bg-zinc-100 dark:bg-zinc-950
      border-r-1
      border-zinc-300 dark:border-zinc-800      
      `}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={currentTheme === "dark" ? LogoDark : LogoLight}
          alt="trace logo"
          width={40}
          height={40}
        />
      </Link>

      <div className="h-full flex flex-col items-center justify-between gap-4">
        <div className="h-full flex flex-col items-center gap-3">
          <Link href={"/"} className="p-3">
            <HomeIcon
              size={24}
              className={` ${pathName === "/" ? (currentTheme === "dark" ? "text-zinc-100" : "text-zinc-800") : "text-zinc-400"}`}
            />
          </Link>

          <Link href={"/til"} className="p-3">
            <BookTextIcon
              size={24}
              className={` ${isTilPage ? (currentTheme === "dark" ? "text-zinc-100" : "text-zinc-800") : "text-zinc-400"}`}
            />
          </Link>

          {isAdmin && (
            <Link href="/admin/write" className="p-3">
              <PenToolIcon
                size={24}
                className={` ${pathName === "/admin/write" ? (currentTheme === "dark" ? "text-zinc-100" : "text-zinc-800") : "text-zinc-400"}`}
              />
            </Link>
          )}
        </div>

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="flex self-end p-3 cursor-pointer"
        >
          {theme === "dark" ? (
            <MoonIcon
              size={24}
              className={"text-zinc-300 hover:text-sky-300"}
            />
          ) : (
            <SunIcon
              size={24}
              className={"text-zinc-400 hover:text-amber-400"}
            />
          )}
        </button>

        <button
          onClick={() => {
            if (user) {
              logout();
            } else {
              window.location.href = "/login";
            }
          }}
          className="cursor-pointer"
        >
          {user ? (
            <div className="relative w-6 h-6 group cursor-pointer">
              <UserRoundCheckIcon
                size={24}
                className="absolute inset-0 text-pink-600 opacity-100 group-hover:opacity-0 transition"
              />
              <LogoutIcon
                size={24}
                className="absolute inset-0 text-pink-600 opacity-0 group-hover:opacity-100 transition"
              />
            </div>
          ) : (
            <KeyIcon
              size={24}
              className="text-zinc-500 hover:text-yellow-400"
            />
          )}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
