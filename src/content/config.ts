import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    author: z.string().default('Mohit Singh'),
    canonical: z.string(),
    category: z.string().optional(),
    schema: z.record(z.unknown()).optional(),
  }),
});

export const collections = { blog };
