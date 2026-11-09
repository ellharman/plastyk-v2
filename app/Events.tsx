import Image, { type ImageProps } from "next/image";
import eventJson from "@/public/events.json";
import { cn } from "@/lib/utils";
import { EVENTS_QUERY, sanityClient, type SanityEvent } from "@/lib/sanity";

export type EventProps = Omit<ImageProps, "src" | "alt"> & {
  posterAssetPath: string;
  altText: string;
};

type EventPoster = {
  key: string;
  sortOrder: number;
  posterAssetPath: string;
  altText: string;
};

function Event({ posterAssetPath, altText, className, ...props }: EventProps) {
  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <Image src={posterAssetPath} alt={altText} unoptimized {...props} />
    </div>
  );
}

export default async function Events() {
  const sanityEvents = await sanityClient.fetch<SanityEvent[]>(EVENTS_QUERY);
  const events: EventPoster[] = sanityEvents.length
    ? sanityEvents.map(({ _id, ...event }) => ({ ...event, key: _id }))
    : eventJson.map(({ assetPath, altText }, sortOrder) => ({
        key: assetPath,
        sortOrder,
        posterAssetPath: assetPath,
        altText,
      }));
  const upcomingEvent = events.at(-1);
  const pastEvents = events.slice(0, -1).reverse();

  return (
    <div className="flex justify-center flex-col gap-8 items-center w-full mx-auto">
      <h2 className="text-6xl text-plastyk-kiss-red">UPCOMING</h2>
      {upcomingEvent && (
        <Event
          key={upcomingEvent.key}
          posterAssetPath={upcomingEvent.posterAssetPath}
          altText={upcomingEvent.altText}
        />
      )}
      <h2 className="text-6xl text-plastyk-kiss-red">PREVIOUS</h2>
      <div className="grid grid-cols-1 gap-8 w-full justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event) => (
          <Event
            key={event.key}
            posterAssetPath={event.posterAssetPath}
            altText={event.altText}
            className="w-full max-w-72"
          />
        ))}
      </div>
    </div>
  );
}
