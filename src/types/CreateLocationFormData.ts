import { z } from "zod";
import { createLocationFormSchema } from "../schema/CreateLocationFormSchema";

export type CreateLocationFormData = z.infer<typeof createLocationFormSchema>;
