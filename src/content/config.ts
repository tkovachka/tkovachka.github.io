import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['ongoing', 'completed', 'archived']),
    startDate: z.string(), // YYYY-MM
    endDate: z.string().optional(),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    thumbnail: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    agendaLabel: z.string(),
    sectionTitle: z.string(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { projects, about };
