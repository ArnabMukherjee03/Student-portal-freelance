import * as z from "zod";

export const LoginSchema =z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    })
});

export const RegisterSchema =z.object({
    name: z.string().min(3,{
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minimum 6 charecter required"
    })
});





export const userInformationSchema = z.object({
    name: z.string().min(1,{
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    phone: z.string().max(10,{
        message: "Phone no required"
    }).min(10,{
        message: "Phone no required"
    }),
    secondaryphone: z.string().max(10,{
        message: "Phone no required"
    }).min(10,{
        message: "Phone no required"
    }),
    
})

export const requiredInfoSchema = z.object({
    
    hasCrime: z.boolean(),
    crimeDescription: z.string().min(1).max(255).optional()
})

