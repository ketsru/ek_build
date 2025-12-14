"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { CategoryForm } from "./category_form"
import { PlusCircleIcon } from "lucide-react"

export function CreateCategorySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex gap-2 h-11 md:mt-0 mt-4">
            <PlusCircleIcon />
            <span> Ajouter un worker </span>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer une catégorie</SheetTitle>
          <SheetDescription>
            Ajoutez une nouvelle catégorie ou sous-catégorie.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 p-3">
          <CategoryForm
            onSubmit={(values) => {
              console.log("CREATE", values)
            }}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
