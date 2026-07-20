import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.prakunthaimassage.de',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) =>
        !page.includes('/admin') &&
        !page.includes('/404'),
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
  },
});
