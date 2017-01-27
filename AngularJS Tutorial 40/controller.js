var appX = angular.module('mainApp',[]);

appX.directive('myFirstDirective',function(){
//    function linkFunction(scope, elem, attrs) {
//        elem.bind('click', function(){
//           console.log(elem[0].innerHTML); 
//        });
//    }
//    
//   return {
//       template:'Hello World!',
//       link: linkFunction
//   } ;
    
    function linkFunction($scope, elem, attrs) {
        $scope.name = "Hello World";
        $scope.changeName = function(name) {
            $scope.name = name;
        }
    }
    
    return {
        restrict : 'EA',
        link:linkFunction,
        template: '<span ng-click="changeName(\' Hello User\')"> Current name : {{name}}</span>'
   } ;
    
});

appX.controller('app',function($scope){
    
});