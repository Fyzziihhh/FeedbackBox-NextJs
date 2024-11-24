import { z } from "zod";

export const UsernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .min(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9]*$/, "Username must not contain special characters");

export const SignUpSchema = z.object({
  username: UsernameValidation,
  email:z.string().email({message:"Invalid email address"}),
  password:z.string().min(6,{message:"Password must be atleast 6 characters"})
});
