// Option 2 prepend Model itself and append controller afterwards
(function() {

    angular.module('myApp')
        .controller('mainController', ['$scope','$log', 'customerFactory','appSettings', function($scope, $log, customerFactory ,appSettings) {

            $scope.customers = [];
            $scope.appSettings = appSettings;

            //Serve data through our controller by passing values from service to our scope.customers array;
            (function init() {
                  customerFactory.getCustomers()
                                .success(function(customers){
                                  $scope.customers = customers; // give value from the ajax call
                                }).error(function(data,status,headers,config){
                                    // console.log(data);
                                    $log.log(data.error);

                                });
            })();


            $scope.sortBy = "name"; // sorts A-Z
            $scope.reverse = "false"; //if Ascending values will show descending

            //doSort(propName) argument set for the view
            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
        }]);


})();
