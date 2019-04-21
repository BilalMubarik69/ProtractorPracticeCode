var locators=require('D:/ProtractorCodePractice/POM/POM.js');
var con=require('D:/ProtractorCodePractice/TestData/constant.js');

describe('Login',function()
{
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
        browser.get(con.url);
       browser.driver.manage().window().maximize();
        
        
       
        //var width = 2200;
        //var height = 20000;
        //browser.driver.manage().window().setSize(width, height);
     
    });
    

    
    it('Enter ASI No',function()
    {
            
                locators.ASINO.sendKeys(con.UATASI); 
           
    
        });

       // locators.ASINO.sendKeys(con.UATASI);
     
    }); 
    
    it('Enter UserName',function()
    {
   locators.UserName.sendKeys(con.UATUser);
    });
    
    it('Enter Password',function()
    {
        locators.Password.sendKeys(con.UATPass);

       
    });

     it('Press the Login Button',function()
     {
        locators.LoginButton.click();

        
     });
     
      
      it('Validate if user logged into Application Successfully or not',function()
      {
        browser.sleep(10000); 
        browser.waitForAngularEnabled(true); 

        expect(locators.Insertion_Orders_Tab.isDisplayed()).toBe(true);

        console.log('Logged Into App Successfully');
      });
        


    