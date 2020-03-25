$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });

var stickyOffset = $('nav.sticky').offset().top;

$(window).on('scroll', function(){
  var sticky = $('nav.sticky'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) $('#header').addClass('navFixed');
  else $('#header').removeClass('navFixed');
});

});