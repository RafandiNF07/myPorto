import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    githubLink: z.string().optional(),
    liveLink: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
