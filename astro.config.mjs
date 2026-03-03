import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ⚠️ Replace with your actual GitHub Pages URL
  site: 'https://yourusername.github.io',

  integrations: [tailwind()],

  // Static output — required for GitHub Pages
  output: 'static',

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
