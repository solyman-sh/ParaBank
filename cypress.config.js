
const { defineConfig } = require("cypress");
require("dotenv").config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL, 
    setupNodeEvents(on, config) {
      
      config.env.username = process.env.USER_NAME;
      config.env.password = process.env.PASSWORD;

      return config;
    },
  },
});
