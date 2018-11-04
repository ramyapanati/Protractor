var data = require('../Utility/.Account.json');
var OpenAccount = function(){
	var element(by.buttonText('Open Account')).click();
	var customerName = element(by.model('custId'));
	var Currency = element(by.model('currency'));
	var submit = element(by.buttonText('Process'));
	
	var selectCustmorName = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};
	var selectCurrency = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};

this.clickNext = function(){
	
	submit.click();
	return this;
}
}