"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUserFormContext } from "@/hooks/useUserFormContext";


type TFooter = {
  className?: string;
  onHandleNextStep?: () => void;
  onHandlePreviousStep?: () => void;
};

export default function Footer({
  className,
  onHandleNextStep,
 onHandlePreviousStep,
}: TFooter) {
  const {step} = useUserFormContext();
  
  return (
    <footer
      className={cn(
        "p-4  flex items-center justify-between w-full",
        className
      )}
    >
      {step === 1 && <div className="w-full" />}

      {step > 1 && (
        <Button
          variant="ghost"
          className="text-[#9699ab] hover:text-blue-700"
          onClick={onHandlePreviousStep}
        >
          Go Back
        </Button>
      )}
      <Button
        className={cn(
          "bg-blue-700 text-[#FFFFFF] hover:bg-[#164988]",
        )}
        onClick={onHandleNextStep}
        type="submit"
      >
        {step === 3 ? "Confirm" : "Next"}
      </Button>
    </footer>
  );
}