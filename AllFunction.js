describe('Protractor All and function example ',function() { 
	
	function Add(a,b)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
		
	}
	

	function Multiply(a,b)
	{
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("8");
		//Chain locator (select the 4th option(multiply)
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.id("gobutton")).click();
		
	}

it('Open Angular js website',function() {

	browser.get('http://juliemr.github.io/protractor-demo/');
	
	Add(4,9);
	Multiply(5,8);

	

//All [return an array of elements] To get count
	element.all(by.repeater("result in memory")).count().then(function(cnt) {
		console.log("No Of row is =="+cnt);
	});
	
	// Getting output for all actions 
	element.all(by.repeater("result in memory")).each(function(item) {
		item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("output==" +text);
		})
		
	})
	
	
	
	
	
	
	
	})
	

	


})

 

