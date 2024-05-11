"use client";
import { LucideBarChartHorizontalBig } from "lucide-react";
import React, { createContext, useState } from "react";

interface UserInformation {
  name: string;
  email: string;
  phone: string;
  secondaryphone: string;
  address: string;
  city: string;
  dob: string;
  image: File;
  state: string;
  hasCrime: string;
  crimeDescription: string;
  gender: 'male'|'female'|'other';
  country: string;
  zipcode: string;
}

interface employerInfo {
  employer: string;
  position: string;
  leaveReason: string;
  startDate: string;
  endDate: string;
  payRate: string;
  address: string;
  contactInfo: string;
  [key: string]: string;
}

interface UserContextProps {
  user: UserInformation | null;
  updateUserData: (property: Partial<UserInformation>) => void;
  step: number;
  changeStep: (property: number) => void;
  employment: employerInfo[];
  updateEmployment: (property: employerInfo[]) => void;
  addNew: ()=> void
  handleDelete: (property: number)=> void
}

export const UserContext = React.createContext<UserContextProps>({
  user: null,
  updateUserData: () => {},
  step: 0,
  changeStep: () => {},
  employment: [
    {
      employer: "",
      position: "",
      leaveReason: "",
      startDate: "",
      endDate: "",
      payRate: "",
      address: "",
      contactInfo: "",
    },
  ],
  updateEmployment: () => {},
  addNew: ()=>{},
  handleDelete: ()=>{}
});

export const UserFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserInformation | null>(null);
  const [step, setStep] = useState<number>(1);
  const [employment, setEmployment] = useState<employerInfo[]>([
    {
      employer: "",
      position: "",
      leaveReason: "",
      startDate: "",
      endDate: "",
      payRate: "",
      address: "",
      contactInfo: "",
    },
  ]);

  const updateUserData = (values: Partial<UserInformation>) => {
    console.log("CONTEXT", values);
    setUser((prevUser) => {
      return { ...prevUser!, ...values };
    });
  };

  const addNew = () => {
    setEmployment([...employment,{
      employer: "",
      position: "",
      leaveReason: "",
      startDate: "",
      endDate: "",
      payRate: "",
      address: "",
      contactInfo: "",
    }])
  };

  const handleDelete = (index:number) => {
    const newArray = [...employment];
    newArray.splice(index, 1);
    setEmployment(newArray);
  }

  const changeStep = (step: number) => {
    setStep(step);
  };

  const updateEmployment = (values: employerInfo[]) => {
    setEmployment(values);
  };

  console.log(employment);

  const contextValue: UserContextProps = {
    user,
    updateUserData,
    step,
    changeStep,
    employment,
    updateEmployment,
    addNew,
    handleDelete
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
