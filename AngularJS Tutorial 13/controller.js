var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'page1.html'
    })
    .when('/helloUser',{
        templateUrl: 'page2.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    
});
