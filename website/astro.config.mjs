// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://minnerom.com',
  redirects: {
    '/photos': '/ru/photos',
    '/photos/morning-light': '/ru/photos/morning-light',
    '/blog': '/ru/blog',
    '/blog/start-of-project': '/ru/blog/start-of-project',
    '/products': '/ru/products',
    '/products/print-a3-demo': '/ru/products/print-a3',
    '/contacts': '/ru/contacts',
    '/privacy': '/ru/privacy',
    '/terms': '/ru/terms',
  },
});
