"use client";

import { useEffect, useState } from "react";
import ListFlow from "./list-flow/page";
import { User } from "@/types/user";
import GlobalLandingResource from "@/components/layouts/landing/global";
import Loading from "./loading";

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
    return <Loading />;
  }

  return (
    <>
      {!user && (
        <div className="">
          <GlobalLandingResource />
        </div>
      )}

      {user && 
        <div className="">
          <ListFlow />
        </div>
      }
    </>
  );
}
