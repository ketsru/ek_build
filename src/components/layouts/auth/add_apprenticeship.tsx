"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddApprenticeship({ next, back, update }: any) {
  const [company, setCompany] = useState("");
  const [boss, setBoss] = useState("");
  const [phone, setPhone] = useState("");

  const finish = () => {
    if (!company || !boss || !phone) return;
    update({ company, boss, phone });
    next();
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Détails de votre apprentissage</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} />

        <Input placeholder="Nom du patron" value={boss} onChange={(e) => setBoss(e.target.value)} />

        <Input
          placeholder="Téléphone du patron"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </CardContent>

      <CardFooter className="gap-4 grid grid-cols-2">
        <Button variant="outline" onClick={back} className="w-full h-11">
          Retour
        </Button>
        <Button onClick={finish} className="w-full h-11">
          Continuer
        </Button>
      </CardFooter>
    </Card>
  );
}
