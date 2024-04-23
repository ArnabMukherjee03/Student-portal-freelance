"use client"
import { useUserFormContext } from "@/hooks/useUserFormContext";
import { cn } from "@/lib/utils";
import React from "react";

type TStep = {
  stepNumber: number;
  smallTitle?: string;
  sectionTitle?: string;
};

export const Step = ({
  stepNumber = 1,
  smallTitle = "",
  sectionTitle = "",
}: TStep)=> {
  const {step} = useUserFormContext();

  return (
    <section className="uppercase flex items-center gap-4">
      <p
        className={cn(
          "w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold text-c-neutral-white border border-c-neutral-white",
          {
            "bg-blue-600 text-white border-blue-200":
              stepNumber === step,
          }
        )}
      >
        {stepNumber}
      </p>
      <div className="flex flex-col">
        <p className="text-xs text-c-primary-pastel-blue">{smallTitle}</p>
        <p className="text-sm text-c-neutral-white font-bold">{sectionTitle}</p>
      </div>
    </section>
  );
}