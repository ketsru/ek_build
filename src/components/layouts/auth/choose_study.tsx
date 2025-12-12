"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ChooseStudy({ next, back, update }: any) {
  const [study, setStudy] = useState("");

  const handleNext = () => {
    if (!study) return;
    update({ study });
    next();
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Votre parcours</CardTitle>
        <p className="text-muted-foreground">Comment avez-vous appris votre métier ?</p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
            {/* ÉTUDES SUPÉRIEURES */}
            <div
                onClick={() => setStudy("STUDY")}
                className={`relative border rounded-lg p-4 cursor-pointer transition flex items-center gap-3
                ${study === "STUDY" ? "border-yellow-400 bg-yellow-50" : ""}
                `}
            >
                {/* Radio Circle */}
                <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${study === "STUDY" ? "border-yellow-500" : "border-gray-400"}
                `}
                >
                {study === "STUDY" && (
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                )}
                </div>

                {/* Label */}
                <span className="font-medium">Études supérieures</span>
            </div>

            {/* APPRENTISSAGE */}
            <div
                onClick={() => setStudy("APPRENTICE")}
                className={`relative border rounded-lg p-4 cursor-pointer transition flex items-center gap-3
                ${study === "APPRENTICE" ? "border-yellow-400 bg-yellow-50" : ""}
                `}
            >
                {/* Radio Circle */}
                <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${study === "APPRENTICE" ? "border-yellow-500" : "border-gray-400"}
                `}
                >
                {study === "APPRENTICE" && (
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                )}
                </div>

                {/* Label */}
                <span className="font-medium">Apprentissage</span>
            </div>
            </CardContent>


      <CardFooter className="gap-4 grid grid-cols-2">
        <Button variant="outline" className="w-full h-11" onClick={back}>
          Retour
        </Button>
        <Button className="w-full h-11" onClick={handleNext}>
          Continuer
        </Button>
      </CardFooter>
    </Card>
  );
}
