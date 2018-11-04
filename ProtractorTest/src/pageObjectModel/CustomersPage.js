var data = require('../Utility/.deleteCust.json');
var OpenAccount = function(){
	var name = element(by.buttonText('Customers')).click();
	var search = element(by.model('searchCustomer'));
	var select = element(by.binding("Ramya")).getText().then(function(text){
		  console.log(text);
		  
	  });
	
this.entername = function(){
		
		name.sendKeys(data.userData.name);
		return this;
	}
this.clickNext = function(){
	
	clickNext.click();
	return this;
}
}