(function(){
  angular.module('myApp')
        //$routeParams service from ngRoute
        .controller('ordersController',['$scope','$routeParams','customerFactory', function($scope, $routeParams, customerFactory){

          //Change this line
          // =======================================================
          $scope.customer;

          (function init(){
            $scope.customer = customerFactory.getCustomer(customerId);
          })();
          // =======================================================


          // $routeParams.customerId is from the .config file
          //Whatever the value of $routeParams.customerId is to be stored in the  customerId variable
          var customerId = $routeParams.customerId;

          $scope.orders;

        }]);
})();
