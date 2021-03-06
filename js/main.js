$(function(){

    $('.carousel').carousel({
        interval: false
    });

    $(".search").on("click", function(){
        $(".main-menu .navbar-form").slideToggle();
    });

    $(window).load(function(){
        var carouselCaptionWidth = $("#carousel-sidebar .active img").width();
        $("#carousel-sidebar img").each(function(){
            $(this).attr('width', carouselCaptionWidth);
        });

        $("#carousel-sidebar .sidebar-carousel-caption").css("max-width", carouselCaptionWidth);
        $("#carousel-sidebar .carousel-indicators").css("max-width", carouselCaptionWidth);
        $(".sidebar .banner").css("max-width", carouselCaptionWidth);
    });

    $("#elastislide").elastislide();

})
