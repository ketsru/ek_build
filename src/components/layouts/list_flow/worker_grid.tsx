"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { WorkersCard } from "./worker_card";
import { workersData } from "@/components/data/workers_data";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["900"], 
  subsets: ["latin"],
});

export default function WorkersGrid() {
  const autoplay = React.useRef<ReturnType<typeof Autoplay> | null>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
  if (!carouselRef.current) return;

  // Initialise l'autoplay
  const instance = Autoplay({ delay: 3000, stopOnInteraction: false });
  autoplay.current = instance;

  // Embla API
  const embla = (carouselRef.current as any)?.emblaApi;

  if (embla && autoplay.current) {
    autoplay.current.reset();
    embla.on("pointerDown", autoplay.current.stop);
  }

  return () => {
    if (embla && autoplay.current) {
      embla.off("pointerDown", autoplay.current.stop);
    }
  };
}, []);

  // Grouper les workers par mainCategory
  const groupedByCategory = workersData.reduce((acc, worker) => {
    const categoryName = worker.mainCategory.name;

    if (!acc[categoryName]) {
      acc[categoryName] = {
        category: worker.mainCategory,
        workers: [],
      };
    }

    acc[categoryName].workers.push(worker);
    return acc;
  }, {} as Record<string, { category: any; workers: typeof workersData }>);

  return (
    <div className="space-y-10">
      {Object.values(groupedByCategory).map(({ category, workers }) => {
        const CategoryIcon = category.icon;

        return (
          <div key={category.id}>
            {/* Titre de catégorie */}
            <div className={`${robotoSlab.className} flex items-center justify-between mb-1`}>
              <div className="flex items-center gap-2">
                {CategoryIcon && <CategoryIcon className="w-6 h-6 text-green-600" />}
                <h2 className="md:text-2xl text-xl">
                  {category.name}
                </h2>
              </div>
              <Link href={`/see_all/${category.id}`} className="flex items-center gap-1 hover:text-[#fbbf24]">
                <span className="md:text-sm text-xs">Voir plus</span>
                <CircleChevronRight size={16} />
              </Link>
            </div>

            {/* Carousel */}
            <div
              ref={carouselRef}
              onMouseEnter={() => autoplay.current?.stop()}
              onMouseLeave={() => autoplay.current?.reset()}
            >
              <Carousel className="w-full">
                <CarouselContent className="gap-4">
                  {workers.map((worker) => (
                    <CarouselItem key={worker.id} className="pl-1 md:basis-1/2 lg:basis-1/4 gap-6">
                      <div className="p-1">
                        <WorkersCard worker={worker} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        );
      })}
    </div>
  );
}
