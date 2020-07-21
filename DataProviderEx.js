describe('Protractor Page object machenism example ',function() { 
	
	var obj= require("./PageObject.js");
	var d= require("./Data.js")
	
	beforeEach(function()
			{
				obj.getURL();
			});
	

it('Testing Calculator methods',function() {
	
	obj.firstInput.sendKeys(d.datadrive.firstinput);
	obj.secondInput.sendKeys(d.datadrive.secondinput);
	obj.goButton.click();
	

	element.all(by.repeater("result in memory")).each(function(item) {
		item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("output==" +text);
		})
		
	})
})

afterEach(function()
		{
			console.log("Test is completed");
		});


})
