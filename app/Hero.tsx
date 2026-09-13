"use client";

export default function Hero() {
  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      style={{
        height: "100vh",
        width: "100vw",
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <source src="/app/assets/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
