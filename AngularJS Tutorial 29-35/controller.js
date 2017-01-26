var appX = angular.module('mainApp',[]);

appX.controller('app',function($scope){
    $scope.tasks = [];
    
    var taskData = localStorage['tasksList'];
    
    if (taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    
    $scope.update =function() {
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
        console.log('updated!');
    }
    
    var addTask = function() {
        $scope.tasks.unshift({message:$scope.task,
                           status:false,
                           class:'list-group-item-warning showA'});
    }
    
    $scope.swap = function (i) {
        if ($scope.tasks[i].status)
        {
            $scope.tasks[i].class = 'list-group-item-success';
            var arr = [];
            for (var j = 0 ; j < $scope.tasks.length ; j++) {
                if (j !== i)
                    arr.push($scope.tasks[j]);
            }
            arr.push($scope.tasks[i]);
            $scope.tasks = arr;
            $scope.update();
        }            
        else {
            $scope.tasks[i].class = 'list-group-item-warning';
            var arr = [];
            for (var j = 0 ; j < $scope.tasks.length ; j++) {
                if (j !== i)
                    arr.push($scope.tasks[j]);
            }
            arr.unshift($scope.tasks[i]);
            $scope.tasks = arr;
            $scope.update();
        }
    }
    
    $scope.remove = function (num) {
        $scope.tasks[num].class = 'list-group-item-success disappear';
        //console.log($scope.tasks[num].class);
        setTimeout(function(){
            var arr = [];
            for (var i = 0 ; i < $scope.tasks.length ; i++) {
                if (i !== num)
                    arr.push($scope.tasks[i]);
            }
            $scope.tasks[num].class = 'list-group-item-success';
            //console.log($scope.tasks[num].class);
            $scope.tasks = arr;
            $scope.update();
        },1000);
        
        
        
        
    }
    
    $scope.contentEdit = function() {
        if (event.target.contentEditable == 'true'){
            event.target.contentEditable = 'false';
            document.getElementById(event.target.id).style.textShadow = 'none';
        }  else {
            event.target.contentEditable ='true';
            document.getElementById(event.target.id).style.textShadow = '0px 2px 13px #333,0px 3px 16px';
        } 
    }
    
    $scope.enterAgain = function(i){
        event.target.innerHTML = event.target.innerHTML.replace(/<br>/gi, '');
        if ((event.which == 13 || event.keyCode == 13) && event.target.innerHTML != '')
            {
                $scope.contentEdit();
                $scope.tasks[i].message = event.target.innerHTML;
                $scope.update();
            }
            
    }
    
    $scope.searchEnter = function() {
        if ((event.which == 13 || event.keyCode == 13) && $scope.task != '')
            {
                addTask();
                //console.log($scope.tasks[0].class);
                setTimeout(function(){
                    $scope.tasks[0].class = 'list-group-item-warning';
                    //console.log($scope.tasks[0].class);
                    $scope.update();
                },1000);
                $scope.task = '';                
                //$scope.update();
            }
    }    
});