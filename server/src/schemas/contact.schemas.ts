import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().max(50),
  email: z.string().email().max(50),
  phoneNumber: z.string(),
});

const contactReturnSchema = contactSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: z.string().uuid(),
});

const updateContactSchema = z.object({
  fullName: z.string().max(50).nullish(),
  email: z.string().email().max(50).nullish(),
  phoneNumber: z.string().max(11).nullish(),
});

const listAllContactsSchema = z.array(contactReturnSchema);

export {
  contactSchema,
  contactReturnSchema,
  updateContactSchema,
  listAllContactsSchema,
};