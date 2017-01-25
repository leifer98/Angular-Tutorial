var app = angular.module('mainApp',[]);

app.service('fromService',function(){
   this.message = "This is from Service!"; 
});

app.factory('fromFactory',function(){
    var factory = {};
    factory.message = "This is from factory!";
    return factory;
});

app.provider('fromProvider',function(){
   var m1 = "This is from provider!";
    return {
        $setName: function(name) {
          m1 += ' '+ name;  
        },
        $get: function(){
            return {
                message: m1
            }
        }
    }
});

app.config(function(fromProviderProvider){
    fromProviderProvider.$setName("CODEDANM!");
});

app.controller('app',function($scope,fromService,fromFactory,fromProvider){
    $scope.greetMessage = [fromService.message,fromFactory.message,fromProvider.message];
});