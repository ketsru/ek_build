"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PersonalInfo({ next, back, update }: any) {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  const finish = () => {
    if (!phone || !birthdate || !country || !region || !city) return;

    update({
      personalInfo: { phone, birthdate, country, region, city },
    });

    // Mark user as fully completed
    router.push("/");
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Informations personnelles</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">

        <Input placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

        <Input placeholder="Pays" value={country} onChange={(e) => setCountry(e.target.value)} />

        <Input placeholder="Région" value={region} onChange={(e) => setRegion(e.target.value)} />

        <Input placeholder="Ville / Village" value={city} onChange={(e) => setCity(e.target.value)} />
      </CardContent>

      <CardFooter className="gap-4 grid grid-cols-2">
        <Button variant="outline" className="w-full h-11" onClick={back}>
          Retour
        </Button>

        <Button className="w-full h-11" onClick={finish}>
          Terminer
        </Button>
      </CardFooter>
    </Card>
  );
}
