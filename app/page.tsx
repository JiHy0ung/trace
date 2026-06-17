import { getAPOD } from "@/lib/nasa";

export default async function Home() {
  const data = await getAPOD();

  const ImageUrl = data
    ? data?.hdurl
    : "https://apod.nasa.gov/apod/image/2606/SaturnRingsMoons_Cassini_960.jpg";

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${ImageUrl})` }}
    ></div>
  );
}
