describe('Protractor DropDown example ',function() { 
	
	function calculation(a,b,c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values) {
				if(values==c)
					{
					
					item.click();
					}
				
			})
			
	})
	element(by.id("gobutton")).click();
	}

it('Open Angular js website',function() {

	browser.get('http://juliemr.github.io/protractor-demo/');
	calculation(5,8,"MULTIPLICATION");
	calculation(4,9,"ADDITION");
	
	calculation(10,8,"SUBTRACTION");

	element.all(by.repeater("result in memory")).each(function(item) {
		item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("output==" +text);
		})
		
	})
})

})
