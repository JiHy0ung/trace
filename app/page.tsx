import { getAPOD } from "@/lib/nasa";
import Link from "next/link";

export default async function Home() {
  const data = await getAPOD();

  // 기본 이미지 링크
  // https://apod.nasa.gov/apod/image/2606/SaturnRingsMoons_Cassini_960.jpg
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${data?.hdurl})` }}
    ></div>
  );
}
