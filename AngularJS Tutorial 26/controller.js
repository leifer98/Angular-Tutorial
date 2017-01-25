var app = angular.module('mainApp',[]);

app.provider('date',function(){
    var greet;
   return {
       $setGreeting: function(value) {
           greet=value;
       },
       $get: function() {
           return {
               showDate: function() {
                   var date = new Date();
                   return greet + " Its " + date.getHours();
               },
               devShowDate: function() {
                   var date = new Date();
                   return date.getHours();
               }
           }
       }
   } 
});

app.config(function(dateProvider){
   var time = dateProvider.$get().devShowDate(); 
    if (time > 5 && time < 12) {
        dateProvider.$setGreeting("Good morning!");
    }else if (time > 13 && time < 17) {
        dateProvider.$setGreeting("Good day!");
    }else if (time > 17 && time < 19) {
        dateProvider.$setGreeting("Good evening!");
    }else {
        dateProvider.$setGreeting("Good night!");
    }
});

app.controller('app',function($scope,date){
    $scope.greetMessage = date.showDate();
});