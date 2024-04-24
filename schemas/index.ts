import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 charecter required",
  }),
});

export const userInformationSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  phone: z
    .string()
    .max(10, {
      message: "Phone no required",
    })
    .min(10, {
      message: "Phone no required",
    }),
  secondaryphone: z
    .string()
    .max(10, {
      message: "Phone no required",
    })
    .min(10, {
      message: "Phone no required",
    }),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const requiredInfoSchema = z.object({
  address: z.string().min(3, {
    message: "Address is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  state: z.string().min(1, {
    message: "State is required",
  }),
  dob: z.string().min(1, {
    message: "DOB is required",
  }),
  image: z.any() 
    ,
    hasCrime: z.string(),
    crimeDescription: z.string().optional(),
    zipcode: z.string()
}).refine(schema => {
  return !(schema.hasCrime === "yes" && schema.crimeDescription===undefined)
},"Ok");