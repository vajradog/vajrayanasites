import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vajradog.github.io',
  base: '/vajrayanasites/',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  output: 'static',
  build: {
    assets: '_assets'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
