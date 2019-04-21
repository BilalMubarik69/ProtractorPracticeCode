var Alert=require('D:/ProtractorCodePractice/Util/FunctionLibrary.js');
module.exports={
 
AddCustomerPage:{

    BankManager_Button:element(by.partialButtonText('Bank Manager')),
    AddCustomer_Tab:element(by.buttonText('Add Customer')),
    FirstName_TextField:element(by.model('fName')),
    LastName_TextField:element(by.model('lName')),
    PostalCode_TextField:element(by.model('postCd')),
    ProcessButton:element(by.className('btn btn-default'))
    
    

    },

    

  
    AddCustomer:function(Firstname,LastName,postalCode)  {

    var AddCustPage=this.AddCustomerPage;
    
    AddCustPage.BankManager_Button.click();
    
    AddCustPage.AddCustomer_Tab.click();
    AddCustPage.FirstName_TextField.sendKeys(Firstname);
    AddCustPage.LastName_TextField.sendKeys(LastName);
    AddCustPage.PostalCode_TextField.sendKeys(postalCode);
    AddCustPage.ProcessButton.click();
    Alert.HandlingAlertCustomerAccount();
  }
}
