
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config=
{
		// The address of a running selenium server.
		//seleniumAddress:'http://localhost:4444/wd/hub',
		specs:['MultipleDataSet'],

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},


		onPrepare: function()

		{
			browser.driver.manage().window().maximize();

			//to generate report and capture the screenshots

			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		},


		suites:
		{
			smoke:
				['ChainLocator.js','DropDown.js'],
			regression:
					['Elements.js']



		},


		// Options to be passed to Jasmine-node.
		jasmineNodeOpts: {
			showColors: true, // Use colors in the command line report.

		}


};