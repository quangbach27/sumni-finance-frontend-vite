import { defineConfig } from 'orval';

export default defineConfig({
  treasury: {
    input: './src/api/treasury/openapi.yaml',
    output: {
      mode: 'tags-split', // split files by OpenAPI tags
      target: './src/api/treasury/generated',
      schemas: './src/api/treasury/generated/schemas',
      client: 'react-query',
      httpClient: 'fetch',
      override: {
        mutator: {
          path: './src/api/fetch-instance.ts',
          name: 'fetchInstance',
        },
      },
    },
  },
});
