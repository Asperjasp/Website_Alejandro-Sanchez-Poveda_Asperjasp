import rss from '@astrojs/rss';
import { getCollection } from 'astro/virtual-modules/live-config.js';

// Why is this function asyncronous ?

export async function GET(context) { 

  const blog = await getCollection('blog');
  return rss({
    // `<title>` campo en el xml generado
    title: 'Blog de Buzz',
    // `<description>` campo en el xml generado
    description: 'Guía de un humilde astronauta a las estrellas',
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    // (opcional) inyecta xml personalizado
    customData: `<language>es</language>`,
  });
}