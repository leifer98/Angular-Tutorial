var appX = angular.module('mainApp',[]);
//toggle between the restricts and see what happens
appX.directive('myFirstDirective',function(){
   return {
       template:'Hello World!',
       restrict: 'A'
       //restrict: 'E'
   } ;
});

appX.controller('app',function($scope){
    
});