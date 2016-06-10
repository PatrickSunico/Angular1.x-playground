(function(){
  angular.module('myApp')
        //$routeParams service from ngRoute
        .controller('ordersController',['$scope','$log','$routeParams','customerFactory', function($scope, $log, $routeParams, customerFactory){

          //Change this line
          // =======================================================
          $scope.customer;
          // $routeParams.customerId is from the .config file
          //Whatever the value of $routeParams.customerId is to be stored in the  customerId variable
          var customerId = $routeParams.customerId;

          (function init(){
            customerFactory.getCustomer(customerId)
                          .success(function(customer){
                            $scope.customer = customer; // give value from the ajax call
                          }).error(function(data,status,headers,config){
                              // console.log(data);
                              $log.log(data.error);

                          });
          })();
          // =======================================================



          $scope.orders;

        }]);
})();
