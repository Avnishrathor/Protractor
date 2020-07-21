describe('Protractor parameterization example ',function() { 

	var obj= require("./PageObject.js");
	var d= require("./MultipleDataSet.js");
	var using=require('jasmine-data-provider');

	beforeEach(function()
			{
		obj.getURL();
			});

	//using keyword to take the data set 
	//datas - stores actual data 
	//description stores sub objects name
	//for every iteration one data set is picked (from- MultipleDataSet file)

	using(d.Datadriven,function(datas,description)
			{
		//providing multiple data set with the name of data by using description
		it('Testing Calculator methods with multiple data set _'+description,function() {

			obj.firstInput.sendKeys(datas.firstinput);
			obj.secondInput.sendKeys(datas.secondinput);
			obj.goButton.click();
			
          
			element.all(by.repeater("result in memory")).each(function(item) {
				item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
					
					//Verifying the output using expect
					expect(text).toBe(datas.result);
				})

			})
		})

			});



	afterEach(function()
			{
		console.log("Test is completed");
			});


})
