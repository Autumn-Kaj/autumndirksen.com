$(document).ready(function(){
    $('#hamburger').click(function(){
        $('.header-grid').fadeIn();
        $('.header-grid').animate({height: '90vh', opacity: '100'}, "slow");
        $('#hamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.header-grid').animate({height: '0', opacity: '0'}, "slow",function(){
            $('.header-grid').fadeOut();})
        $('#hamburger').css("visibility","visible");

    });

    /*123*/
    $('#hamburger').click(function(){
        $('.table-header-grid').fadeIn();
        $('.table-header-grid').animate({height: '90vh', opacity: '100'}, "slow");
        $('#hamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.table-header-grid').animate({height: '0', opacity: '0'}, "slow",function(){
            $('.table-header-grid').fadeOut();})
        $('#hamburger').css("visibility","visible");

    });
});