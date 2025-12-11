"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import { categoriesData } from "@/components/data/categories";
import { Category } from "@/types/category";

export default function SearchersCategoryList() {
  // Récupérer toutes les sous-catégories uniques
  const allSubCategories: Category[] = Array.from(
    new Set(categoriesData.flatMap(cat => cat.subCategories ?? []))
  );

  // Diviser en 2 lignes pour desktop, 1 ligne pour mobile
  const mid = Math.ceil(allSubCategories.length / 2);
  const rows =
    typeof window !== "undefined" && window.innerWidth < 640
      ? [allSubCategories] // Mobile = 1 ligne
      : [allSubCategories.slice(0, mid), allSubCategories.slice(mid)];

  return (
    <div className="space-y-8 relative">
      {rows.map((row, i) => (
        <AutoScrollRow
          key={i}
          items={row}
          direction={i % 2 === 0 ? "right" : "left"} // alterner le sens pour UX dynamique
        />
      ))}

      {/* Effets dégradés sur les bords */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white/95 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white/95 to-transparent" />
    </div>
  );
}

function AutoScrollRow({
  items,
  direction,
}: {
  items: Category[];
  direction: "left" | "right";
}) {
  // Autoplay fluide continu
  const autoplay = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: true,
    })
  );

  return (
    <div
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
      className="w-full overflow-x-hidden"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: direction === "left" ? "rtl" : "ltr",
        }}
        plugins={[autoplay.current as any]}
      >
        <CarouselContent className="flex gap-3 px-2">
          {items.map((sub) => {
            const Icon = sub.icon;
            return (
              <CarouselItem key={sub.id} className="basis-auto">
                <Link
                  href={`/list_flow/category/${sub.id}`}
                  className="text-sm px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap
                             bg-white/80 backdrop-blur border shadow-sm
                             hover:bg-green-50 hover:border-green-500 hover:shadow-lg hover:scale-105
                             transition-all duration-300 ease-in-out"
                >
                  {Icon && <Icon className="text-green-700 w-5 h-5 shrink-0" />}
                  <span className="font-medium">{sub.name}</span>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
