import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess()
    })
  ],
  build: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@photos': resolve(__dirname, 'photos')
    }
  }
});