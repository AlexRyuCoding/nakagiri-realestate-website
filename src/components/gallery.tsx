"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/res-albright-front.jpg", alt: "Albright property front" },
  { src: "/res-burkshire-front.jpg", alt: "Burkshire property front" },
  { src: "/res-curtis-front.jpg", alt: "Curtis property front" },
  { src: "/res-greene-front.jpg", alt: "Greene property front" },
  { src: "/res-hammack-front.jpg", alt: "Hammack property front" },
  { src: "/res-lemarsh-front.jpg", alt: "LeMarsh property front" },
  { src: "/res-purdue-backyard.jpg", alt: "Purdue property backyard" },
  { src: "/res-purdue-front.jpg", alt: "Purdue property front" },
  { src: "/res-purdue-frontyard.jpg", alt: "Purdue property front yard" },
  { src: "/res-purdue-living.jpg", alt: "Purdue property living room" },
  { src: "/res-tivoli-front.jpg", alt: "Tivoli property front" },
];

const MAX_W = 0.9;
const MAX_H = 0.9;
const MOBILE_BREAKPOINT_PX = 640;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isMobile;
}

function GalleryImageDialog({
  image,
  children,
}: {
  image: (typeof galleryImages)[0];
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.target as HTMLImageElement;
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = Math.min((vw * MAX_W) / nw, (vh * MAX_H) / nh, 1);
      setDimensions({
        width: Math.round(nw * scale),
        height: Math.round(nh * scale),
      });
    },
    []
  );

  const onOpenChange = useCallback((open: boolean) => {
    if (!open) setDimensions(null);
  }, []);

  const style: React.CSSProperties = dimensions
    ? {
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: "none",
        padding: 0,
        margin: 0,
      }
    : {
        width: isMobile ? "min(90vw, 1200px)" : "min(90vw, 600px)",
        height: isMobile ? 1200 : 600,
        maxWidth: "none",
        padding: 0,
        margin: 0,
      };

  return (
    <Dialog onOpenChange={onOpenChange}>
      {children}
      <DialogContent
        className="max-w-none p-0 m-0 overflow-hidden"
        style={style}
      >
        <div
          className="relative bg-background"
          style={
            dimensions
              ? { width: dimensions.width, height: dimensions.height }
              : {
                  width: isMobile ? "min(90vw, 1200px)" : "min(90vw, 600px)",
                  minHeight: isMobile ? 1200 : 600,
                }
          }
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1060px) 90vw, 80vw"
            className="object-contain"
            priority
            onLoad={onImageLoad}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Gallery() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our latest listings and properties. Each property is listed
          with professional photography and marketing.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {galleryImages.map((image, index) => (
          <GalleryImageDialog key={index} image={image}>
            <DialogTrigger asChild>
              <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer focus-visible">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </DialogTrigger>
          </GalleryImageDialog>
        ))}
      </div>
    </div>
  );
}
