var appX = angular.module('mainApp',[]);

appX.directive('myFirstDirective',function(){    
    function linkFunction($scope, elem, attrs) {
        $scope.name = "Hello World";
        $scope.changeName = function() {
            $scope.name = $scope.controllerProperty;
        }
    }
    //toggle between the comments of the scope and see what happen
    return {
        restrict : 'EA',
 //       scope: {},
        scope: true,
        link:linkFunction,
        template: '<span ng-click="changeName()"> Current name : {{name}}</span>'
   } ;
    
});

appX.controller('app',function($scope){
    $scope.controllerProperty = "This is a controller specific property.";
});