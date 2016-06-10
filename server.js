// Do Server Testing tomorrow
var express = require('express'),
    app = express();

//Require Seeds
var customers = require('./seedData.js');

    // app.configure(function(){
      app.use(express.static(__dirname + '/public'));
    // });

    //json response to our controllers
    app.get('/customers',function(req,res){
      res.json(customers);
      // res.json(500, {error: 'An Error has occured'});
    });

    // Order Views
    app.get('/customers/:id', function(req,res){

      //Check if customerId matches with the route params or if value of customerID exists.
      var customerId = parseInt(req.params.id);
      var data = {}; //data placeholder

      customers.forEach(function(index){
        if(index.id === customerId){
          data = index;
        }
      });

      res.json(data);
    });


  var port = 3000 || PROCESS.ENV.PORT
  app.listen(port, function(){
    console.log("Listening in on port", + port);
  });
