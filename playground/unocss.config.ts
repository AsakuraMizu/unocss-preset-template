import { defineConfig } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import { presetStarter } from '../src';

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetStarter()],
});
