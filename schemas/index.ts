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
  gender: z.enum(['female', 'male', 'other']),
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

export const requiredInfoSchema = z
  .object({
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
    country: z.string(),
    image: z.any(),
    hasCrime: z.string(),
    crimeDescription: z.string().optional(),
    zipcode: z.string(),
  })
  .superRefine((schema, ctx) => {
    if (schema.hasCrime === "yes" && !schema.crimeDescription) {
      ctx.addIssue({
        message: "crimeDescription Required if commited Crime",
        code: z.ZodIssueCode.custom,
        path: ["crimeDescription"],
      });
    }
  });

export const userInfoSchema = z.object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    image: z.string().min(1,{
      message: 'Image is Required'
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
      country: z.string(),
      gender: z.enum(['female', 'male', 'other']),
    secondaryphone: z
      .string()
      .max(10, {
        message: "Phone no required",
      })
      .min(10, {
        message: "Phone no required",
      }),
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
    hasCrime: z.string(),
    crimeDescription: z.string(),
    zipcode: z.string(),
  })
  .superRefine((schema, ctx) => {
    if (schema.hasCrime === "yes" && !schema.crimeDescription) {
      ctx.addIssue({
        message: "crimeDescription Required if commited Crime",
        code: z.ZodIssueCode.custom,
        path: ["crimeDescription"],
      });
    }
  });

export const employmentHistorySchema = z.object({
  employer: z.string().min(1, {
    message: "Employer name is required",
  }),
  position: z.string().min(1, {
    message: "Position name is required",
  }),
  leaveReason: z.string().min(1, {
    message: "Living reason is required",
  }),
  startDate: z.string().min(1, {
    message: "Joining Date is required",
  }),
  endDate: z.string().min(1, {
    message: "Leaving Date is required",
  }),
  payRate: z.string().min(1, {
    message: "Pay rate is required",
  }),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  contactInfo: z.string().min(1, {
    message: "Contact Info is required",
  }),
});
