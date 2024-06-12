import { z } from "zod";

export const zodCategory = z.object({
  id: z.number().int().min(1).optional(),
  name: z.string().min(4).trim(),
});
