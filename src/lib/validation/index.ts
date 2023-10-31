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
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password is too long" }),
});

export const SignInValidation = z.object({
  email: z.string().email({ message: "Please provide valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password is too long" }),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Post must be at least 5 characters" })
    .max(2200, { message: "Post is too long" }),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
