import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    baseURL: "http://localhost:3000",
  },
  component: {
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
