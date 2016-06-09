(function(){
  angular.module('myApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/',{
      controller: 'mainController',
      templateUrl: 'views/customers.html'
    })
    .when('/orders/:customerId', {
      controller: 'ordersController',
      templateUrl: 'views/orders.html'
    })
    .otherwise({redirectTo: '/'});
  });
})();
