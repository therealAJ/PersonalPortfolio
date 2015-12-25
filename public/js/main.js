 
//Scrollspy

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });


// Skills Bar

//   // on page load...
//        // on browser resize...

//    $(window).resize(function() {
////        moveProgressBar();
////    });
////


// 

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 2000;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        
	  $("#counter-html").counter("start");
      $("#counter-css").counter("start");
  
        console.log("used scroll");
 
    }
	else
	{
		
	}
 });

//
//$(window).scroll(function() {
//    var y_scroll_pos = window.pageYOffset;
//    var scroll_pos_test = 2000;             
//	// set to whatever you want it to be
//
//    if(y_scroll_pos > scroll_pos_test) {
//        
//	
//      $("#counter-css").counter("start");
//        console.log("used scroll");
// 
//    }
//	else
//	{
//		
//	}
// });
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


      
              $(document).ready(function(){ $("#counter-html").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 80 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-css").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 70 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});



$(document).ready(function(){
$(document).scroll(function() {
var top = $(document).scrollTop();
console.log(top);
    
    if (top > 1400 && top < 3500 ) {
        $("#html, #css").animate({width:"90%"}, 2000);
    } else {
        $("#html, #css").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 1400 && top < 3500) { $("#javascript").animate({width:"60%"}, 2000);
    } else {
        $("#javascript").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1400 && top < 3500) {$("#c").animate({width:"30%"}, 2000);
    }
    else {
        $("#c").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1400 && top < 3500) { $("#cplusplus").animate({width:"20%"}, 2000); 
    } else {
        $("#cplusplus").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 1400 && top < 3500) { $("#java").animate({width:"80%"}, 2000); }
    else {
        $("#java").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#python").animate({width:"40%"}, 2000); }
    else {
        $("#python").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#bootstrap").animate({width:"70%"}, 2000); }
    else {
        $("#bootstrap").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#jquery").animate({width:"50%"}, 2000); }
    else {
        $("#jquery").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#angular").animate({width:"20%"}, 2000); }
    else {
        $("#angular").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#nodejs").animate({width:"15%"}, 2000); }
    else {
        $("#nodejs").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#mongodb").animate({width:"15%"}, 2000); }
    else {
        $("#mongodb").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#git").animate({width:"70%"}, 2000); }
    else {
        $("#git").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#jetbrains").animate({width:"50%"}, 2000); }
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
    
    if (top > 500 ) { $("#mis").animate({width:"50%"}, 2000); }
    else {
        $("#mis").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 500 ) { $("#it-life-cycle").animate({width:"70%"}, 2000); }
    else {
        $("#it-life-cycle").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 500 ) { $("#financial-anaylsis").animate({width:"30%"}, 2000); }
    else {
        $("#financial-analysis").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 500 ) { $("#project-management").animate({width:"40%"}, 2000); }
    else {
        $("#project-management").stop(true).animate({width:"0"}, '2000');
    }
    
    
    
    
    
    
    }); 
});














