"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthService } from "@/types/fake/auth/authService";
import Link from "next/link";
export default function ForgetPassword () {
  const router = useRouter();

  // Champs du formulaire
  const [email, setEmail] = useState("");

  // Gestion des erreurs
  const [error, setError] = useState("");

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = AuthService.forgetPassword(email);

    if (!user) {
      setError("Email non trouvé");
      return;
    }

    // Stocker l'utilisateur en session locale
    localStorage.setItem("user", JSON.stringify(user));

    // Redirection
    router.push("/a/reset-password");
  };

  return (
    <div className="min-h-screen my-auto md:m-0 m-4">
      <Card className="w-full max-w-xl mx-auto mt-10 md:mt-22 shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-lg">Connectez-vous à votre compte</CardTitle>
          <CardDescription>
            Vueillez saisir votre email pour réinitialiser le mot de passe.
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
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full h-11" onClick={handleSubmit}>
            Soumettre requête
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
