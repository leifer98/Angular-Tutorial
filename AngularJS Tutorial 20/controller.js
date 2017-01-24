var app = angular.module('mainApp',[]);

app.controller('app',function($scope){
//    toggle between the 2 type of codes and see the diffrence
    
//   var range = 10;
//    var myRange = [];
//    for (var i = 1 ; i<=range ; i++)
//        myRange.push(i);
//    $scope.myRange = myRange;
//    
//    
    
    var range = new Array(100);
    $scope.myRange = range;
});