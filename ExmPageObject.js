describe('Protractor Page object machenism example ',function() { 
	
	var obj= require("./PageObject.js");
	var d=require("./data.js");
	
	beforeEach(function()
			{
				obj.getURL();
			});
	
	function calculation(a,b,c)
	{
		obj.firstInput.sendKeys(a);
		obj.secondInput.sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values) {
				if(values==c)
					{
					
					item.click();
					}
				
			})
			
	})
	obj.goButton.click();
	}

it('Data Drive',function() {
	
	
	calculation(5,8,"MULTIPLICATION");
	calculation(4,9,"ADDITION");
	
	calculation(10,8,"SUBTRACTION");


	
	
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
