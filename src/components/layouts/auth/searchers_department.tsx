"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DEPARTMENTS = ["Maçonnerie", "Plomberie", "Électricité", "Peinture", "Carrelage", "Menuiserie"];

export default function SearcherDepartment({ next, back, update }: any) {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const toggle = (dep: string) => {
    if (selectedDepartments.includes(dep)) {
      setSelectedDepartments(selectedDepartments.filter((d) => d !== dep));
    } else {
      setSelectedDepartments([...selectedDepartments, dep]);
    }
  };

  const finish = () => {
    if (selectedDepartments.length === 0) return;
    update({ departments: selectedDepartments });
    next();
  };

  return (
    <Card className="w-full max-w-xl border-0 shadow-none">
      <CardHeader>
        <CardTitle>Quel type de service recherchez-vous ?</CardTitle>
      </CardHeader>

      <CardContent className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {DEPARTMENTS.map((d) => (
          <div
            key={d}
            onClick={() => toggle(d)}
            className={`border p-3 rounded cursor-pointer flex items-center gap-3 ${
              selectedDepartments.includes(d) ? "border-yellow-400 bg-yellow-50" : ""
            }`}
          >
            <span
              className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
                selectedDepartments.includes(d)
                  ? "border-yellow-400 bg-yellow-400"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selectedDepartments.includes(d) && <span className="w-3 h-3 bg-white" />}
            </span>
            <span>{d}</span>
          </div>
        ))}

        <div
          onClick={() => toggle("AUTRE")}
          className={`border p-3 rounded cursor-pointer flex items-center gap-3 ${
            selectedDepartments.includes("AUTRE") ? "border-yellow-400 bg-yellow-50" : ""
          }`}
        >
          <span
            className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
              selectedDepartments.includes("AUTRE")
                ? "border-yellow-400 bg-yellow-400"
                : "border-gray-300 bg-white"
            }`}
          >
            {selectedDepartments.includes("AUTRE") && <span className="w-3 h-3 bg-white" />}
          </span>
          <span>Autre</span>
        </div>
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
