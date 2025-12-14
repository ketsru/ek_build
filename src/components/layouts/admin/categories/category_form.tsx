"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { categoryFormSchema, CategoryFormValues } from "./schema"
import { Category } from "@/types/category"

interface CategoryFormProps {
  /** Données existantes (édition) */
  initialData?: Category | null

  /** Liste des catégories parentes possibles */
  categories?: Category[]

  /** Callback submit */
  onSubmit: (values: CategoryFormValues) => void
}

export function CategoryForm({
  initialData,
  categories = [],
  onSubmit,
}: CategoryFormProps) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: initialData?.name ?? "",
      parentId: initialData?.parentId ?? "",
      icon: initialData?.icon?.name ?? "",
    },
  })

  const isEdit = Boolean(initialData)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* ================== NOM ================== */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la catégorie</FormLabel>
              <FormControl>
                <Input
                  placeholder="Construction, Maçonnerie…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ================== CATÉGORIE PARENTE ================== */}
        <FormField
            control={form.control}
            name="parentId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Catégorie parente</FormLabel>

                <Select
                    value={field.value ?? "none"}
                    onValueChange={(value) =>
                    field.onChange(value === "none" ? undefined : value)
                    }
                >
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Aucune (catégorie principale)" />
                        </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                        <SelectItem value="none">
                            Aucune (catégorie principale)
                        </SelectItem>

                        {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                            {cat.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <FormDescription>
                    Laisse vide pour une catégorie principale
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />

        {/* ================== ICÔNE ================== */}
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icône (lucide-react)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Hammer, Home, Building…"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Nom exact de l’icône lucide-react
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ================== ACTIONS ================== */}
        <div className="pt-2">
          <Button type="submit" className="w-full">
            {isEdit ? "Mettre à jour" : "Créer"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
