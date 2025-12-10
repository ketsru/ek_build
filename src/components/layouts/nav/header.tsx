"use client";

import { useEffect, useState } from "react";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBasket } from "lucide-react";
import { Input } from "@/components/ui/input";
//import ProfileSheet from "../../../../app/(users)/profile/page";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  // Charger l'utilisateur depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  return (
    <header className="">
      <nav className="">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Barre de recherche */}
          <form className="flex-1 max-w-md hidden md:block">
            <label htmlFor="search" className="sr-only">Recherche</label>

            <div className="relative">
              <Search className="absolute inset-y-0 left-3 my-auto h-4 w-4" />

              <Input
                id="search"
                type="search"
                placeholder="Rechercher…"
                className="pl-10 pr-32 h-11 rounded-full"
              />
            </div>
          </form>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="hover:text-primary transition">
              A propos
            </Link>
            <Link href="/shop" className="hover:text-primary transition">
              Boutique
            </Link>
            {user && (
            <Link href="/cart" className="hover:text-primary transition md:flex gap-2 items-center">
              <ShoppingBasket size={16} className="text-green-700" />
              <span>Sélections</span>
            </Link>
            )}
          </div>

          {/* Actions utilisateur */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Si l'utilisateur n'est PAS connecté */}
            {!user && (
              <>
                <Link href="/register">
                  <Button variant="outline">S'inscrire</Button>
                </Link>

                <Link href="/login">
                  <Button>Se connecter</Button>
                </Link>
              </>
            )}

            {/* Si l'utilisateur est connecté 
            {user && (
              <ProfileSheet
                user={user}
                trigger={
                  <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                    <div className="text-right">
                      <p className="font-semibold">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      {(user.firstName?.charAt(0) || user.lastName?.charAt(0) || "?")}
                    </div>
                  </div>
                } 
              />
            )}*/}
          </div>
        </div>
      </nav>
    </header>
  );
}
