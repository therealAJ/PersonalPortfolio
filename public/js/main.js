 
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
    
    if (top > 1600) {
        $("#html, #css").animate({width:"100%"}, 2000);
    } else {
        $("#html, #css").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 1650) { $("#javascript").animate({width:"70%"}, 2500);
    } else {
        $("#javascript").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1655) {$("#php").animate({width:"50%"}, 2000);
    }
    else {
        $("#php").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1680) { $("#mysql").animate({width:"30%"}, 2000); 
    } else {
        $("#mysql").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1700) { $("#wordpress").animate({width:"60%"}, 2000); }
    else {
        $("#wordpress").stop(true).animate({width:"0"}, '2000');
    }
    }); 
});














