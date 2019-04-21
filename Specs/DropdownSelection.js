


describe('Dropdown Selection Different Ways',function()
{
    beforeAll(function(){
       
        browser.ignoreSynchronization=true;
        browser.get('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');
        
    });
    
    
    it('Select by Value',function()
    {
      element(by.xpath('//select[contains(@id,"first")]')).$('[value="Yahoo"]').click();
      element(by.xpath('//select[contains(@id,"animals")]')).element(by.cssContainingText('option', 'Big Baby Cat')).click();
      element(by.xpath('//select[contains(@id,"second")]')).$('[value="donut"]').click();
      browser.sleep(10000);
       
      

      
     
    });

});  

