describe('Protractor baby steps',function() {  


it('Open Angular js website',function() {
	
//for non angular application need to add below code else we will get "Could not find Angular on page http://google.com/"
browser.waitForAngularEnabled(false);
browser.get("http://google.com");

})

 


//Each it block will be called as a spec



it('close browswer', function() {



// code to close browser
})



})
