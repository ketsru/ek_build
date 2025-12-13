import { WorkersList } from "@/components/layouts/admin/workers";
import { ArrowUpNarrowWide } from "lucide-react";


export default function Workers () {
    return (
        <div className="w-full">
            <div>
                <h2 className="md:text-3xl text-xl font-extrabold mt-4 flex gap-2 items-center">
                    <ArrowUpNarrowWide size={20} />
                    Liste des prestataires
                </h2>
            </div>
            <div>
                <WorkersList />
            </div>
        </div>
    )
}