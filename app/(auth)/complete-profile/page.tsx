"use client";

import { useState } from "react";

import ChooseRole from "@/components/layouts/auth/choose_role";
import ChooseStudy from "@/components/layouts/auth/choose_study";
import AddLevel from "@/components/layouts/auth/add_level";
import AddApprenticeship from "@/components/layouts/auth/add_apprenticeship";
import AddSkills from "@/components/layouts/auth/add_skills";
import SearcherDepartment from "@/components/layouts/auth/searchers_department";
import PersonalInfo from "@/components/layouts/auth/personal_infos";

export default function CompleteProfilePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});

  const updateData = (newData: any) => {
    setData((prev: any) => ({ ...prev, ...newData }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-[600px] flex justify-center items-center px-4">
      
      {/* STEP 1 : ROLE */}
      {step === 1 && (
        <ChooseRole next={next} update={updateData} />
      )}


      {/* WORKER FLOW */}

      {/* STEP 2 : CHOOSE STUDY */}
      {step === 2 && data.role === "WORKER" && (
        <ChooseStudy next={next} back={back} update={updateData} />
      )}

      {/* STEP 3 : STUDY CASE */}
      {step === 3 && data.role === "WORKER" && data.study === "STUDY" && (
        <AddLevel next={next} back={back} update={updateData} />
      )}

      {/* STEP 3 : APPRENTICE CASE */}
      {step === 3 && data.role === "WORKER" && data.study === "APPRENTICE" && (
        <AddApprenticeship next={next} back={back} update={updateData} />
      )}

      {/* STEP 4 : SKILLS (WORKER) */}
      {step === 4 && data.role === "WORKER" && (
        <AddSkills next={next} back={back} update={updateData} />
      )}

      {/* STEP 5 : PERSONAL INFOS (WORKER) */}
      {step === 5 && data.role === "WORKER" && (
        <PersonalInfo next={next} back={back} update={updateData} />
      )}




      {/* SEARCHER FLOW */}

      {/* STEP 2 : CHOOSE DEPARTMENT */}
      {step === 2 && data.role === "SEARCHER" && (
        <SearcherDepartment next={next} back={back} update={updateData} />
      )}

      {/* STEP 3 : PERSONAL INFOS (SEARCHER) */}
      {step === 3 && data.role === "SEARCHER" && (
        <PersonalInfo next={next} back={back} update={updateData} />
      )}
    </div>
  );
}
