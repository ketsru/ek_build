"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ChooseRole({ next, update }: any) {
  const [role, setRole] = useState("");

  const handleNext = () => {
    if (!role) return;
    update({ role });
    next();
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Qui êtes-vous ?</CardTitle>
        <p className="text-muted-foreground">
          Choisissez le type de compte qui correspond à votre activité.
        </p>
      </CardHeader>

        <CardContent className="flex flex-col gap-4">
            {/* WORKER */}
            <div
                onClick={() => setRole("WORKER")}
                className={`relative border rounded-lg p-4 cursor-pointer transition flex items-start gap-3
                ${role === "WORKER" ? "border-yellow-400 bg-yellow-50" : ""}
                `}
            >
                {/* Radio Circle */}
                <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center 
                    ${role === "WORKER" ? "border-yellow-500" : "border-gray-400"}
                `}
                >
                {role === "WORKER" && (
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                )}
                </div>

                {/* Text */}
                <div>
                <h2 className="font-semibold">Je suis prestataire</h2>
                <p className="text-sm text-muted-foreground">
                    Je propose mes services dans un domaine du BTP.
                </p>
                </div>
            </div>

            {/* SEARCHER */}
            <div
                onClick={() => setRole("SEARCHER")}
                className={`relative border rounded-lg p-4 cursor-pointer transition flex items-start gap-3
                ${role === "SEARCHER" ? "border-yellow-400 bg-yellow-50" : ""}
                `}
            >
                {/* Radio Circle */}
                <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center 
                    ${role === "SEARCHER" ? "border-yellow-500" : "border-gray-400"}
                `}
                >
                {role === "SEARCHER" && (
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                )}
                </div>

                {/* Text */}
                <div>
                <h2 className="font-semibold">Je recherche un prestataire</h2>
                <p className="text-sm text-muted-foreground">
                    Je souhaite trouver un professionnel pour un travail.
                </p>
                </div>
            </div>
        </CardContent>
      <CardFooter>
        <Button className="w-full h-11" onClick={handleNext}>
          Continuer
        </Button>
      </CardFooter>
    </Card>
  );
}
