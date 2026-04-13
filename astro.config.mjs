import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://wolff-digital.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
