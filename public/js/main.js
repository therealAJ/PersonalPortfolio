 
//Scrollspy

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });


// Skills Bar

//   // on page load...
//
//
//$(window).scroll(function() {
//    var y_scroll_pos = window.pageYOffset;
//    var scroll_pos_test = 2000;             
//	// set to whatever you want it to be
//
//    if(y_scroll_pos > scroll_pos_test) {
//	   moveProgressBar();
//        console.log("used scroll");
//        // on browser resize...
//    $(window).resize(function() {
//        moveProgressBar();
//    });
//    }
//	else
//	{
//		
//	}
//});
//   
//    
//
//    // SIGNATURE PROGRESS
//    function moveProgressBar() {
//      console.log("moveProgressBar");
//        var getPercent = ($('.progress-wrap').data('progress-percent') / 1000);
//        var getProgressWrapWidth = $('.progress-wrap').width();
//        var progressTotal = getPercent * getProgressWrapWidth;
//        var animationLength = 2800;
//        
//        // on page load, animate percentage bar to data percentage length
//        // .stop() used to prevent animation queueing
//        $('.progress-bar').stop().animate({
//            left: progressTotal
//        }, animationLength);
//    }





$(document).ready(function(){
$(document).scroll(function() {
var top = $(document).scrollTop();
console.log(top);
    
    if (top > 500 && top < 3200 ) {
        $("#html, #css").animate({width:"90%"}, 2000);
    } else {
        $("#html, #css").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 500 && top < 3400) { $("#javascript").animate({width:"60%"}, 2000);
    } else {
        $("#javascript").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 500) {$("#c").animate({width:"30%"}, 2000);
    }
    else {
        $("#c").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 500 && top < 3500) { $("#cplusplus").animate({width:"20%"}, 2000); 
    } else {
        $("#cplusplus").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 500 && top < 3650) { $("#java").animate({width:"80%"}, 2000); }
    else {
        $("#java").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 3800) { $("#python").animate({width:"40%"}, 2000); }
    else {
        $("#python").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 4800) { $("#bootstrap").animate({width:"70%"}, 2000); }
    else {
        $("#bootstrap").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 4850) { $("#jquery").animate({width:"50%"}, 2000); }
    else {
        $("#jquery").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 4900) { $("#angular").animate({width:"20%"}, 2000); }
    else {
        $("#angular").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 4950) { $("#nodejs").animate({width:"15%"}, 2000); }
    else {
        $("#nodejs").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 5000) { $("#mongodb").animate({width:"15%"}, 2000); }
    else {
        $("#mongodb").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 5050) { $("#git").animate({width:"70%"}, 2000); }
    else {
        $("#git").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500 && top < 5100) { $("#jetbrains").animate({width:"50%"}, 2000); }
    else {
        $("#jetbrains").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 500) { $("#windows").animate({width:"90%"}, 2000); }
    else {
        $("#windows").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 500 ) { $("#android").animate({width:"40%"}, 2000); }
    else {
        $("#android").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 500 ) { $("#linux").animate({width:"50%"}, 2000); }
    else {
        $("#linux").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 500 ) { $("#osx").animate({width:"40%"}, 2000); }
    else {
        $("#osx").stop(true).animate({width:"0"}, '2000');
    }
    
    
    
    
    
    
    }); 
});














