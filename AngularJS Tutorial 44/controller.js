var appX = angular.module('mainApp',['ngAnimate']);

appX.controller('app',function($scope){
    $scope.foods = ['pizza','hamburger',
                    'cats','chicken',
                    'cake','tomato soup'];
});