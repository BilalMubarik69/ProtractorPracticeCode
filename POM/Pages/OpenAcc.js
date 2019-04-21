var OpenAccount=function(){

    this.OpenAccountTab=function(){
        element(by.buttonText('Open Account')).click();
    };

    this.CustomerDropdown=function(){
        element(by.model('custId')).element(by.cssContainingText('option', 'Tom Jones')).click();
    };
   
    this.OpenAccount_ProcessButton=function(){
        element(by.buttonText('Process')).click();
    };

    this.SelectCurrency=function(){
        element(by.model('currency')).$('[value="Pound"]').click();
    };
};
module.exports=new OpenAccount();