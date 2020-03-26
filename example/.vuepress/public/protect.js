$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });
$(window).resize(function(){
       if ($(window).width() <= 419) {
          $('#header').height($('#header').outerHeight());
		$('.search-box input').on('focus', function() {
		  $('.title-bar').hide();
		  $('.auth-link').hide();
		  $('.search-box').addClass('p-0');
		});
		$('.search-box input').on('blur', function() {
		  $('.title-bar').show();
		  $('.auth-link').show();
		  $('.search-box').removeClass('p-0');
		});
       }     
});
 
var stickyOffset = $('.sticky').offset().top;
var paddingHeight = $('.sticky').outerHeight();

$(window).on('scroll',function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) {
    $('#header').addClass('navFixed').css('padding-bottom', paddingHeight+'px');
  }
  else $('#header').removeClass('navFixed').css('padding-bottom', '0');
});

});