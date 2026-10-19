// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // Keep generated CSS compatible with iOS Safari 15.4 and newer.
      cssTarget: 'safari15.4',
    },
  },
});
