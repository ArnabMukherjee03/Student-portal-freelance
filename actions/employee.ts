"use server";

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { notFound } from "next/navigation";



export const employeeDetails = async () => {
  try {

    const session = await auth();

    if(!session){
       throw new Error("Unauthorized Request")
    }

    if(session?.user?.id){
    const employeeDetails = await db.user.findUnique({
        where: {
            id: parseInt(session?.user?.id)
        },
        include: {
            userInfo: true
        }
    })

    if(!employeeDetails){
        notFound()
    }

    return employeeDetails
  }

  } catch (error) {
    console.log(error);
    throw error;
  }
};
