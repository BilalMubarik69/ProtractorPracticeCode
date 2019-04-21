var Alert=require('D:/ProtractorCodePractice/Util/FunctionLibrary.js');
module.exports={

OpenAccountPage:{

    OpenAccountTab:element(by.buttonText('Open Account')),
    Customer_Dropdown:element(by.model('custId')),
    Currency_Dropdown:element(by.model('currency')),
    OpenAccount_ProcessButton:element(by.buttonText('Process')),
    Select_Currency:element(by.model('currency')).$('[value="Pound"]'),
    
   
},


OpenAccount:function(){

    var OpenAcc=this.OpenAccountPage;
    OpenAcc.OpenAccountTab.click();
    let Customers=OpenAcc.Customer_Dropdown;
    let options=Customers.all(by.tagName('option'));
    options.then(function(items)
        {
            console.log('DropDown Options Size:'+items.length);
             
            for(let i=0 ; i<items.length;i++)
            {
                items[i].getText().then(function(CustomerNameText)
                     {  
                        console.log('DropDown Options are:'+CustomerNameText);

                        if(CustomerNameText=='Tom Jones')
                        {
                            items[i].click();
                            
                        }
                })
            }
       
          
        })

    
            //Now change the value with another way of using
            element(by.model('custId')).element(by.cssContainingText('option', 'Tom Jones')).click();
        
        
            OpenAcc.Select_Currency.click();
     
         //Press the Process Button
     OpenAcc.OpenAccount_ProcessButton.click();
      
      Alert.HandlingAlertOpenAccount();

      
      

       
       
        }


    }


