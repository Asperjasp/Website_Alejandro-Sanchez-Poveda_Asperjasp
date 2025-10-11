
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

 // Not used for now

const publications = defineCollection({ 
   loader: glob({ pattern: 'src/content/publications/**/*.md', base: "src/content/publications" }),
   schema: z.object({
       title: z.string().min(5).max(100),
       author: z.string().min(2).max(100),
       date: z.date(),
       content: z.string().min(10)
   })
 });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, publications };