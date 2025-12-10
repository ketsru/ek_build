import { Category } from "@/types/category";
import { Columns2, Home, Building, Hammer, Blend, Paintbrush } from "lucide-react";

export const categoriesData: Category[] = [ 
  {
    id: "1",
    name: "Construction",
    icon: Columns2,
    subCategories: [
      { 
        id: "2", 
        name: "Maisons individuelles", 
        parentId: "1", 
        icon: Home,
        subCategories: [
          { id: "16", name: "Maçonnerie", parentId: "2", icon: Hammer },
          { id: "17", name: "Menuiserie", parentId: "2", icon: Paintbrush },
          { id: "18", name: "Peinture", parentId: "2", icon: Paintbrush },
        ]
      },
      { 
        id: "3", 
        name: "Immeubles résidentiels", 
        parentId: "1", 
        icon: Building,
        subCategories: [
          { id: "19", name: "Maçonnerie", parentId: "3", icon: Hammer },
          { id: "20", name: "Menuiserie", parentId: "3", icon: Paintbrush },
          { id: "21", name: "Peinture", parentId: "3", icon: Paintbrush },
        ]
      },
      { 
        id: "4", 
        name: "Bureaux et locaux commerciaux", 
        parentId: "1", 
        icon: Building,
        subCategories: [
          { id: "22", name: "Maçonnerie", parentId: "4", icon: Hammer },
          { id: "23", name: "Menuiserie", parentId: "4", icon: Paintbrush },
          { id: "24", name: "Peinture", parentId: "4", icon: Paintbrush },
        ]
      },
    ],
  },
  {
    id: "5",
    name: "Travaux publics",
    icon: Hammer,
    subCategories: [
      { 
        id: "6", 
        name: "Routes et autoroutes", 
        parentId: "5", 
        icon: Blend,
        subCategories: [
          { id: "25", name: "Terrassement", parentId: "6", icon: Paintbrush },
          { id: "26", name: "Pavage", parentId: "6", icon: Hammer },
        ]
      },
      { 
        id: "7", 
        name: "Ponts et infrastructures", 
        parentId: "5", 
        icon: Building,
        subCategories: [
          { id: "27", name: "Maçonnerie", parentId: "7", icon: Hammer },
          { id: "28", name: "Charpente métallique", parentId: "7", icon: Paintbrush },
        ]
      },
      { 
        id: "8", 
        name: "Aménagement urbain", 
        parentId: "5", 
        icon: Building,
        subCategories: [
          { id: "29", name: "Paysagisme", parentId: "8", icon: Paintbrush },
          { id: "30", name: "Voirie", parentId: "8", icon: Hammer },
        ]
      },
    ],
  },
  {
    id: "9",
    name: "Rénovation et réhabilitation",
    icon: Hammer,
    subCategories: [
      { 
        id: "10", 
        name: "Rénovation intérieure", 
        parentId: "9", 
        icon: Blend,
        subCategories: [
          { id: "31", name: "Peinture", parentId: "10", icon: Paintbrush },
          { id: "32", name: "Plomberie", parentId: "10", icon: Paintbrush },
          { id: "33", name: "Électricité", parentId: "10", icon: Paintbrush },
        ]
      },
      { 
        id: "11", 
        name: "Rénovation extérieure", 
        parentId: "9", 
        icon: Blend,
        subCategories: [
          { id: "34", name: "Maçonnerie", parentId: "11", icon: Hammer },
          { id: "35", name: "Couverture", parentId: "11", icon: Paintbrush },
        ]
      },
    ],
  },
  {
    id: "12",
    name: "Services et équipements",
    icon: Blend,
    subCategories: [
      { 
        id: "13", 
        name: "Matériaux", 
        parentId: "12", 
        icon: Hammer 
      },
      { 
        id: "14", 
        name: "Outils et machines", 
        parentId: "12", 
        icon: Blend 
      },
      { 
        id: "15", 
        name: "Services de maintenance", 
        parentId: "12", 
        icon: Hammer 
      },
    ],
  },
];
