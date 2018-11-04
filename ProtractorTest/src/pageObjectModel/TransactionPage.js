
var OpenAccount = function(){
	var transaction = element(by.buttonText('Transactions'));
	var back = element(by.buttonText('Back'));
	var deposit = element(by.buttonText('deposit'));
	var reset = element(by.buttonText('Reset'));
	var logout = element(by.buttonText('Logout'));
	var selectCustmorName = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};
this.clickNextTransaction = function(){
		
		submit.click();
		return this;
	}
this.clickNextBack = function(){
	
	submit.click();
	return this;
}

	this.clickNext = function(){
		
		submit.click();
		return require('./Deposit.js');
	}
	this.clickNextReset = function(){
		
		submit.click();
		return this;
	}
this.clickNextlogin = function(){
		
		submit.click();
		return require('./OpenAccountPage.js');
	}
this.clickNextLogout = function(){
	
	submit.click();
	return require('./AddCustomerPage.js')
}
	
	module.export = new TransactionPage();