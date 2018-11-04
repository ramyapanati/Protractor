var data = require(process.cwd()+'./src/Utility/multiFormData1.json')
var deposit = require(process.cwd()+'./src/pageRepository/Deposit.js')
var transaction = require(process.cwd()+'./src/pageRepository/TransactionPage.js')
var withdraw = require(process.cwd()+'./src/pageRepository/Withdrawal.js')
describe('multiform e2e automation Testing',function(){
	it('e2e flow'function(){
		browser.get(data.url);
		TransactionPage.clickNextTransaction();
		TransactionPage.clickNextBack();
		var DepositPage = transaction.clickNext();
		Deposit.enteramount();
		var transactionPage = deposit.clickNext();
		TransactionPage.clickNext();
		var withdrawPage = withdraw.clickNext();
		Withdrawal.enteramount();
		Withdrawal.clickNext();
		var transactionPage = withdraw.clickNext();
		TransactionPage.clickNextReset();
		TransactionPage.clickNextlogin();
		TransactionPage.clickNextLogout();
		var Deposit = transaction.clickNext();
		deposit.clickNext();
	
	});

});