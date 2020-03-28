$(window).on('load', function() {
  $('#loading-center-absolute').fadeOut(500);
  setTimeout( function() {
    $('#loading').fadeOut(500);
  }, 500);
});

$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });

var sticky = $('.sticky'),
         scroll = $(window).scrollTop();

$(window).on('scroll, resize',function(){
    var stickyOffset = $('.sticky').offset().top;
    var paddingHeight = $('.sticky').outerHeight();
  if (scroll >= stickyOffset) {
    $('#header').addClass('navFixed').css('padding-bottom', paddingHeight+'px');
  }
  else $('#header').removeClass('navFixed').css('padding-bottom', '0');
});

});