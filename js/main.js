$(document).ready(function() {
    $("#navbar-toggle").click(function() {
        $("#responsive-menu").slideToggle();
    });

    function hide_responsive_menu() {
        $("#responsive-menu").slideUp();
        $("#responsive-menu .sub-menu").slideUp();
        $('.responsive-menu-toggle').removeClass('open');
    }
    $(window).resize(function() {
        hide_responsive_menu();
    });
    $(window).scroll(function() {
        hide_responsive_menu();
    });
    // show hidden sub-menu responsive 
    $('.responsive-menu-toggle').click(function() {
        $(this).toggleClass('open');
        $(this).next('.sub-menu').slideToggle();
    })
});