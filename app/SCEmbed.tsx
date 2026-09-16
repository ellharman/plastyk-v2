"use client";

export default function SCEmbed() {
  return (
    <div className="w-full">
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay; encrypted-media"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2298107244&color=%23ff7bac&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="rounded-md"
      ></iframe>
      <div
        className="overflow-hidden whitespace-nowrap text-ellipsis break-normal text-[10px] font-thin text-muted-foreground"
        style={{ lineBreak: "anywhere" }}
      >
      </div>
    </div>
  );
}
