'use client';
import React, { createContext, useState } from "react";

interface Address {
    houseNo: string;
    area: string;
    city: string;
    state: string;
    zipCode: string;
}

interface UserInformation {
    name: string;
    email: string;
    phone: string;
    secondaryphone: string;
    address: Address;
    hasCrime: boolean;
    crimeDescription: string;
}

interface UserContextProps {
    user: UserInformation | null;
    updateUserData: (property: Partial<UserInformation>) => void;
    step: number,
    changeStep: (property:number)=>void
}

export const UserContext = React.createContext<UserContextProps>({
    user: null,
    updateUserData: () => {},
    step: 0,
    changeStep: () => {}
});

export const UserFormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInformation | null>(null);
  const [step,setStep] = useState<number>(1)

 console.log(user);
 

  const updateUserData = (values: Partial<UserInformation>) => {
      setUser(prevUser => {
          return { ...prevUser!, ...values };
      });
  };

  const changeStep = (step: number)=>{
    setStep(step)
  }

  console.log(user);
  

  const contextValue: UserContextProps = {
      user,
      updateUserData,
      step,
      changeStep
  };

  return (
      <UserContext.Provider value={contextValue}>
          {children}
      </UserContext.Provider>
  );
};
