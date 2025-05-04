import { z } from 'zod';

export const createProductImageSchema = z.object({
  productId: z.number().int().positive(),
  path: z.string().min(1, 'Path is required'),
});
