var app = angular.module('mainApp',[]);

var app = angular.module('mainApp',[]);

app.controller('app',function($scope) {
   $scope.myRandomNumber = Math.round(Math.random()*10);
    document.querySelector('input').addEventListener('click',function(){
        $scope.myRandomNumber= Math.round(Math.random()*10)+1;
        $scope.$digest();
    },false);
});