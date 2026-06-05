const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

interface IApod {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: "image" | "video";
  service_version?: string;
  title: string;
  url: string;
}

const SIX_HOURS = 60 * 60 * 6;

export const getAPOD = async (): Promise<IApod> => {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    const response = await fetch(url, { next: { revalidate: SIX_HOURS } });
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error("NASA API 호출 에러");
    }
  } catch (error) {
    throw new Error("NASA API 호출 에러 발생", { cause: error });
  }
};
