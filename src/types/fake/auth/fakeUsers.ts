import { User, AccountStatus } from "@/types/user";

export const fakeUsers: User[] = [
  {
    id: "1",
    email: "admin@techmind.com",
    password: "azqswxcv",
    firstName: "Komi",
    lastName: "ETSRU",
    username: "ketsru",

    avatarUrl: "/avatars/default.jpg",

    status: AccountStatus.ACTIVE,

    emailConfirmedAt: new Date().toISOString(),
    scheduledDeletionDate: undefined,
    deletionRequested: false,

    verified: true,

    lastLoginAt: new Date().toISOString(),

    roles: [
      { id: "1", name: "USER" },
      { id: "2", name: "WORKER" }
    ],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // NOUVEL UTILISATEUR AVEC LE RÔLE SEARCHER
  {
    id: "2",
    email: "searcher@techmind.com",
    password: "search123",

    firstName: "Amivi",
    lastName: "DOSSOU",
    username: "amivi_d",

    avatarUrl: "/avatars/default_searcher.jpg",

    status: AccountStatus.ACTIVE,

    emailConfirmedAt: new Date().toISOString(),
    scheduledDeletionDate: undefined,
    deletionRequested: false,

    verified: true,

    lastLoginAt: new Date().toISOString(),

    roles: [
      { id: "3", name: "SEARCHER" }
    ],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
