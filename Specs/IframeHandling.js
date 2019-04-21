describe('Switching Iframes',function()
{
    beforeAll(function(){
       
        browser.waitForAngularEnabled(false);
        browser.get('https://skpatro.github.io/demo/iframes/');
        
    });
    
    
    it('Press the Bank Manager and Add a new Customer details',function()
    {
        var driver = browser.driver;
        var loc = by.tagName('iframe');
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);
        
    driver.findElement(protractor.By.xpath('//a[contains(text(),"Category1")]')).click();

    let windowHandles=browser.getAllWindowHandles();
    let parenthandle,childhandles;

    windowHandles.then(function(handles){
      parenthandle=handles[0];
      childhandles=handles[1];

      browser.switchTo().window(childhandles).then(function(){
          console.log('Total Handles:'+handles.length);

          browser.getTitle().then(function(txt){
              console.log("Child Window Title is"+txt);
             
               browser.waitForAngularEnabled(false);
              // element(by.xpath('//*[@id="menu-headermenu-1"]/li[2]/a')).click();
               browser.actions().mouseMove(element(by.xpath('//*[@id="menu-headermenu-1"]/li[2]/a'))).perform();
               browser.sleep(10000);
              browser.close();
          });
            browser.switchTo().window(parenthandle).then(function(){

                browser.getTitle().then(function(txt){

                    console.log("Parent Window Title is:"+txt);
                });
            
                browser.switchTo().defaultContent();
                //browser.waitForAngular();
               


    });
    
});

    });

});

});