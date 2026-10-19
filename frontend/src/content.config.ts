import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog articles live as Markdown in src/content/blog/<slug>.md.
// `faq` is rendered visibly under the article AND emitted as FAQPage schema.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(70).max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
