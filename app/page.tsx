"use client";

import { useEffect, useState } from "react";
import ListFlow from "./u/prest/page";
import { User } from "@/types/user";
import GlobalLandingResource from "@/components/layouts/landing/global";
import Loading from "./loading";
import Nav from "@/components/layouts/nav/desktop_nav";
import Footer from "@/components/layouts/nav/footer";

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
        <>
        <div className="">
          <Nav />
          <ListFlow />
          <Footer />
        </div>
        </>
      }
    </>
  );
}
