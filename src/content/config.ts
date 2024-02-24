import { defineCollection, z } from 'astro:content';

const inventorySchema = z.object({
  metadata: z.object({
    rank: z.number(),
  }),
    data: z.object({
      year: z.number(),
    name: z.string(),
    drive: z.string(),
    seats: z.number(),
    doors: z.number(),
    fuelUsage: z.string(),
    fuelType: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    safety: z.object({
      childSafetySeat: z.boolean(),
      pricePerDay: z.string().optional(),
    }),
    pricePerDay: z.number().transform((price) => `$${price}`)
  }),
});


const inventoryCollection = defineCollection({
  type: 'data',
  schema: inventorySchema
});

export const collections = { inventory: inventoryCollection };
