"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { DetailedHTMLProps, VideoHTMLAttributes } from "react";

const fillScreenStyle = {
  height: "100vh",
  width: "100vw",
  objectFit: "cover",
  objectPosition: "center",
} as DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export default function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video autoPlay muted playsInline loop style={fillScreenStyle}>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <Image
        id="reduced-motion-hero"
        src="/img/reduced-motion-hero.jpg"
        alt=""
        quality={100}
        fill
        unoptimized
        preload
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
        <Image
          src="/img/logo-white-red.png"
          alt=""
          unoptimized
          className="max-w-min w-72 md:w-2xl h-auto"
        />
      </div>

      <button
        type="button"
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="no-animation-reduced-motion absolute bottom-8 right-8 z-10 text-white animate-bounce cursor-pointer"
        style={{ filter: "drop-shadow(1px 1px 1px #000000)" }}
      >
        <ChevronDown size={40} strokeWidth={2} />
      </button>
    </div>
  );
}