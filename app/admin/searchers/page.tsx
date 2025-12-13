import { SearchersList } from "@/components/layouts/admin/searchers";
import { ArrowUpNarrowWide } from "lucide-react";


export default function Searchers () {
    return (
        <div className="w-full">
            <div>
                <h2 className="md:text-3xl text-xl font-extrabold mt-4 flex gap-2 items-center">
                    <ArrowUpNarrowWide size={20} />
                    Liste des chercheurs
                </h2>
            </div>
            <div>
                <SearchersList />
            </div>
        </div>
    )
}