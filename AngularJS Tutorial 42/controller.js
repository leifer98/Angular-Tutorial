var appX = angular.module('mainApp',[]);

appX.directive('myFirstDirective',function(){
    
    return {
        restrict : 'EA',
        scope: {
            name: '@',
            age: '=',
            func: '&'
        },
        template: [
                    '<p> Value of name in directive: {{name}}</p>',
                    '<p> Enter new name: <input type="text" ng-model="name"></p>',
                    '<p> Value of age in directive: {{age}}</p>',
                    '<p> Enter new age: <input type="text" ng-model="age"></p>',
                    '<br><input type="button"  ng-click="func()"  value="Alert from directive">'
                    ].join('')
   } ;
    
});

appX.controller('app',function($scope){
    $scope.name = "codedamn";
    $scope.age = 18;
    $scope.alertTheName = function() {
        alert('hey '+$scope.name);
    };
});

// @ - text bind
// = - Two way bind
// & - one way bind