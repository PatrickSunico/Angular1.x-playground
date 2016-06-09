// Option 2 prepend Model itself and append controller afterwards
(function() {

    angular.module('myApp')
        .controller('mainController', ['$scope', 'customerFactory','appSettings', function($scope, customerFactory ,appSettings) {

            $scope.customers = [];
            $scope.appSettings = appSettings;

            //Serve data through our controller by passing values from service to our scope.customers array;
            (function init() {
                $scope.customers = customerFactory.getCustomers();
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
