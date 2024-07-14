"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import ProductItems from "@/data/products.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="flex justify-center mt-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {ProductItems.map((items, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px]">
                <Image
                  src={items.image[0]}
                  alt="item"
                  fill
                  className="object-cover"
                  sizes="100vh"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
