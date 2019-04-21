describe('Bank Manager Login',function()
{
    beforeAll(function(){
        
        browser.waitForAngularEnabled(false);
        browser.get('http://mmubarik:bilal.122@uat-mms2.asinetwork.local/');
    });
    
    
    it('MMS Title Verification',function()
    {
       browser.getTitle().then(function(title){
           console.log('Title:'+title);

           expect(browser.driver.getTitle()).toEqual('- MMS2');

           console.log("MMS title Displayed Successfully");
           
            expect(browser.driver.getPageSource()).toContain('Dashboard');

            console.log("Dashboard  Displayed on Page Successfully");
           
        })
       
       
        });
       
    
    });

