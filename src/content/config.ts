import { defineCollection, z } from 'astro:content';

const sitesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    titleTibetan: z.string().optional(),
    titleWylie: z.string().optional(),
    region: z.enum(['tibet', 'nepal', 'india', 'bhutan', 'sikkim']),
    subregion: z.string().optional(),
    description: z.string(),
    // Use Astro's image() for optimized local images
    image: image().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    elevation: z.string().optional(),
    significance: z.number().min(1).max(5).default(3),
    founded: z.string().optional(),
    founder: z.string().optional(),
    lineage: z.array(z.string()).optional(),
    associatedFigures: z.array(z.string()).optional(),
    associatedDeities: z.array(z.string()).optional(),
    relics: z.array(z.string()).optional(),
    festivals: z.array(z.object({
      name: z.string(),
      timing: z.string(),
      description: z.string().optional(),
    })).optional(),
    practicesRecommended: z.array(z.string()).optional(),
    accessInfo: z.object({
      permitRequired: z.boolean().optional(),
      bestSeason: z.string().optional(),
      difficulty: z.enum(['easy', 'moderate', 'challenging', 'difficult']).optional(),
      nearestTown: z.string().optional(),
    }).optional(),
    relatedSites: z.array(z.string()).optional(),
    publishedAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  sites: sitesCollection,
};
