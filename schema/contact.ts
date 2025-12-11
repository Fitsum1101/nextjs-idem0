import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  inquiry_type: z.enum(["0", "1", "2"], "Please select an inquiry type"),
  phone: z.string().optional(),
  message: z.string().optional(),
  accept_terms: z.boolean(),
});

export type ContactUsFormType = z.infer<typeof ContactUsSchema>;

export const ContactUsFormDefaultValue: ContactUsFormType = {
  name: "",
  email: "",
  inquiry_type: "0",
  phone: "",
  message: "",
  accept_terms: false,
};
