// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Noto Sans',
      cssVariable: '--font-noto-sans',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      // No generic fallback here, otherwise the system sans-serif would render Thai glyphs before Noto Sans Thai gets a chance
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Thai',
      cssVariable: '--font-noto-sans-thai',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['thai'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Serif',
      cssVariable: '--font-noto-serif',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: [],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
