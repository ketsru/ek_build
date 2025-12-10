
// types/user.ts

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
}

export interface Role {
  id: string;
  name: string; // ADMIN, WORKER, SEARCHER
}

export interface User {
  id: string;
  email: string;
  password?: string;

  firstName: string;
  lastName: string;
  username?: string;

  avatarUrl?: string;

  status: AccountStatus;

  emailConfirmedAt?: string;
  scheduledDeletionDate?: string;
  deletionRequested: boolean;

  verified: boolean;

  lastLoginAt?: string;

  roles: Role[];

  createdAt: string;
  updatedAt: string;
}
