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
import Link from "next/link";
export default function LoginCard() {
  const router = useRouter();

  // Champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Gestion des erreurs
  const [error, setError] = useState("");

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = AuthService.login(email, password);

    if (!user) {
      setError("Email ou mot de passe incorrect");
      return;
    }

    // Stocker l'utilisateur en session locale
    localStorage.setItem("user", JSON.stringify(user));

    // Redirection
    router.push("/");
  };

  return (
    <div className="min-h-screen my-auto md:m-0 m-4">
      <Card className="w-full max-w-xl mx-auto mt-10 md:mt-22 shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-lg">Connectez-vous à votre compte</CardTitle>
          <CardDescription>
            Vueillez saisir vos identifiant pour se connecter.
          </CardDescription>
          <CardAction>
            <Link href="/a/register">
              <Button variant="link" className="text-lg font-bold hover:text-[#fbbf24] cursor-pointer">Inscription</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
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
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link
                    href="/a/forget-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:text-[#fbbf24] font-medium"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full h-11" onClick={handleSubmit}>
            Connexion
          </Button>
          <Button variant="outline" className="w-full mt-12 h-11">
            Connexion avec Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
