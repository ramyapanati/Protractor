var data = require('../Utility/withdraw.json');
var withdrawal = function(){
	var withdrawal = element(by.buttonText('withdrawl'));
	var amount = element(by.model('amount'));
	var Deposit = element(by.buttonText('Withdraw'));
	
	
this.enteramount = function(){
		
	amount.sendKeys(data.userData.amount);
		return this;
	}
	this.clickNext = function(){
		
		submit.click();
		return require('./TransactionPage.js');
	}
	module.export = new Withdrawal();