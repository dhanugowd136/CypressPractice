const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    //defaultCommandTimeout: 20000,
    //pageLoadTimeout: 120000,
    //viewportWidth: 1920,
    //viewportHeight: 1080,
    "video": true,
    retries: {openMode:1, runMode:1}, //retries the test case if test case fail 
    env: {
      "username": "Admin",
      "password": "admin123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
