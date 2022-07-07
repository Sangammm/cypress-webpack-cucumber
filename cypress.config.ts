import { defineConfig } from 'cypress'
import webpackPreprocessor from '@cypress/webpack-preprocessor'

export default defineConfig({
	e2e: {
		baseUrl: 'https://www.google.com',
		fileServerFolder: 'cypress/integration',
		specPattern: '**/*.{feature,features}',
		setupNodeEvents(on, config) {
      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: require('./cypress/webpack.config.js'),
        watchOptions: {},
      }
			on('file:preprocessor', webpackPreprocessor(options))
      on('before:run', ()=>{
        console.log("A++++++++++")
      })
		},
	},
})
