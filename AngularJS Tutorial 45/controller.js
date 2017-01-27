var appX = angular.module('mainApp',['ngCookies']);

appX.controller('app',function($scope,$cookies){
    $scope.myCookieVal = $cookies.get('cookie');
    $scope.setCookie = function(val) {
        $cookies.put('cookie',val);  
    };
});