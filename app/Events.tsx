import Image from "next/image";
import eventJson from "@/public/events.json";

function Event(data: EventProps) {
  return (
    <Image src={data.posterAssetPath} alt={data.altText} className="w-full" />
  );
}

export type EventProps = {
  posterAssetPath: string;
  altText: string;
};

export default function Events() {
  const events = [...eventJson];
  const upcomingEvent = events.pop();
  const pastEvents = events.reverse();

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-7xl text-plastyk-kiss-red mb-4">Upcoming</h2>
      {upcomingEvent && (
        <Event
          key={upcomingEvent.assetPath}
          posterAssetPath={upcomingEvent.assetPath}
          altText={upcomingEvent.altText}
        />
      )}
      <h2 className="text-7xl text-plastyk-kiss-red mb-4">Previous</h2>
      {pastEvents.map((event) => (
        <Event
          key={event.assetPath}
          posterAssetPath={event.assetPath}
          altText={event.altText}
        />
      ))}
    </div>
  );
}
