//var addCust=require('D:/ProtractorCodePractice/POM/Pages/AddCustomer.js');
//var openAcc=require('D:/ProtractorCodePractice/POM/Pages/OpenAccount.js')
var AddCust=require('../POM/Pages/test.js')
var OpenAccount=require('../POM/Pages/OpenAcc.js')
var Cust=require('../POM/Pages/Customer.js');
var Alert=require('D:/ProtractorCodePractice/Util/FunctionLibrary.js');

describe('Bank Manager Account Creation and Deletion',function()
{
    beforeAll(function(){
       
       
       
       // browser.ignoreSynchronization=false;

        browser.get('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    
        browser.getCurrentUrl().then(function (u){

            console.log("Url is:"+u)

            expect(u).toEqual('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        });

        browser.getTitle().then(function (title){
               
            console.log("Title of Page:"+title);

            expect(title).toEqual('XYZ Bank');
        })
    
    });
    
    
    it('Add Customers',function()
    {
       AddCust.AddCustomer("Tom","Jones","223344");
    
    });

    it('Open Account',function(){
            OpenAccount.OpenAccountTab();
            OpenAccount.CustomerDropdown();
            OpenAccount.SelectCurrency();
            OpenAccount.OpenAccount_ProcessButton();  
            Alert.HandlingAlertOpenAccount();
        
        
    });

    it('Customers',function(){
     Cust.CustomersTab();
     Cust.DeleteCustomer();
     

});



});   