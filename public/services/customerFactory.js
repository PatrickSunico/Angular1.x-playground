(function(){

  var customerFactory = function($http) {
    var factory = {};

    factory.getCustomers = function(){
      return $http.get('/customers');
    }

    //Change this line
    //for Orders Ctrl
    // =======================================================
    factory.getCustomer = function(customerId) {
      //$http.get Promise
      return $http.get('/customers/' + customerId);
    };
    // =======================================================

    return factory; // returns the custStore object literal for when the service is injected to the controllers they can get values from this factory.
  }; // <- end factory function

  // minification
  customerFactory.$inject = ['$http'];

  // 'customerService' = the name of the service that we will inject to our ctrls.
  // customerService = the name of the function declared in this service.
  angular.module('myApp').service('customerFactory', customerFactory);
})();
