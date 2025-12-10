import { Worker } from "@/types/worker/worker";
import { categoriesData } from "./categories";

// Recherche de catégorie par nom
const findCategoryByName = (name: string) => {
  for (const cat of categoriesData) {
    if (cat.name === name) return cat;
    if (cat.subCategories) {
      for (const sub of cat.subCategories) {
        if (sub.name === name) return sub;
        if (sub.subCategories) {
          const subSub = sub.subCategories.find((ssc) => ssc.name === name);
          if (subSub) return subSub;
        }
      }
    }
  }
  return undefined;
};

export const workersData: Worker[] = [
  {
    id: "wrk-101",
    category: "",
    title: "RENE FIOVI",
    description: "Spécialiste expérimenté dans la construction d’habitations modernes et durables.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: [
      { id: "skill-1", workerId: "wrk-101", name: "Maçonnerie" },
      { id: "skill-2", workerId: "wrk-101", name: "Coffrage" },
      { id: "skill-3", workerId: "wrk-101", name: "Béton armé" },
    ],
    images: [
      {
        id: "img-1",
        workerId: "wrk-101",
        url: "/assets/batiments/1613731678110.jpeg",
        description: "Construction maison individuelle",
        createdAt: new Date().toISOString(),
      },
      {
        id: "img-2",
        workerId: "wrk-101",
        url: "/assets/batiments/Crestron-Milan-Office-1.jpg",
        description: "Travaux de coffrage",
        createdAt: new Date().toISOString(),
      },
      {
        id: "img-3",
        workerId: "wrk-101",
        url: "/assets/batiments/r_imga.jpeg",
        description: "Construction maison individuelle",
        createdAt: new Date().toISOString(),
      },
      {
        id: "img-4",
        workerId: "wrk-101",
        url: "/assets/batiments/Rr_image.jpeg",
        description: "Travaux de coffrage",
        createdAt: new Date().toISOString(),
      },
    ],
    experience: "10 ans d'expérience",
    location: "Lomé, Togo",
    mainCategory: findCategoryByName("Maçonnerie")!,
    subCategories: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

  /*{
    id: "wrk-102",
    title: "KOFFI Dema",
    description: "Maçon spécialisé dans les structures en béton et rénovation.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: ["Béton armé", "Coffrage", "Fondations"],
    experience: "7 ans d’expérience en construction.",
    location: "Sokodé, Togo",
    category: findCategoryByName("Maçonnerie")!,
  },
  {
    id: "wrk-103",
    title: "AMETEK Mensah",
    description: "Expert en maçonnerie traditionnelle et moderne.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: ["Briques", "Pierre", "Ciment"],
    experience: "8 ans dans le BTP.",
    location: "Kara, Togo",
    category: findCategoryByName("Maçonnerie")!,
  },
  {
    id: "wrk-104",
    title: "DEMETRIO Sanchèse",
    description: "Technicien spécialisé en maçonnerie et structures de sécurité.",
    image: "/assets/workers/contruction-worker-2119866.webp",
    skills: ["Coffrage", "Béton", "Réparation"],
    experience: "6 ans sur chantiers privés et publics.",
    location: "Atakpamé, Togo",
    category: findCategoryByName("Maçonnerie")!,
  },
  {
    id: "wrk-105",
    title: "KOUTSE Abalo",
    description: "Maçon polyvalent pour construction et rénovation.",
    image: "/assets/workers/técnico-feliz-do-sistema-do-cctv-que-instala-câmera-30284275.webp",
    skills: ["Maçonnerie légère", "Enduits", "Rénovation"],
    experience: "5 ans sur chantiers divers.",
    location: "Lomé, Togo",
    category: findCategoryByName("Maçonnerie")!,
  },

  // Menuiserie
  {
    id: "wrk-201",
    title: "AFA Kossi",
    description: "Menuisier expert dans la fabrication et la pose de portes, fenêtres et meubles.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: ["Menuiserie bois", "Agencement", "Découpe et assemblage"],
    experience: "11 ans dans l’artisanat et les aménagements intérieurs.",
    location: "Lomé, Togo",
    category: findCategoryByName("Menuiserie")!,
  },
  {
    id: "wrk-202",
    title: "AGBO Kodjo",
    description: "Menuisier spécialisé dans l’ameublement sur mesure.",
    image: "/assets/workers/builder-13483484.webp",
    skills: ["Fabrication de meubles", "Découpe", "Vernis"],
    experience: "9 ans dans la menuiserie.",
    location: "Kara, Togo",
    category: findCategoryByName("Menuiserie")!,
  },
  {
    id: "wrk-203",
    title: "DEMETRIO Sanchèse",
    description: "Menuisier et charpentier pour constructions publiques et privées.",
    image: "/assets/workers/builder-14070452.webp",
    skills: ["Charpente", "Menuiserie", "Assemblage"],
    experience: "10 ans d’expérience.",
    location: "Sokodé, Togo",
    category: findCategoryByName("Menuiserie")!,
  },
  {
    id: "wrk-204",
    title: "KOUTSE Abalo (Menuiserie)",
    description: "Travailleur polyvalent en menuiserie et agencement.",
    image: "/assets/workers/contruction-worker-2119866.webp",
    skills: ["Menuiserie", "Agencement", "Installation"],
    experience: "6 ans sur différents chantiers.",
    location: "Atakpamé, Togo",
    category: findCategoryByName("Menuiserie")!,
  },
  {
    id: "wrk-205",
    title: "AMÉTÉY Komlan",
    description: "Menuisier spécialisé dans la finition intérieure et extérieure.",
    image: "/assets/workers/técnico-feliz-do-sistema-do-cctv-que-instala-câmera-30284275.webp",
    skills: ["Finition bois", "Agencement", "Vernis"],
    experience: "7 ans d’expérience dans le BTP.",
    location: "Tsévié, Togo",
    category: findCategoryByName("Menuiserie")!,
  },

  // Peinture
  {
    id: "wrk-301",
    title: "YAWA Essi",
    description: "Peintre professionnel spécialisé dans les finitions haut de gamme.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: ["Peinture intérieure", "Peinture extérieure", "Enduits décoratifs"],
    experience: "7 ans d’expérience dans le BTP et la rénovation.",
    location: "Tsévié, Togo",
    category: findCategoryByName("Peinture")!,
  },
  {
    id: "wrk-302",
    title: "KOFI Mensah",
    description: "Peintre et décorateur expérimenté.",
    image: "/assets/workers/builder-13483484.webp",
    skills: ["Peinture murale", "Décoration", "Revêtements"],
    experience: "8 ans dans la peinture de bâtiments.",
    location: "Lomé, Togo",
    category: findCategoryByName("Peinture")!,
  },
  {
    id: "wrk-303",
    title: "AGBO Komlan",
    description: "Peintre spécialisé dans les finitions et vernissage.",
    image: "/assets/workers/builder-14070452.webp",
    skills: ["Peinture décorative", "Enduits", "Revêtements"],
    experience: "6 ans sur chantiers privés.",
    location: "Kpalimé, Togo",
    category: findCategoryByName("Peinture")!,
  },
  {
    id: "wrk-304",
    title: "DEMETRIO Sanchèse",
    description: "Peintre polyvalent pour intérieur et extérieur.",
    image: "/assets/workers/contruction-worker-2119866.webp",
    skills: ["Peinture intérieure", "Peinture extérieure", "Décoration"],
    experience: "5 ans dans le BTP.",
    location: "Atakpamé, Togo",
    category: findCategoryByName("Peinture")!,
  },
  {
    id: "wrk-305",
    title: "KOUTSE Abalo",
    description: "Peintre expérimenté pour travaux résidentiels et commerciaux.",
    image: "/assets/workers/técnico-feliz-do-sistema-do-cctv-que-instala-câmera-30284275.webp",
    skills: ["Finitions", "Peinture décorative", "Enduits"],
    experience: "9 ans d’expérience.",
    location: "Sokodé, Togo",
    category: findCategoryByName("Peinture")!,
  },

  // Électricité
  {
    id: "wrk-401",
    title: "MAWULI Kodjovi",
    description: "Électricien qualifié pour installations domestiques et industrielles.",
    image: "/assets/workers/bouwer-3430239.webp",
    skills: ["Installation électrique", "Sécurité", "Maintenance"],
    experience: "9 ans d’expérience.",
    location: "Dapaong, Togo",
    category: findCategoryByName("Électricité")!,
  },
  {
    id: "wrk-402",
    title: "YAWA Essi",
    description: "Électricienne spécialisée dans la mise en conformité des installations.",
    image: "/assets/workers/builder-13483484.webp",
    skills: ["Électricité", "Maintenance", "Réparations"],
    experience: "6 ans sur divers chantiers.",
    location: "Kpalimé, Togo",
    category: findCategoryByName("Électricité")!,
  },
  {
    id: "wrk-403",
    title: "KOFI Mensah",
    description: "Technicien électricien expérimenté en BTP.",
    image: "/assets/workers/builder-14070452.webp",
    skills: ["Câblage", "Tableaux électriques", "Installation"],
    experience: "7 ans dans le BTP.",
    location: "Lomé, Togo",
    category: findCategoryByName("Électricité")!,
  },
  {
    id: "wrk-404",
    title: "AGBO Komlan",
    description: "Électricien polyvalent pour bâtiments publics et privés.",
    image: "/assets/workers/contruction-worker-2119866.webp",
    skills: ["Maintenance", "Sécurité", "Réparations"],
    experience: "8 ans d’expérience.",
    location: "Sokodé, Togo",
    category: findCategoryByName("Électricité")!,
  },
  {
    id: "wrk-405",
    title: "DEMETRIO Sanchèse",
    description: "Électricien spécialisé pour installations industrielles.",
    image: "/assets/workers/técnico-feliz-do-sistema-do-cctv-que-instala-câmera-30284275.webp",
    skills: ["Installation", "Maintenance", "Sécurité"],
    experience: "10 ans d’expérience.",
    location: "Atakpamé, Togo",
    category: findCategoryByName("Électricité")!,
  },
];
*/