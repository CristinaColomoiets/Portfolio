
$('.li').mouseover(function(){
    let indice = $('.li').index( $(this) )

    $('.li').addClass('opacity')
    $('.li').eq(indice).removeClass('opacity')
})

$('.li').mouseout(function(){
    let indice = $('.li').index( $(this) )

    $('.li').removeClass('opacity')
    $('.li').eq(indice).removeClass('opacity')
})



$('.li').mouseover(function(){
    let indice = $('.li').index( $(this) )

    $('.img').removeClass('activo')
    $('.img').eq(indice).addClass('activo')


})

$('.li').mouseout(function(){
    let indice = $('.li').index( $(this) )

    $('.img').removeClass('activo')
    $('.img').eq(indice).removeClass('activo')
})

