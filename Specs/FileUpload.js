describe('Windows Tab Switching',function()
{
    beforeAll(function(){
       
        browser.waitForAngularEnabled(false);
        browser.get('https://skpatro.github.io/demo/signup/');
        
    });
    
    
    it('Press the Bank Manager and Add a new Customer details',function()
    {
        element(by.xpath('//input[contains(@name,"datafile")]')).sendKeys('C:\\logo.jpg');

        browser.sleep(10000);
    });

});