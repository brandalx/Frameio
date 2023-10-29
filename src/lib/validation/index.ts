import * as z from "zod";

export const SignUpValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(50, { message: "Name is too long" }),

  username: z
    .string()
    .min(2, { message: "Username is too short" })
    .max(50, { message: "Username is too long" }),
  email: z.string().email({ message: "Please provide valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password is too long" }),
});
