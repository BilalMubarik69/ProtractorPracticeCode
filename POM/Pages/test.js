var Cust_Add=require('../Pages/AddCust.js');
var alert=require('D:/ProtractorCodePractice/Util/FunctionLibrary.js')
module.exports={

    AddCustomer:function(firstName,lastName,PostAdd){

    Cust_Add.BankManager_Button.click();
    Cust_Add.AddCustomer_Tab.click();
    Cust_Add.FirstName.sendKeys(firstName);
    Cust_Add.LastName.sendKeys(lastName);
    Cust_Add.postalAddress.sendKeys(PostAdd);
    Cust_Add.processButton.click();
    alert.HandlingAlertCustomerAccount();
    
    
    }


}