import Image, { type ImageProps } from "next/image";
import eventJson from "@/public/events.json";
import { cn } from "@/lib/utils";

export type EventProps = Omit<ImageProps, "src" | "alt"> & {
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

export default function Events() {
  const events = [...eventJson];
  const upcomingEvent = events.pop();
  const pastEvents = events.reverse();

  return (
    <div className="flex justify-center flex-col gap-8 items-center w-full mx-auto">
      <h2 className="text-7xl text-plastyk-kiss-red">UPCOMING</h2>
      {upcomingEvent && (
        <Event
          key={upcomingEvent.assetPath}
          posterAssetPath={upcomingEvent.assetPath}
          altText={upcomingEvent.altText}
        />
      )}
      <h2 className="text-7xl text-plastyk-kiss-red">PREVIOUS</h2>
      <div className="grid grid-cols-1 gap-8 w-full justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event) => (
          <Event
            key={event.assetPath}
            posterAssetPath={event.assetPath}
            altText={event.altText}
            className="w-full max-w-72"
          />
        ))}
      </div>
    </div>
  );
}
