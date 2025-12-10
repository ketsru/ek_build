"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import { categoriesData } from "@/components/data/categories";
import { Category } from "@/types/category";

export default function SearchersCategoryList() {
  const allSubCategories: Category[] = categoriesData.flatMap(cat =>
    cat.subCategories?.map(sub => sub) ?? []
  );

  const mid = Math.ceil(allSubCategories.length / 2);
  const row1 = allSubCategories.slice(0, mid);
  const row2 = allSubCategories.slice(mid);

  return (
    <div className="space-y-6">
      <AutoScrollRow items={row1} direction="right" />
      <AutoScrollRow items={row2} direction="left" />
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

  // ➤ Capture l'instance du plugin autoplay
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false, // on gère nous-mêmes l'arrêt
    })
  );

  return (
    <div
      onMouseEnter={() => autoplay.current.stop()}   // ⛔ stop au survol
      onMouseLeave={() => autoplay.current.play()}   // ▶️ reprends après
      className="w-full"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: direction === "left" ? "rtl" : "ltr",
        }}
        plugins={[autoplay.current as any]}
      >
        <CarouselContent className="-ml-2 flex gap-1">
          {items.map((sub) => {
            const Icon = sub.icon;

            return (
              <CarouselItem key={sub.id} className="basis-auto">
                <Link
                  href={`/list_flow/category/${sub.id}`}
                  className="text-sm border px-3 py-1 rounded-full flex items-center gap-2 whitespace-nowrap bg-white hover:bg-green-50 hover:border-green-500 transition"
                >
                  {Icon && <Icon className="text-green-700 w-4 h-4" />}
                  <span>{sub.name}</span>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
