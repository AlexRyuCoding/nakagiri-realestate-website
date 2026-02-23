"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/res-albright-front.jpg", alt: "Albright property front" },
  { src: "/res-burkshire-back.jpg", alt: "Burkshire property back" },
  { src: "/res-burkshire-family.jpg", alt: "Burkshire property family room" },
  { src: "/res-burkshire-front.jpg", alt: "Burkshire property front" },
  { src: "/res-burkshire-living.jpg", alt: "Burkshire property living room" },
  { src: "/res-lagrange-back.jpg", alt: "LaGrange property back" },
  { src: "/res-lagrange-family.jpg", alt: "LaGrange property family room" },
  { src: "/res-lagrange-front.jpg", alt: "LaGrange property front" },
  { src: "/res-lagrange-living.jpg", alt: "LaGrange property living room" },
  { src: "/res-lemarsh-front.jpg", alt: "LeMarsh property front" },
  { src: "/res-tivoli-front.jpg", alt: "Tivoli property front" },
];

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
          <Dialog key={index}>
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
            <DialogContent className="max-w-none w-screen h-screen p-0 m-0">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
