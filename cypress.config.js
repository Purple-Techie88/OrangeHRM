const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gfcyrm",
  chromeWebSecurity: false,
  env: {
    CYPRESS_LOGIN_USER: CredentialsContainer('userNameHRM'),
    CYPRESS_LOGIN_PASSWORD: CredentialsContainer('passwordHRM'),
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*_spec.js",
    scrollBehavior: "center",
  },
});
