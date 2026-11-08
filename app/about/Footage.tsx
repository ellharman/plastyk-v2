"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import footageJson from "@/public/footage.json";
import { Play } from "lucide-react";

export type VidProps = {
  assetPath: string;
};

function Vid({ assetPath }: VidProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        className="block w-full"
        preload="metadata"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={assetPath} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span
          className={`flex size-16 items-center justify-center rounded-full bg-black/60 text-white transition-opacity duration-200 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <Play className="size-7 translate-x-0.5 fill-current" />
        </span>
      </button>
    </div>
  );
}

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(MOBILE_QUERY);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
}

export default function Footage() {
  const videos: VidProps[] = footageJson;
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const pauseOffscreen = () => {
      const current = api.selectedScrollSnap();
      api.slideNodes().forEach((node, index) => {
        if (index !== current) {
          node.querySelector("video")?.pause();
        }
      });
    };

    api.on("select", pauseOffscreen);
    api.on("reInit", pauseOffscreen);

    return () => {
      api.off("select", pauseOffscreen);
      api.off("reInit", pauseOffscreen);
    };
  }, [api]);

  return (
    <div className="flex justify-center flex-col gap-8 items-center w-full mx-auto">
      <h2 className="text-6xl text-plastyk-kiss-red text-bold">FOOTAGE</h2>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
          containScroll: false,
          watchDrag: isMobile,
        }}
        className="w-full max-w-4xl"
      >
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem
              key={video.assetPath}
              className="basis-[85%] md:basis-full overflow-hidden"
            >
              <Vid assetPath={video.assetPath} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>
    </div>
  );
}
