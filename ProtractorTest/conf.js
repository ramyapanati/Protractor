var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
  seleniumAddress:'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 // specs: ['./src/DataDrivenE2E/E2EFlow.js','./src/DataDrivenE2E/Customer.js'],
	 
	 onPrepare: function(){
		 
		 jasmine.getEnv().addReporter(
		 new Jasmine2HtmlReporter({		 
		 savePath: 'target/screenshots',
		 takeScreenshots: true
		// takeScreenshotsOnlyOnFailures:true
		 
	 })
		); 
	 },


  suites: {
	  
	  Customer:['./src/DataDrivenE2E/Customer.js'],
      E2EFlow:['./src/DataDrivenE2E/E2EFlow.js']
	  
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
