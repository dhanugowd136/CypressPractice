const cypress = require("cypress");
const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    //"baseUrl":"https://the-internet.herokuapp.com/",
    "baseUrl":"https://opensource-demo.orangehrmlive.com/",
    projectId: "7pttvv",
    //defaultCommandTimeout: 20000,
    //pageLoadTimeout: 120000,
    //viewportWidth: 1920,
    //viewportHeight: 1080,
    "video": true,
    //"videosFolder": "cypress/Dhanu",
   // retries: {openMode:1, runMode:1}, //retries the test case if test case fail 
    env: {
      "username": "Admin",
      "password": "admin123",
      "version": "",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});
