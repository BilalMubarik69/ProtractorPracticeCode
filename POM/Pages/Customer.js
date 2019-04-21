var Cust_Details=function(){

  this.CustomersTab=function(){

    element(by.xpath('//button[contains(@ng-click,"showCust")]')).click();
  };

  this.DeleteCustomer=function(){
   
    let rows=element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    rows.each(function (row){
       
     let cells=row.$$('td');
     cells.get(0).getText().then(function (txt){
        if(txt=='Tom')
        {
            cells.get(4).$('button').click();
            
        }
     })
    })
 
  };



};

module.exports=new Cust_Details();