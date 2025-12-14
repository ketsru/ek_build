import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Eye, Pen, Trash2Icon, ArrowUpDown, MoreVertical } from "lucide-react"
import { Category } from "@/types/category"
import { CategoryActionsCell } from "./categories-actions"

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1"
      >
        Nom
        <ArrowUpDown className="h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },

  {
    id: "subCategories",
    header: "Sous-catégories",
    cell: ({ row }) => {
      const category = row.original
      const subCategories = category.subCategories

      if (!subCategories || subCategories.length === 0) return <span>-</span>

      return (
        <div className="flex flex-col gap-1">
          {subCategories.map(sc => (
            <div key={sc.id} className="flex items-center gap-2 text-sm text-gray-600">
              {sc.icon && <sc.icon className="h-4 w-4" />}
              <span>{sc.name}</span>
              {/* Affiche les sous-sous-catégories si elles existent */}
              {sc.subCategories && sc.subCategories.length > 0 && (
                <div className="ml-4 flex flex-wrap gap-1 text-xs text-gray-400">
                  {sc.subCategories.map(sub => (
                    <span key={sub.id}>{sub.name}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <CategoryActionsCell category={row.original} />
    ),
  },
]
