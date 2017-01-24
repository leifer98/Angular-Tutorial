var app = angular.module('mainApp',[]);

app.controller('people',function($scope, $http) {
    $http.get('http://127.0.0.1:59112/AngularJS%20Tutorial%2017/database.json').success(function(response) {
        $scope.persons = response.records;
    });
});