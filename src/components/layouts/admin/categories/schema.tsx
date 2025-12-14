import { z } from "zod"

export const categoryFormSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  parentId: z.string().optional(),
  icon: z.string().optional(),
})

export type CategoryFormValues = z.infer<typeof categoryFormSchema>
