var data = require('../Utility/.AddCust.json');
var AddCustomer = function(){
	element(by.buttonText('Bank Manager')).click();
	element(by.buttonText('Add Customer')).click();
	var fname = element(by.model('fName'));
	var lname = element(by.model('lName'));
	var postCode = element(by.model('postCd'));
	var submit = element(by.buttonText('Add Customer'));
	
	this.enterFName = function(){
		
		fname.sendKeys(data.userData.fName);
		return this;
	}
this.enterLName = function(){
		
		lname.sendKeys(data.userData.lName);
		return this;
	}
this.enterpostCode = function(){
	
	postCode.sendKeys(data.userData.postCode);
	return this;
}
this.clickNext = function(){
	
	submit.click();
	return this;
}
}