"use server";

import { db } from "@/lib/db";
import { userInfoSchema } from "@/schemas";
import { auth } from "@/auth";
import * as z from "zod";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";
import { Session } from "inspector";


export const multiFormSubmit = async (user: z.infer<typeof userInfoSchema>) => {
  try {
    const validatedFields = userInfoSchema.safeParse(user);
    if (!validatedFields.success) {
      throw new Error("Invalid Fields: Please Fill all the required fields");
    }

    const {
      image,
      phone,
      secondaryphone,
      address,
      city,
      dob,
      state,
      hasCrime,
      crimeDescription,
      zipcode,
      gender,
      country
    } = validatedFields.data;

    const session = await auth();

    if(!session){
       throw new Error("UnAuthorized Request")
    }

    const currentUserId = session?.user?.id && parseInt(session?.user?.id)

    if(currentUserId){
      const createdUserInfo = await db.userInformation.create({
        data: {
          image,
          phone,
          secondaryphone,
          address,
          city,
          dob,
          state,
          hasCrime,
          crimeDescription,
          zipcode,
          country,
          gender,
          userId: currentUserId,
        },
      });
  
      if(!createdUserInfo){
         throw new Error('Something Went Wrong While Creating UserInfo');
      }
      
  
      await db.user.update({
        data:{
          isFormFilled: true
        },
        where:{
          id: currentUserId
        }
      })
    }

    revalidatePath('/dashboard')
    redirect('/dashboard');

  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const checkFormFilled = async()=>{
  try {
    const session = await auth();
    if(session?.user?.id){
      const user = await db.user.findUnique({
        where:{
          id: parseInt(session?.user?.id)
        }
      })
      return user?.isFormFilled;
    }
  } catch (error) {
    throw error;
  }
}
