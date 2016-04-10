// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

$(".youtube-media").on("click", function(e) {
    var jWindow = $(window).width();
    if (jWindow <= 768) {
        return;
    }
    $.fancybox({
        href: this.href,
        padding: 4,
        type: "iframe",
        'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    });
    return false;
});
