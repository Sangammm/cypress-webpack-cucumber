const webpack = require("@cypress/webpack-preprocessor");
const cypress = require('cypress')
module.exports = on => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", webpack(options));
  on("before:run", ()=>{
    cy.visit("https://www.google.com")
  });

};
