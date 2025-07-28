import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1366,
    viewportHeight: 768,
    specPattern: ['cypress/e2e/**/*.cy.ts', 'cypress/api/**/*.cy.ts'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
