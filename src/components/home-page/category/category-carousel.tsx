"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import ProductItems from "@/data/products.json";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CategoryCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {ProductItems.map((items, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-[500px]">
                  <CardContent className="">
                    <span className="">
                      <Image src={items.image[0]} alt="item" fill />
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
