import { CategoriesList } from "@/components/layouts/admin/categories";
import { ArrowUpNarrowWide } from "lucide-react";


export default function Categories () {
    return (
        <>
            <div>
                <h2 className="md:text-3xl text-xl font-extrabold mt-4 flex gap-2 items-center">
                    <ArrowUpNarrowWide size={20} />
                    Liste des catégories
                </h2>
            </div>

            <div>
                <CategoriesList />
            </div>
        </>
    )
}