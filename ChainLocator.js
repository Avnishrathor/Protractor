describe('Protractor chain locator example ',function() {  


it('Open Angular js website',function() {

	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("3");
	element(by.model("second")).sendKeys("8");
	//Chain locator
	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
	element(by.id("gobutton")).click();

//Chain locator 
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
		console.log("output==" +text);
	})


})

 


//Each it block will be called as a spec



it('close browswer', function() {



// code to close browser
})



})
