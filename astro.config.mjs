import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ output: 'static', site: 'https://realstev0.github.io', base: '/agentloadout', integrations: [sitemap()] });
