"use client";

import { cn } from "@/lib/utils";
import { lusitana } from "../fonts";
import { Card, CardContent, CardHeader } from "../ui/card";


interface MultiFormWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel: string
}

export const MultiFormWrapper = ({
  children,
  headerLabel,
  subHeaderLabel
}: MultiFormWrapperProps) => {
  return (
    <Card className="grow lg:mr-20 border-none ">
      <CardHeader>
        <div className="">
          <h1 className={cn("text-c-primary-marine-blue text-2xl font-bold lg:text-[32px] mb-2",lusitana.className)}>
            {headerLabel}
          </h1>
          <p className=" text-gray-400">
            {subHeaderLabel}
          </p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
