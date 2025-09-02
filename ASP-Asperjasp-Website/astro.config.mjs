// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Configuración para producción
  site: 'https://alejandrosanchezpoveda.tech',
  // Adaptador para Vercel (modo serverless para mejor soporte de rutas dinámicas)
  adapter: vercel({
    analytics: true, // Habilitamos analytics de Vercel
  }),
  // Internationalization for language support
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  // Aseguramos que todas las rutas estén disponibles
  build: {
    format: 'directory'
  }
});