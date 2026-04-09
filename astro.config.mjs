import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://wolffdigital.com', // update before launch
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
