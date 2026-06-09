// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
    loader: glob({ base: './src/content/projects/', pattern: '*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        category: z.string(),
        slug: z.string(),
        featured: z.boolean(),
        github: z.url().optional(),
        demo: z.url().optional(),
        paper: z.url().optional(),
    }),
});

// 4. Define a `loader` and `schema` for each collection
const publications = defineCollection({
    loader: file('./src/content/publications.json'),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        year: z.number(),
        featured: z.boolean(),
        type: z.string(),
        bibtex: z.string(),
        pdf: z.url().optional(),
        doi: z.string().optional(),
        abstract: z.string().optional(),
    }),
});


// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects, publications };