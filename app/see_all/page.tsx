// app/list_flow/see_all/[categoryId]/page.tsx
import { workersData } from "@/components/data/workers_data";
import { WorkersCard } from "@/components/layouts/list_flow/worker_card";
import { notFound } from "next/navigation";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";

interface CategoryWorkersPageProps {
  params: { categoryId: string };
}

export default function CategoryWorkersPage({ params }: CategoryWorkersPageProps) {
  const { categoryId } = params;

  // Filtrer les workers qui ont cette catégorie (ou sous-catégorie)
  const filteredWorkers = workersData.filter(
    (worker) => worker.mainCategory.id === categoryId
  );

  if (!filteredWorkers.length) {
    return notFound(); // ou afficher un message "Aucun worker pour cette catégorie"
  }

  // On peut récupérer la catégorie depuis le premier worker
  const category = filteredWorkers[0].category;
  const CategoryIcon = category?.icon;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/list_flow" className="flex items-center gap-1 text-green-600 hover:underline">
          <CircleChevronLeft size={20} /> Retour
        </Link>
        {CategoryIcon && <CategoryIcon className="w-6 h-6 text-green-600" />}
        <h1 className="text-2xl font-bold">{category?.name || "Catégorie inconnue"}</h1>
      </div>

      {/* Grid des workers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredWorkers.map((worker) => (
          <WorkersCard worker={worker}            
          />
        ))}
      </div>
    </div>
  );
}
