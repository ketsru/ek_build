// lib/auth/authService.ts

import { fakeUsers } from "./fakeUsers";
import { User, AccountStatus } from "@/types/user";
import { v4 as uuidv4 } from "uuid"; // Facultatif si tu veux des vrais IDs uniques

export class AuthService {
  static login(email: string, password: string): User | null {
    const user = fakeUsers.find(u => u.email === email);

    if (!user) return null;
    if (user.password !== password) return null;
    if (user.status !== AccountStatus.ACTIVE) return null;

    return user;
  }

  static register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ): User | null {

    // Vérifier si email existe déjà
    const existingEmail = fakeUsers.find(u => u.email === email);
    if (existingEmail) return null;

    // Vérifier si username existe déjà (optionnel mais propre)
    const username = `${firstName}${lastName}`.toLowerCase();
    const existingUsername = fakeUsers.find(u => u.username === username);
    if (existingUsername) return null;

    // Vérifier mot de passe
    if (password !== confirmPassword) return null;

    // Créer un nouvel utilisateur
    const newUser: User = {
      id: uuidv4(), // ou Date.now().toString()
      firstName,
      lastName,
      email,
      username,
      password,

      avatarUrl: "/avatars/default.jpg",

      status: AccountStatus.ACTIVE,

      emailConfirmedAt: new Date().toISOString(),
      scheduledDeletionDate: undefined,
      deletionRequested: false,

      verified: false,

      lastLoginAt: undefined,

      roles: [{ id: "1", name: "USER" }],

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    fakeUsers.push(newUser);

    return newUser;
  }

  static getUserById(id: string): User | undefined {
    return fakeUsers.find(u => u.id === id);
  }
}
