import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Worker } from "@/types/worker/worker";
import { MapIcon } from "lucide-react";

interface WorkersCardProps {
  worker: Worker;
}

export function WorkersCard({ worker }: WorkersCardProps) {
  // On prend la première image si elle existe, sinon on tombe sur l'image de profile
  const displayImage = worker.image;

  return (
    <Link href={`/list-flow/${worker.id}`} className="block rounded-2xl">
      <Card className="relative w-full h-[500px] overflow-hidden cursor-pointer group">
        <Image
          src={displayImage}
          alt={worker.title}
          fill
          className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay gradient au hover */}
        <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-b from-transparent to-green-800"></div>

        {/* Contenu textuel superposé */}
        <CardContent className="absolute inset-0 flex flex-col justify-end p-4 mb-6 text-white">
          <CardHeader className="bg-transparent justify-start px-0">
            <CardTitle className="text-xl font-bold">{worker.title}</CardTitle>
            <CardTitle className="text-base font-semibold flex gap-2">
              <MapIcon />
              {worker.location}
              </CardTitle>
          </CardHeader>
          <CardDescription className="text-sm text-white mb-2">{worker.experience}</CardDescription>
          <CardDescription className="text-sm text-white">{worker.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
