import { workersData } from "@/components/data/workers_data";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, PhoneIncoming, TestTubes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["900"], 
  subsets: ["latin"],
});

interface WorkerDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function WorkerDetails({ params }: WorkerDetailsProps) {
  const { id } = await params;

  // Récupération du worker correspondant
  const worker = workersData.find((w) => w.id === id);

  if (!worker) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="md:flex gap-6 items-start">
        {/* Image du worker */}
        <div className="relative w-72 h-96 rounded-lg overflow-hidden mb-6">
          <Image
            src={worker.image}
            alt={worker.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Informations du worker */}
        <div className="space-y-4">
          {/* Catégorie principale */}
          <h1 className={`${robotoSlab.className} text-2xl font-semibold text-green-500 flex items-center gap-2`}>
            {worker.mainCategory?.icon && <worker.mainCategory.icon className="w-6 h-6" />}
            {worker.mainCategory?.name || "Sans catégorie"}
          </h1>

          {/* Titre */}
          <h2 className="text-3xl font-bold">{worker.title}</h2>

          {/* Location */}
          <div className="flex gap-2 items-center">
            <MapPin size={16} />
            <p>{worker.location}</p>
          </div>

          {/* Expérience */}
          {worker.experience && (
            <div className="flex gap-2 items-center -mt-2">
              <TestTubes size={16} />
              <p>{worker.experience}</p>
            </div>
          )}

          {/* Description */}
          {worker.description && (
            <div className="mt-4">
              <p className="text-gray-700">{worker.description}</p>
            </div>
          )}

          {/* Compétences */}
          {worker.skills.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Compétences</h3>
              <ul className="flex flex-wrap gap-2">
                {worker.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-0.5 rounded-full text-sm"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          <ul className="mt-4 text-body font-medium">
            <li className="mb-1">
              <Link href="#" className="hover:underline flex gap-2 items-center">
                <Mail size={16} />
                <span>service.build@techmind.com</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline flex gap-2 items-center">
                <PhoneIncoming size={16} />
                <span>+228 97 12 62 87 / 90 92 57 42</span>
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-4 flex gap-4 items-center ">
            <Button variant="outline" className="rounded-full">Ajouter à mon panier</Button>
            <Button className="rounded-full">
              Contacter {" "}
              <span className="md:block hidden">prestataire !</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Les autres images / réalisations */}
      {worker.images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Réalisations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worker.images.map((img) => (
              <div key={img.id} className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.description || worker.title}
                  fill
                  className="object-cover"
                />
                {img.description && (
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm px-1 py-2 rounded-b-lg">
                    {img.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
