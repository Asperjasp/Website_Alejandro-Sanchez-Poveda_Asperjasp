import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
  // No importar getCollection del asstro/virtual-moduleg

// Why is this function asyncronous ?

export async function GET(context) { 

  const blog = await getCollection('blog');

  const items = [...blog].map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/blog/${post.slug}/`,
  }));


  return rss({
    title: 'Alejandro Sánchez - Asperjasp',
    description: 'Music Generation and NLP in Japanese' ,
    site: context.site,

    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    // (opcional) inyecta xml personalizado
    customData: `<language>es</language>`,
  });

}