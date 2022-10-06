'use strict'

/*
Quiero hacer click en el uno de los botones de categoria y 
que se me filtran las fotos por esta categoria.
Y después poder clicar en la foto( o boton) y que se me abra el formato grande, 
con el fondo oscuro y el boton para salir.
Que hago:
  - crear eventos:
  - crear las funciones para los botones de categoria
  - cuando hago click en el boton de 'pan' se quedan los que tienen la clase .pan,
    y los demás desaparecen. 
    Es decir:
  - a los demás se les añade la clase 'desactive' con display: none.
  - dar a estos clases secundarios estilos en css
*/ 

// Guardo cada Item de la imagen en una variable, para usarla en las funciones de los botones de categoria:
let nodoItems = document.querySelectorAll('.gallery_item');
console.log(nodoItems);

//--------------------------------- Creo EVENTOS con todos BOTONES del NAV -------------------------------


function selectPan(){
  console.log('Botón conectado');

  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('pan')){
      console.log('Tú te quedas pan: ', nodoItems[i]);
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }
}

function selectSinGluten(){
  console.log('Evento creado');

  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('sinGluten')){
      console.log('Tú te quedas pan sin gluten', nodoItems[i]);
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }
}

function selectTartas(){
  console.log('Botón conectado');

  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('tarta')){
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }
}

function selectBizcochos(){
  console.log('Evento creado');

  for( let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('bizcochos')){
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }
}



// Accedo al wrapper de la foto grande(Pop up):
let nodo_PopUp = document.querySelector('.pop_up'); //Es el Pop-up entero.


// Creo un EVENTO: Haciendo click en cuálquier ITEM del producto, (se puede hacer con el botón, pero mejor eleguir el área más grande)
// se abre la foto grande (Pop up):

 for( let i = 0; i < nodoItems.length; i++){

  nodoItems[i].addEventListener('click', function(){

    console.log( nodoItems[i] );
    console.log( "this----->", this ); // gallery item

    nodo_PopUp.classList.add('open');

    // Desde aquí (aquí es ITEM = this) quiero BUSCAR la imagen que tiene dentro el ITEM:
    let nodoImage = this.querySelector( '.gallery_img' );
    console.log( nodoImage ); // elmento imagen

    // Quiero quedarme con el src:
    let src_img_selected = nodoImage.getAttribute('src');
    console.log( src_img_selected );

    // Quiero acceder a la imagen del Pop UP y cambiarle src:
    let nodo_PopUp_img = document.querySelector('.pop_up-img');
    console.log(nodo_PopUp_img);
    nodo_PopUp_img.src = src_img_selected;

    
    // Quiero acceder a la imagen de cualquier ITEM y recoger la descripcion de la imagen:
    let txt_img = nodoImage.dataset.text;

    // Accedo al parafo del Pop Up:
    let nodo_paragraphPopUp = document.querySelector('.pop_up-p');

    // Al parrafo le cambio el texto por la variable (dataset.text):
    nodo_paragraphPopUp.innerHTML = txt_img;
  })

 }


// Accedo al svg para quitar la clase .open al Pop Up y cerrarlo:

 let nodo_closePopUp = document.querySelector('.pop_up');

 nodo_closePopUp.addEventListener('click', function(){

    nodo_PopUp.classList.remove('open');
 })
 