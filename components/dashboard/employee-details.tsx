import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { lusitana } from "../fonts";
import { cn } from "@/lib/utils";
import { PersonalDetails } from "./personal-details";
import { Suspense } from "react";


export const EmployeeDetails = ()=>{

    return <Tabs defaultValue="personal" className="w-full lg:w-[70%] bg-white p-4 shadow-md rounded-md">
    <TabsList className={cn("w-full rounded-none justify-none bg-white",lusitana.className)}>
      <TabsTrigger value="personal" className="rounded-none text-lg text-black">Personal Info</TabsTrigger>
      <TabsTrigger value="employment" className="rounded-none text-lg text-black">Employment History</TabsTrigger>
    </TabsList>
    <TabsContent value="personal">
       <Suspense fallback={<div>okk</div>}>
        <PersonalDetails/>
       </Suspense>
    </TabsContent>
    <TabsContent value="employment">Change your password here.</TabsContent>
  </Tabs>
  
}