import { getAPOD } from "@/lib/nasa";
import Link from "next/link";

export default async function Home() {
  const data = await getAPOD();

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${data.hdurl})` }}
    >
      <Link href="/til">TIL 페이지 이동</Link>
    </div>
  );
}
