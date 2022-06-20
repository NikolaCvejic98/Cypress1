const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.vivifyscrum-stage.com',
    env: {
      VALID_USER_EMAIL: 'test1234@test.test',
      VALID_USER_PASSWORD: 'test1234'
    }
  },
});
