var data = require('../Utility/deposit.json');
var deposit = function(){
	
	var deposit = element(by.buttonText('deposit'));
	var amount = element(by.model('amount'));
	var Deposit = element(by.buttonText('Deposit'));
	var selectCustmorName = function ( element, optionNum ) {
		  if (optionNum){
		    var options = element.all(by.tagName('value'))   
		      .then(function(options){
		        options[optionNum].click();
		      });
		  }
	};
	this.enteramount = function(){
		
		amount.sendKeys(data.amount);
			return this;
		}
		this.clickNext = function(){
			
			submit.click();
			return require('./TransactionPage.js');
		}
		module.exports = new Deposit();