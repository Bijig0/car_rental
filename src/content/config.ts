import { defineCollection, z } from 'astro:content';

const inventorySchema = z.object({
  metadata: z.object({
    rank: z.number(),
  }),
  data: z.object({
    transmission: z.enum(["auto", "manual"]),
    year: z.number(),
    name: z.string(),
    shortName: z.string().optional(),
    drive: z.string(),
    seats: z.number(),
    doors: z.number(),
    fuelUsage: z.string().optional(),
    shortFuelType: z.string().optional(),
    fuelType: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    safety: z.object({
      childSafetySeat: z.boolean(),
      pricePerDay: z.string().optional(),
    }).optional(),
    guidelines: z.array(z.object({ message: z.string() })).optional(),
    pricePerDay: z.number().transform((price) => `$${price}`),
    cc: z.number(),
    heroImageUrl: z.string().optional(),
    cardImageUrl: z.string().optional(),
    listingImages: z.object({
      mainImage: z.string(),
      subImagesCount: z.number()
    })
  }),
});


const inventoryCollection = defineCollection({
  type: 'data',
  schema: inventorySchema
});


export const collections = { inventory: inventoryCollection };
