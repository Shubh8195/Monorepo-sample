import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string(),
  password: z.string().min(2),
});

export type SignUpParams = z.infer<typeof SignUpSchema>;
