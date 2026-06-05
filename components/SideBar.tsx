"use client";

import Image from "next/image";
import LogoImage from "../public/trace_logo.png";

const SideBar = () => {
  return (
    <aside className="flex flex-col items-center py-6 px-4 ">
      <Image src={LogoImage} alt="trace logo" className="w-9" />
      <div></div>
    </aside>
  );
};

export default SideBar;
