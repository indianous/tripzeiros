import { z } from "zod";

const createLocationFormSchema = z.object({
  name: z.string().min(1, "Campo não pode ser vazio"),
  description: z.string().min(1, "Campo não pode ser vazio"),
  images: z
    .array(
      z.object({
        alt: z.string().min(1, "Campo não pode ser vazio"),
        url: z.string().min(1, "Campo não pode ser vazio"),
      })
    )
    .min(1, "Pelo menos 1 imagem."),
});

export { createLocationFormSchema };
