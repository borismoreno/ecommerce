// @ts-check
import awsAmplify from 'astro-aws-amplify';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: awsAmplify(),
  output: 'server',
  integrations: [tailwind()]
});