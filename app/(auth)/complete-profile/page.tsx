"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

import ChooseRole from "@/components/layouts/auth/choose_role";
import ChooseStudy from "@/components/layouts/auth/choose_study";
import AddLevel from "@/components/layouts/auth/add_level";
import AddApprenticeship from "@/components/layouts/auth/add_apprenticeship";
import AddSkills from "@/components/layouts/auth/add_skills";
import SearcherDepartment from "@/components/layouts/auth/searchers_department";
import PersonalInfo from "@/components/layouts/auth/personal_infos";
import { Axe } from "lucide-react";

export default function CompleteProfilePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});
  const [progress, setProgress] = useState(0);

  const updateData = (newData: any) => {
    setData((prev: any) => ({ ...prev, ...newData }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  // TOTAL STEPS
  const getTotalSteps = () => {
    if (!data.role) return 5;
    return data.role === "WORKER" ? 5 : 3;
  };

  useEffect(() => {
    const total = getTotalSteps();
    const percent = (step / total) * 100;
    setProgress(percent);
  }, [step, data.role]);

  return (
    <>
      {/* -------- PROGRESS BAR + ICON -------- */}
      <div className="pt-10 w-full flex justify-center relative">
        <div className="relative w-[60%]">

          {/* Barre de progression */}
          <Progress value={progress} className="w-full" />

          {/* Icône flottante qui suit la progression */}
          <div
            className="absolute -top-7 transition-all duration-500 ease-out"
            style={{ left: `calc(${progress}% - 14px)` }} // centre l’icône
          >
            <Axe className="w-7 h-7 drop-shadow-md text-[#fbbf24]" />
          </div>

        </div>
      </div>
      {/* -------------------------------------- */}

      <div className="mt-16 mb-20 flex justify-center items-center px-4">

        {/* STEP 1 : ROLE */}
        {step === 1 && <ChooseRole next={next} update={updateData} />}

        {/* WORKER FLOW */}
        {step === 2 && data.role === "WORKER" && (
          <ChooseStudy next={next} back={back} update={updateData} />
        )}

        {step === 3 && data.role === "WORKER" && data.study === "STUDY" && (
          <AddLevel next={next} back={back} update={updateData} />
        )}

        {step === 3 && data.role === "WORKER" && data.study === "APPRENTICE" && (
          <AddApprenticeship next={next} back={back} update={updateData} />
        )}

        {step === 4 && data.role === "WORKER" && (
          <AddSkills next={next} back={back} update={updateData} />
        )}

        {step === 5 && data.role === "WORKER" && (
          <PersonalInfo next={next} back={back} update={updateData} />
        )}

        {/* SEARCHER FLOW */}
        {step === 2 && data.role === "SEARCHER" && (
          <SearcherDepartment next={next} back={back} update={updateData} />
        )}

        {step === 3 && data.role === "SEARCHER" && (
          <PersonalInfo next={next} back={back} update={updateData} />
        )}
      </div>
    </>
  );
}
