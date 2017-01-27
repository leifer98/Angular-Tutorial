var appX = angular.module('mainApp',[]);

appX.directive('myFirstDirective',function(){
   return {
       template:'Hello World!'
   } ;
});

appX.controller('app',function($scope){
    
});