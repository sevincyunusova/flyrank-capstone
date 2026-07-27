import { z } from "zod";

export const themeEnum = z.enum(["light", "dark", "system"]);

export const profileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Full name is required" })
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  theme: themeEnum,
  emailNotifications: z.boolean(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type Theme = z.infer<typeof themeEnum>;

export const defaultProfileValues: ProfileFormValues = {
  fullName: "",
  email: "",
  theme: "system",
  emailNotifications: true,
};