(function(){

  var customerFactory = function() {
    var customers = [{
           id: 1,
           name: "Jamal1",
           city: 'Phoenix',
           orderTotal: '100',
           joined: '2000-12-02',
           orders: [{
             id: 1,
             product: 'Shoes',
             total: '100'
           }]

       }, {
           id: 2,
           name: "Tyrone23",
           city: 'Atlanta',
           orderTotal: '15',
           joined: '1992-10-09',
           orders: [{
             id: 2,
             product: 'Lube',
             total: '15'
           }]
       }, {
           id: 3,
           name: "Gucci Mane01",
           city: 'Atlanta',
           orderTotal: '24',
           joined: '2016-09-01',
           orders: [{
             id: 3,
             product: 'Waifu Pillow',
             total: '24'
           }]
    }]; // <- end customer object

    var factory = {};

    factory.getCustomers = function(){
      return customers; //return customers when function is called
    }

    //Change this line
    //for Orders Ctrl
    // =======================================================
    factory.getCustomer = function(customerId) {
      var customerRef;
      customers.forEach(function(index){
        if(index.id === parseInt(1)) {
          customerRef = index;
          // return index;
        }
      });
      return customerRef;
    };
    // =======================================================


    return factory; // returns the custStore object literal for when the service is injected to the controllers they can get values from this factory.
  }; // <- end factory function


  // 'customerService' = the name of the service that we will inject to our ctrls.
  // customerService = the name of the function declared in this service.
  angular.module('myApp').service('customerFactory', customerFactory);
})();
