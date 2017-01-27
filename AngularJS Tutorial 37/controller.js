var appX = angular.module('mainApp',[]);

appX.filter('base',function(){
    var something = function( input , base) {
        var parsed = parseInt(input,10);
        var based = parseInt(base,10);
        
        if (isNaN(parsed) || isNaN(based)) return input;
        if (base <= 36 && base >= 2)
            return parsed.toString(based);
        return 'error'
    }
    return something;
});

appX.controller('app',function($scope){
    
});