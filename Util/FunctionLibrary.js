module.exports={

HandlingAlertCustomerAccount:function(){

    let alert=browser.switchTo().alert();
    let alerttxt=alert.getText();
    
    //Managed Promise to print value on console
    alerttxt.then(function(txt)
    {
        console.log('The Alert Text is:'+txt);
    });

    expect(alerttxt).toContain('Customer added successfully');
    
    alert.accept();

},
HandlingAlertOpenAccount:function(){

    let alert=browser.switchTo().alert();
    let alerttxt=alert.getText();
    
    //Managed Promise to print value on console
    alerttxt.then(function(txt)
    {
        console.log('The Alert Text is:'+txt);
    });

    expect(alerttxt).toContain('Account created successfully');
    
    alert.accept();

}


/*it('Open Account',function(){
      openAcc.OpenAccount();
   
    });*/
       
       

        
     
      //Now Select the Currency
     /* let Currency=element(by.model('currency'));
      let CurrencyOptions=Currency.all(by.tagName('option'));

      CurrencyOptions.then(function(CurrencyItems)
      {
          console.log('Currency Dropdown Size is:'+CurrencyItems.length);
          for(let i=0; i<CurrencyItems.length;i++)
          {
              CurrencyItems[i].getText().then(function(CurrencyValues)
              {
                console.log('The Option for Currency are'+CurrencyValues)

                if(CurrencyValues=='Dollar')
                {
                    CurrencyItems[i].click();
                }
              })
          }

      })
   
     //Now change the value with another way of using
     element(by.model('currency')).$('[value="Pound"]').click();

      //Press the Process Button
   element(by.buttonText('Process')).click();

   let EC1=protractor.ExpectedConditions;
   browser.wait(EC1.alertIsPresent,10000,'Alert Not Found');
   
   let alert1=browser.switchTo().alert();
   alert1.accept();
   
   //Move to Customers Tab
   element(by.xpath('//button[contains(@ng-click,"showCust")]')).click();

   let rows=element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
   rows.each(function (row){
      
    let cells=row.$$('td');
    cells.get(0).getText().then(function (txt){
       if(txt=='Tom')
       {
           cells.get(4).$('button').click();
           
       }
    })
   })*/
//});
        
      



}