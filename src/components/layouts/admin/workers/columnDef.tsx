import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Eye, Pen, Trash2Icon, MessageCircle, ArrowUpDown, MoreVertical } from "lucide-react"
import { Worker } from "@/types/worker/worker"

export const columns: ColumnDef<Worker>[] = [
  {
    accessorKey: "title",
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
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "mainCategory",
    header: "Catégorie",
    cell: ({ row }) => {
      const mainCategory = row.getValue("mainCategory") as { name?: string } | undefined
      return <div>{mainCategory?.name || "-"}</div>
    },
  },
  {
    accessorKey: "experience",
    header: "Expérience",
    cell: ({ row }) => <div>{row.getValue("experience")}</div>,
  },
  {
    accessorKey: "location",
    header: "Localisation",
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  /*{
    accessorKey: "skills",
    header: "Compétences",
    cell: ({ row }) => {
      const skills = row.getValue("skills") as { name: string }[]
      return (
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )
    },
  },*/
  {
    id: "actions",
    enableHiding: true,
    header: "Actions",
    cell: ({ row }) => {
      const worker = row.original
      return (
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label="Actions"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem onClick={() => console.log("view", worker)}>
                <Eye className="mr-2 h-4 w-4" />
                Voir
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => console.log("edit", worker)}>
                <Pen className="mr-2 h-4 w-4" />
                Modifier
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => console.log("message", worker)}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contacter
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => console.log("delete", worker)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2Icon className="mr-2 h-4 w-4" />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
