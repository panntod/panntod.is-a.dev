import cn from "@/lib/clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../typography";

export interface ISpotify {
  timestamp: number;
  item?: Item;
  is_playing: boolean;
}

export interface Item {
  album: Album;
  artists: Artist[];
  external_urls: { spotify: string };
  duration_ms: number;
  id: string;
  name: string;
  uri: string;
}

export interface Album {
  images: Image[];
  name: string;
}

export interface Artist {
  name: string;
}

export interface Image {
  url: string;
}

export const SpotifyNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState({
    artist: "Artist",
    external_url: "#",
    song: "Not Tracked",
    cover: "/spotify-logo.png",
    is_playing: false
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) throw new Error("Failed to fetch");

        const data: ISpotify = await response.json();

        if (data.item) {
          setNowPlaying({
            artist: data.item.artists.map(artist => artist.name).join(", "),
            external_url: data.item.external_urls.spotify,
            song: data.item.name,
            cover: data.item.album.images[0]?.url || "/spotify-logo.png",
            is_playing: data.is_playing
          });
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchNowPlaying();
    intervalRef.current = setInterval(fetchNowPlaying, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Link
      to={nowPlaying.external_url}
      target="_blank"
      className={cn(
        "flex items-center p-2 w-[400px]",
        nowPlaying.is_playing ? "justify-around" : "justify-center animate-pulse"
      )}
    >
      <div className="h-20 w-20">
        <img
          src={nowPlaying.cover}
          className="rounded-md object-cover"
          alt="Album Cover"
          onError={e => (e.currentTarget.src = "/spotify-logo.png")}
        />
      </div>
      <div className="flex flex-col items-center w-[240px]">
        <Typography variant="h2">{nowPlaying.song}</Typography>
        <p className="text-base text-muted-foreground text-start">{nowPlaying.artist}</p>
        {nowPlaying.is_playing && (
          <div className="flex justify-center items-end gap-1 relative h-[24px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] h-[14px] bg-blue-atlantic animate-soundwave"
                style={{
                  animationDuration: `${1 + Math.sin(i) * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
