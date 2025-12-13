
import { SidebarSection } from "@/types/sidebar/items"
import {
  LayoutDashboard,
  User2,
  CreditCard,
  Key,
  FileText,
  Activity,
  Settings,
  Folder,
  Paperclip,
} from "lucide-react"

export const adminMenu: SidebarSection[] = [
  {
    id: "main",
    items: [
      {
        id: "dashboard",
        label: "Tableau de bord",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    id: "management",
    label: "Gestion des utilisateurs",
    items: [
      {
        id: "workers",
        label: "Les prestataires",
        href: "/admin/workers",
        icon: User2,
      },
      {
        id: "searchers",
        label: "Les chercheurs",
        href: "/admin/searchers",
        icon: CreditCard,
      },
      /*{
        id: "smtp",
        label: "Identifiants SMTP",
        icon: Key,
        children: [
          {
            id: "credentials",
            label: "Credentials",
            href: "/admin/credential",
          },
          {
            id: "logs",
            label: "Logs d'envoi",
            href: "/admin/log-envoie",
            icon: FileText,
          },
        ],
      },*/
    ],
  },

  {
    id: "system",
    label: "Gestion système",
    items: [
      {
        id: "category",
        label: "Les catégories",
        href: "/admin/categories",
        icon: Activity,
      },
      {
        id: "server-settings",
        label: "Paramètres serveur",
        icon: Settings,
        children: [
          {
            id: "domains",
            label: "Domaines",
            href: "/admin/server-settings/domains",
          },
          {
            id: "blocked-domains",
            label: "Domaines bloqués",
            href: "/admin/domains/blocked-email-domaines",
          },
        ],
      },
      {
        id: "stats",
        label: "Statistiques",
        href: "/admin/statistiques",
        icon: Activity,
      },
    ],
  },
]
