var data = require(process.cwd()+'./src/Utility/multiFormData.json')
var AddCustomerPage = require(process.cwd()+'./src/pageRepository/AddCustomerPage.js')
var CustomersPage = require(process.cwd()+'./src/pageRepository/CustomersPage.js')
var OpenAccountPage = require(process.cwd()+'./src/pageRepository/OpenAccountPage.js')
describe('multiform e2e automation Testing',function(){
	it('e2e flow'function(){
		browser.get(data.url);
		AddCustomerPage.enterFName();
		AddCustomerPage.enterLName();
		AddCustomerPage.enterpostCode();
		AddCustomerPage.clickNext();
		var OpenAccountPage = AddCustomerPage.clickNext();
		openAccountPage.selectCustmorName();
		openAccountPage.selectCurrency();
		openAccountPage.clickNext();
		var CustomersPage = OpenAccountPage.clickNext();
		CustomersPage.entername();
		CustomersPage.clickNext();
	
	});

});