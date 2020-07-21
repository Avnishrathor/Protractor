describe('Protractor baby steps',function() {  


it('Open Angular js website',function() {

//handle Asynchronus problem with promise 
browser.get("https://angularjs.org");
browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
	browser.sleep(9000);
	console.log("LAst step");	
});





})

 


//Each it block will be called as a spec



it('close browswer', function() {



// code to close browser
})



})
