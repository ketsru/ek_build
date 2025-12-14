import SearchersCategoryList from "@/components/layouts/category/searchers_list";
import ListWorkersByCategory from "@/components/layouts/list_flow/list_works_by_category";


export default function ListFlow () {
    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <div className="p-4 md:p-6">
                    <SearchersCategoryList />
                </div>
                <div className="min-h-screen p-4">
                    <ListWorkersByCategory />
                </div>
            </div>
        </>
    )
}