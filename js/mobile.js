$(document).ready(function(){
    $('#hamburger').click(function(){
        $('.header-grid').fadeIn();
        $('.header-grid').animate({height: '100vh', opacity: '100'}, "slow");
        $('#hamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.header-grid').animate({height: '0', opacity: '0'}, "slow",function(){
            $('.header-grid').fadeOut();})
        $('#hamburger').css("visibility","visible");

    });
    /*Airbnb*/
    $('#airbnbhamburger').click(function(){
        $('.header-grid').fadeIn();
        $('.header-grid').animate({height: '100vh', opacity: '100'}, "slow");
        $('#airbnbhamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.header-grid').animate({height: '0', opacity: '0'}, "slow",function(){
            $('.header-grid').fadeOut();})
        $('#airbnbhamburger').css("visibility","visible");

    });
    /*123*/
    $('#hamburger').click(function(){
        $('.dark-header-grid').fadeIn();
        $('.dark-header-grid').animate({height: '100vh', opacity: '100'}, "slow");
        $('#hamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.dark-header-grid').animate({height: '0', opacity: '0'}, "slow",function(){
            $('.dark-header-grid').fadeOut();})
        $('#hamburger').css("visibility","visible");

    });
});