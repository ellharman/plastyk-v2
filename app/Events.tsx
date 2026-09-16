import fs from "fs";
import path from "path";
import Image from "next/image";
import posterFiles from "@/public/data/posters.json";

function Event(data: EventProps) {
  return (
    <Image
      src={data.posterAssetPath}
      alt={data.altText}
      className="w-full"
    />
  );
}

export type EventProps = {
  posterAssetPath: string;
  altText: string;
};

export default function Events() {
  

  return (
    <>
      {posterFiles.map((posterPath) => (
        <Event
          key={posterPath}
          posterAssetPath={`/img/posters/${posterPath}`}
          altText="Event Poster"
        />
      ))}
    </>
  );
}
