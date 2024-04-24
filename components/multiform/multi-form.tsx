"use client";

import { useUserFormContext } from "@/hooks/useUserFormContext";
import UserInformation from "./user-info";
import RequiredInformation from "./required-info";

export const MultiForm = () => {
  // const { step } = useUserFormContext();
  const step = 2;

  return <>
  {step === 1 && <UserInformation />}
  {step ===2 && <RequiredInformation/>}
  </>;
};
