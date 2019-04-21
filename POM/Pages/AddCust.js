
var AddCust=function(){
    this.BankManager_Button=element(by.partialButtonText('Bank Manager'));
    this.AddCustomer_Tab=element(by.buttonText('Add Customer'));
    this.FirstName=element(by.model('fName'));
    this.LastName=element(by.model('lName'));
    this.postalAddress=element(by.model('postCd'));
    this.processButton=element(by.className('btn btn-default'));

    
};

module.exports=new AddCust();