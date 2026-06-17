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

export const getAPOD = async (): Promise<IApod | null> => {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: SIX_HOURS },
    });

    if (!response.ok) {
      console.error("NASA API 실패:", response.status);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("NASA API 에러:", error);
    return null;
  }
};
