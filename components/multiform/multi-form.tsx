"use client";
import { useUserFormContext } from "@/hooks/useUserFormContext";
import UserInformation from "./user-info";
import RequiredInformation from "./required-info";
import EmploymentHistory from "./employment-history";

export const MultiForm = ({data}:{data:{name: string, email:string}}) => {
  const { step } = useUserFormContext();

  return <>
  {step === 1 && <UserInformation data={data} />}
  {step === 2 && <RequiredInformation/>}
  {step === 3 && <EmploymentHistory/>}
  </>;
};
