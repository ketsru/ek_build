"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthService } from "@/types/fake/auth/authService";

export default function LoginCard() {
  const router = useRouter();

  // Champs du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Gestion des erreurs
  const [error, setError] = useState("");

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = AuthService.register(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );

    if (!user) {
      setError("Impossible de créer le compte. Vérifiez vos informations.");
      return;
    }

    // Stocker l'utilisateur
    localStorage.setItem("user", JSON.stringify(user));

    // Redirection
    router.push("/complete-profile");
  };

  return (
    <div className="min-h-screen my-auto">
      <Card className="w-full max-w-xl mx-auto mt-10 md:mt-5 shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-lg">Créer un compte</CardTitle>
          <CardDescription>
            Veuillez renseigner vos informations pour finaliser l'inscription.
          </CardDescription>

          <CardAction>
            <Button variant="link" className="text-lg font-bold hover:text-[#fbbf24]">
              Connexion
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                <Label htmlFor="firstName"> Prénoms </Label>
                <Input
                    id="firstName"
                    type="text"
                    placeholder="Doe"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-11"
                />
                </div>

                <div className="grid gap-2">
                <Label htmlFor="lastName"> Nom </Label>
                <Input
                    id="lastName"
                    type="text"
                    placeholder="John"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-11"
                />
                </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full h-11" onClick={handleSubmit}>
            Inscription
          </Button>

          <Button variant="outline" className="w-full mt-12 h-11">
            Connexion avec Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
