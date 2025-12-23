
// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';


// 3. Define your collection(s)
const blog = defineCollection({ 
   loader: glob({ pattern: '**/*.md', base: "src/content/blog" }),
   schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    thumbnail: z.object({
        url : z.string(),
        alt: z.string().min(2).max(100)
    }),
    summary: z.string().min(10).max(200),
    tags: z.array(z.string()),
   })
 });

 // Projects collection
 const Projects = defineCollection({ 
   loader: glob({ pattern: '**/*.md', base: "src/content/Projects" }),
   schema: z.object({
       title: z.string().min(5).max(100),
       description: z.string().min(10).max(300),
       thumbnail: z.object({
           url: z.string(),
           alt: z.string().min(2).max(100)
       }),
       technologies: z.array(z.string()),
       links: z.object({
           github: z.string().url().optional(),
           demo: z.string().url().optional(),
           website: z.string().url().optional(),
       }).optional(),
       startDate: z.coerce.date(),
       endDate: z.coerce.date().optional(),
       featured: z.boolean().default(false),
       status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
   })
 });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, Projects };