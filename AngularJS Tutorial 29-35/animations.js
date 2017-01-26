$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();     
    
    $(".input-lg").keyup(function(){
            setTimeout(function(){$('.showA').slideDown(500);},100);
            setTimeout(function(){$('.showA').css('display','block');},700);
        
        $("i").click(function() {
            console.log('check');
            setTimeout(function(){$('.disappear').slideUp(500);},100);
            setTimeout(function(){$('.disappear').css('display','none');},700);
        });
    }); 
    
});