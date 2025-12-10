"use client";

import { useEffect, useState } from "react";
import ListFlow from "./list_flow/page";
import { User } from "@/types/user";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On lit l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      {!user && (
        <div className="text-center py-10 text-lg font-semibold min-h-screen">
          Je ne suis pas connecté
        </div>
      )}

      {user && <ListFlow />}
    </>
  );
}
