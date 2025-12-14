"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Category } from "@/types/category"
import { CategoryForm } from "./category_form"

export function EditCategorySheet({
  category,
  open,
  onOpenChange,
}: {
  category: Category
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Modifier la catégorie</SheetTitle>
          <SheetDescription>
            Modifiez les informations de la catégorie.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 p-3">
          <CategoryForm
            initialData={category}
            onSubmit={(values) => {
              console.log("UPDATE", category.id, values)
              onOpenChange(false)
            }}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
