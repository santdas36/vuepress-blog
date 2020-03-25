$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });
});