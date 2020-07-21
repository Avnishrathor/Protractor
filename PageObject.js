function calculator()
{

	this.firstInput= element(by.model("first"));
	this.secondInput=element(by.model("second"));
	this.goButton=element(by.id("gobutton"));


this.getURL=function()
{
	browser.get('http://juliemr.github.io/protractor-demo/');
};

};
module.exports=new calculator();