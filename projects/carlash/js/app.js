// Cuando yo pongo el raton por encima de una .li, a los demás se les aplica la clase "opacity".
// Y ese mismo .li (ESE INDICE),no. Se le quita.


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



// Cuando pongo el raton por encima de la clase .li, aparece su imagen, mejor dicho se le añade la clase 'activo'
// Y a los demás se les quita.

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

