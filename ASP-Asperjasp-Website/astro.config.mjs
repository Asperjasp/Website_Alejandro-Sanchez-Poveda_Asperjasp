// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://alejandrosanchezpoveda.tech',
  adapter: node({
    mode: 'standalone'
  }),
  // Internationalization for language support
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
});