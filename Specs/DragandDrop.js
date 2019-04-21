describe('Windows Tab Switching',function()
{
    beforeAll(function(){
       
        browser.waitForAngularEnabled(false);
        browser.get('https://skpatro.github.io/demo/dragndrop/');
        
    });
    
    
    it('Press the Bank Manager and Add a new Customer details',function()
    {
       let drag=element(by.xpath('//p[contains(text(),"Drag me to my target")]'));
       let drop=element(by.id('droppable'));

       browser.actions().dragAndDrop(drag,drop).mouseUp().perform();

       browser.sleep(10000);
    });   

});