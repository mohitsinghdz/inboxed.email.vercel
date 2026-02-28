import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inboxed.email',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
