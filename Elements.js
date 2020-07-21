describe('Protractor first test ',function() {  


it('Open Angular js website',function() {


browser.get('http://juliemr.github.io/protractor-demo/');
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("8");
element(by.id("gobutton")).click().then(function() {
browser.sleep(4000)	;
});
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("11");
element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
	console.log(text);
})



})

 


//Each it block will be called as a spec



it('Skip the test case', function() {
	
	
    
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("9");
	element(by.model("second")).sendKeys("8");

	
		
	

})



})
