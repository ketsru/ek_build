import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Worker } from "@/types/worker/worker";

interface WorkersCardProps {
  worker: Worker;
}

export function WorkersCard({ worker }: WorkersCardProps) {
  // On prend la première image si elle existe, sinon on tombe sur l'image de profile
  const displayImage = worker.image;

  return (
    <Link href={`/list_flow/${worker.id}`} className="block rounded-2xl">
      <Card className="relative w-full h-[500px] overflow-hidden cursor-pointer group">
        <Image
          src={displayImage}
          alt={worker.title}
          fill
          className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay gradient au hover */}
        <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-b from-green-100/50 to-green-800"></div>

        {/* Contenu textuel superposé */}
        <CardContent className="absolute inset-0 flex flex-col justify-end p-4 mb-12 text-white text-left">
          <CardHeader className="pb-1 bg-transparent">
            <CardTitle className="text-xl font-bold drop-shadow-md text-left">{worker.title}</CardTitle>
          </CardHeader>
          <CardDescription className="text-sm drop-shadow-md text-white">{worker.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
