var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        
        templateUrl: 'login.html',
//        template: '<b>what</b>'
//see what happen when u remove the comment above
    })
    .when('/dashboard',{
        resolve: {
            "check": function($location, $rootScope) {
                if(!$rootScope.loggedIn) {
                    alert('Nice Try!');
                    $location.path('/');
                }
            }
        },
        templateUrl: 'dashboard.html'
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
});

app.controller('loginCtrl',function($scope, $location,$rootScope) {
    $scope.submit = function () {
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        } else {
            alert('Wrong Stuff');
        }            
    }
});