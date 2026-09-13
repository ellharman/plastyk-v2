"use client";

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
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
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
       <Image src="/img/logo-white-red.png" alt=""  />
      </div>
    </div>
  );
}
