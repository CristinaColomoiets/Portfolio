$('.header__svg-menu').click(function () {
    $('.header__nav-menu').addClass('active');
})
$('.header__close-menu').click(function () {
    $('.header__nav-menu').removeClass('active');
})


$(".header__li").click(function (){
    $(".header__nav-menu").removeClass("active");
})
