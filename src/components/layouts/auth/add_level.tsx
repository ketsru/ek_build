"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddLevel({ next, back, update }: any) {
  const [level, setLevel] = useState("");
  const [school, setSchool] = useState("");

  const finish = () => {
    if (!level || !school) return;
    update({ level, school });
    next();
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Informations sur vos études</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Input
          placeholder="Niveau d'étude (Licence, BTS...)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="h-11"
        />

        <Input
          placeholder="Établissement"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="h-11"
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
