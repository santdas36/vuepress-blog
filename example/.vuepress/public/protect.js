$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });

$('.search-box input').on('focus', function() {
  $('.HeaderTitle, .authlink').addClass('MobileHeaderTitle');
});

$('.search-box input').on('blur', function() {
  $('.MobileHeaderTitle').removeClass('MobileHeaderTitle');
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