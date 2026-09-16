"use client";

export default function SCEmbed() {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16 / 9", minHeight: 450 }}>
        <iframe
          title="SoundCloud playlist"
          width="100%"
          height="100%"
          style={{ border: "none", position: "absolute", inset: 0, touchAction: "manipulation" }}
          allow="autoplay; encrypted-media"
          loading="lazy"
          // Blocks the iframe from doing top-level navigation or opening popups,
          // which is what triggers the "open in SoundCloud app?" popover on mobile.
          // allow-scripts + allow-same-origin keep the widget itself fully interactive.
          sandbox="allow-scripts allow-same-origin allow-forms"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2298107244&color=%23ff7bac&auto_play=false&hide_related=true&show_artwork=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false&show_playcount=false"
        />
      </div>
    </div>
  );
}