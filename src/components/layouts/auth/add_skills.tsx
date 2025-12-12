"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SKILLS = [
  "Maçonnerie",
  "Électricité",
  "Plomberie",
  "Peinture",
  "Carrelage",
  "Menuiserie",
];

export default function AddSkills({ next, back, update }: any) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (skill: string) => {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const finish = () => {
    if (selected.length === 0) return;
    update({ skills: selected });
    next();
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none">
      <CardHeader>
        <CardTitle>Vos compétences</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            onClick={() => toggle(skill)}
            className={`border rounded p-3 cursor-pointer flex items-center gap-3 ${
              selected.includes(skill) ? "border-yellow-400 bg-yellow-50" : ""
            }`}
          >
            {/* Checkbox visuelle */}
            <span
              className={`w-5 h-5 border flex items-center justify-center rounded-sm ${
                selected.includes(skill) ? "border-yellow-400 bg-yellow-400" : "border-gray-300 bg-white"
              }`}
            >
              {selected.includes(skill) && <span className="w-3 h-3 bg-white" />}
            </span>

            <span>{skill}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="gap-4 grid grid-cols-2">
        <Button variant="outline" className="w-full h-11" onClick={back}>
          Retour
        </Button>
        <Button className="w-full h-11" onClick={finish}>
          Continuer
        </Button>
      </CardFooter>
    </Card>
  );
}
