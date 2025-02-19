import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../typography";

export interface ISpotify {
  timestamp: number;
  item: Item;
  is_playing: boolean;
}

export interface Item {
  album: Album;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
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
    cover: "https://placehold.co/300x300",
    is_playing: false
  });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await fetch("/api");
      const data: ISpotify = await response.json();

      if (data && data.item) {
        setNowPlaying({
          artist: data.item.artists.map(artist => artist.name).join(", "),
          external_url: data.item.external_urls.spotify,
          song: data.item.name,
          cover: data.item.album.images[0]?.url || "https://placehold.co/300x300",
          is_playing: data.is_playing
        });
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to={nowPlaying.external_url} target="_blank" className="flex justify-around items-center p-2 w-[400px]">
      <div className="h-20 w-20">
        <img
          src={nowPlaying.cover}
          className="rounded-md object-cover"
          alt="Album Cover"
          onError={e => (e.currentTarget.src = "https://placehold.co/200x200")}
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
