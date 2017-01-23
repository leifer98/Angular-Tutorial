var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        
        templateUrl: 'page1.html',
//        template: '<b>what</b>'
//see what happen when u remove the comment above
    })
    .when('/helloUser',{
        templateUrl: 'page2.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    
});
