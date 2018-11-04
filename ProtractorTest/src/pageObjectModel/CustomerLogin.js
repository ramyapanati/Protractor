var data = require('../Utility/.login.json');
var Login = function(){
	element(by.buttonText('Customer Login')).click();
	var customerName = element(by.model('custId'));
	var login = element(by.buttonText('Add Customer'));
	var currencytype = element(by.model('accountNo'));
	var selectCustmorName = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};
	var selectCurrencyType = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};
	this.Login = function(){
		
		login.click();
		return this;
	}