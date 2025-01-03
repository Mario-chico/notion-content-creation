// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      NOTION_API_TOKEN:envField.string ({
       access: 'secret',
       context: 'server', 
      }),
      NOTION_DATABASE_ID:envField.string ({
       access: 'public',
       context: 'client', 
      }),
    },
  },
});
