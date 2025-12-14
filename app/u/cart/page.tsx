import { Button } from "@/components/ui/button";
import { Heart, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { workersData } from "@/components/data/workers_data";


function WorkerSelectedCard({ worker }: { worker: typeof workersData[0] }) {
  return (
    <div className="rounded-lg md:p-4 p-2 shadow-sm">
      <div className="flex md:gap-4 gap-2">
        <Image
          src={worker.image}
          width={100}
          height={80}
          alt={worker.title}
          className="rounded-lg object-cover h-24 w-24 md:h-32 md:w-32"
        />

        {/* Texte */}
        <div className="flex-1">
          <Link href={`/u/prest/${worker.id}`}
            className="md:text-lg text-base font-bold hover:underline"
          >
            {worker.title}
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            {worker.location}
          </div>

          <p className="text-sm mt-2">
            {worker.experience}
          </p>

          {/* Actions */}
          <div className="flex gap-2 mt-4 md:justify-start justify-end">
            <Button variant="outline">
              <Heart />
              <span className="md:block hidden">Ajouter aux favories</span>
            </Button>
            <Button variant="destructive">
              <X  />
              <span className="md:block hidden">Retier</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectionSummary() {
  return (
    <div className="rounded-lg border bg-white p-4 md:mt-0 mt-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 space-y-4 max-w-xl">
      <h3 className="text-xl font-semibold">Résumé de ma sélection</h3>

      <p className="text-gray-600 dark:text-gray-300">
        Vous avez sélectionné <strong>{workersData.length}</strong> prestataire(s).
      </p>

      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
        Finaliser ma demande
      </Button>

      <Link href="/" className="block text-center underline text-green-600 dark:text-green-400">
        Continuer ma recherche
      </Link>
    </div>
  );
}

export default function WorkerSelectionPage() {
  return (
    <div className="min-h-screen p-4 space-y-6">
      <h2 className="text-3xl font-bold">Ma sélection de prestataires</h2>

      <div className="md:flex gap-8">
        
        {/* LISTE */}
        <div className="flex-1 space-y-4">
          {workersData.map((worker) => (
            <WorkerSelectedCard key={worker.id} worker={worker} />
          ))}
        </div>

        {/* RÉSUMÉ */}
        <SelectionSummary />
      </div>
    </div>
  );
}
