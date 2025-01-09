import { defineCollection, z } from "astro:content";
// z is a schema validation library (zod)

const chapters = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    subtitle: z.string(),
    url: z.string(),
    nextUrl: z.string(),
    date: z.date(),
  }),
});

export const collections = { chapters };
