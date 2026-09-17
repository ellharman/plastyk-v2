"use client";

import Image from "next/image";
import type { DetailedHTMLProps, VideoHTMLAttributes } from "react";

const fillScreenStyle = {
  height: "100vh",
  width: "100vw",
  objectFit: "cover",
  objectPosition: "center",
} as DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export default function Hero() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="opacity-20"
        style={fillScreenStyle}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <Image
        id="reduced-motion-hero"
        src="/img/reduced-motion-hero.jpg"
        alt=""
        quality={100}
        fill
        className="opacity-20"
        unoptimized
        preload
      />
    </div>
  );
}