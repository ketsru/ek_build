import { Category } from "@/types/category";
import {
  Columns2,
  Home,
  Building,
  Hammer,
  Blend,
  Paintbrush,
  Wrench,
  Plug,
  Leaf,
  Shield,
  Truck,
  Droplet,
  Sparkles
} from "lucide-react";

export const categoriesData: Category[] = [
  /* ============================================================
     🔶 CONSTRUCTION
  ============================================================ */
  {
    id: "jklkjgkj8798274",
    name: "Construction",
    icon: Columns2,
    subCategories: [
      {
        id: "2jklkjgkj8798274",
        name: "Maisons individuelles",
        parentId: "jklkjgkj8798274",
        icon: Home,
        subCategories: [
          { id: "16", name: "Maçonnerie", parentId: "2", icon: Hammer },
          { id: "17", name: "Menuiserie", parentId: "2", icon: Paintbrush },
          { id: "18", name: "Peinture", parentId: "2", icon: Paintbrush },
          { id: "200", name: "Charpente & toiture", parentId: "2", icon: Columns2 },
          { id: "201", name: "Plomberie", parentId: "2", icon: Wrench },
        ],
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
          { id: "202", name: "Ascenseurs", parentId: "3", icon: Columns2 },
        ],
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
          { id: "203", name: "Cloisons & faux plafonds", parentId: "4", icon: Columns2 },
        ],
      },
    ],
  },

  /* ============================================================
     🔶 TRAVAUX PUBLICS
  ============================================================ */
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
          { id: "204", name: "Assainissement routier", parentId: "6", icon: Droplet },
        ],
      },
      {
        id: "7",
        name: "Ponts et infrastructures",
        parentId: "5",
        icon: Building,
        subCategories: [
          { id: "27", name: "Maçonnerie", parentId: "7", icon: Hammer },
          { id: "28", name: "Charpente métallique", parentId: "7", icon: Paintbrush },
        ],
      },
      {
        id: "8",
        name: "Aménagement urbain",
        parentId: "5",
        icon: Building,
        subCategories: [
          { id: "29", name: "Paysagisme", parentId: "8", icon: Leaf },
          { id: "30", name: "Voirie", parentId: "8", icon: Hammer },
          { id: "205", name: "Éclairage public", parentId: "8", icon: Plug },
        ],
      },
    ],
  },

  /* ============================================================
     🔶 RENOVATION
  ============================================================ */
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
          { id: "32", name: "Plomberie", parentId: "10", icon: Wrench },
          { id: "33", name: "Électricité", parentId: "10", icon: Plug },
          { id: "206", name: "Carrelage", parentId: "10", icon: Sparkles },
        ],
      },
      {
        id: "11",
        name: "Rénovation extérieure",
        parentId: "9",
        icon: Blend,
        subCategories: [
          { id: "34", name: "Maçonnerie", parentId: "11", icon: Hammer },
          { id: "35", name: "Couverture", parentId: "11", icon: Paintbrush },
          { id: "207", name: "Isolation thermique", parentId: "11", icon: Sparkles },
        ],
      },
    ],
  },

  /* ============================================================
    SERVICES & MATÉRIEL
  ============================================================ */
  {
    id: "12",
    name: "Services et équipements",
    icon: Blend,
    subCategories: [
      {
        id: "13",
        name: "Matériaux",
        parentId: "12",
        icon: Hammer,
      },
      {
        id: "14",
        name: "Outils et machines",
        parentId: "12",
        icon: Blend,
      },
      {
        id: "15",
        name: "Services de maintenance",
        parentId: "12",
        icon: Wrench,
      },
    ],
  },

  /* ============================================================
    ELECTRICITÉ & ÉNERGIE
  ============================================================ */
  {
    id: "40",
    name: "Électricité & Énergie",
    icon: Plug,
    subCategories: [
      { id: "41", name: "Installation électrique", parentId: "40", icon: Plug },
      { id: "42", name: "Maintenance électrique", parentId: "40", icon: Wrench },
      { id: "43", name: "Panneaux solaires", parentId: "40", icon: Sparkles },
      { id: "44", name: "Groupes électrogènes", parentId: "40", icon: Plug },
    ],
  },

  /* ============================================================
    PLOMBERIE & ASSAINISSEMENT
  ============================================================ */
  {
    id: "50",
    name: "Plomberie & Assainissement",
    icon: Droplet,
    subCategories: [
      { id: "51", name: "Plomberie générale", parentId: "50", icon: Wrench },
      { id: "52", name: "Canalisations & évacuations", parentId: "50", icon: Droplet },
      { id: "53", name: "Fosses septiques", parentId: "50", icon: Droplet },
    ],
  },

  /* ============================================================
    DÉCORATION & FINITIONS
  ============================================================ */
  {
    id: "60",
    name: "Décoration & Finitions",
    icon: Paintbrush,
    subCategories: [
      { id: "61", name: "Peinture décorative", parentId: "60", icon: Paintbrush },
      { id: "62", name: "Plafonds PVC", parentId: "60", icon: Columns2 },
      { id: "63", name: "Revêtements muraux", parentId: "60", icon: Sparkles },
    ],
  },

  /* ============================================================
    ESPACES VERTS
  ============================================================ */
  {
    id: "70",
    name: "Jardinage & Espaces verts",
    icon: Leaf,
    subCategories: [
      { id: "71", name: "Entretien des jardins", parentId: "70", icon: Leaf },
      { id: "72", name: "Aménagement paysager", parentId: "70", icon: Sparkles },
      { id: "73", name: "Élagage", parentId: "70", icon: Hammer },
    ],
  },

  /* ============================================================
    SECURITÉ & TECHNOLOGIES
  ============================================================ */
  {
    id: "80",
    name: "Sécurité & Technologies",
    icon: Shield,
    subCategories: [
      { id: "81", name: "Caméras de surveillance", parentId: "80", icon: Shield },
      { id: "82", name: "Alarmes", parentId: "80", icon: Sparkles },
      { id: "83", name: "Contrôle d'accès", parentId: "80", icon: Building },
    ],
  },

  /* ============================================================
    LOGISTIQUE DE CHANTIER
  ============================================================ */
  {
    id: "90",
    name: "Transport & Logistique",
    icon: Truck,
    subCategories: [
      { id: "91", name: "Transport de matériaux", parentId: "90", icon: Truck },
      { id: "92", name: "Location de camions", parentId: "90", icon: Truck },
      { id: "93", name: "Manutention & levage", parentId: "90", icon: Columns2 },
    ],
  },
];
