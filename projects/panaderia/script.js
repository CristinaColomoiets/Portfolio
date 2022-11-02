'use strict'

let nodoItems = document.querySelectorAll('.gallery_item');
console.log(nodoItems);

//--------------------------------- Creo EVENTOS con todos BOTONES del NAV -------------------------------


function selectPan(){
  
  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('pan')){
      console.log('Tú te quedas pan: ', nodoItems[i]);
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }

  nodo_box_btns.classList.remove('active');
}

function selectSinGluten(){
  
  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('sinGluten')){
      console.log('Tú te quedas pan sin gluten', nodoItems[i]);
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }

  nodo_box_btns.classList.remove('active');
}

function selectTartas(){
  
  for(let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('tarta')){
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }

  nodo_box_btns.classList.remove('active');
}

function selectBizcochos(){

  for( let i = 0; i < nodoItems.length; i++){

    if(nodoItems[i].classList.contains('bizcochos')){
      nodoItems[i].classList.remove('desactive');

    }else{
      nodoItems[i].classList.add('desactive');
    }
  }

  nodo_box_btns.classList.remove('active');
}




let nodo_PopUp = document.querySelector('.pop_up');

for( let i = 0; i < nodoItems.length; i++){

nodoItems[i].addEventListener('click', function(){

  console.log( nodoItems[i] );
  console.log( "this----->", this ); 

  nodo_PopUp.classList.add('open');

  
  let nodoImage = this.querySelector( '.gallery_img' );
  console.log( nodoImage ); 

  
  let src_img_selected = nodoImage.getAttribute('src');
  console.log( src_img_selected );

  
  let nodo_PopUp_img = document.querySelector('.pop_up-img');
  console.log(nodo_PopUp_img);
  nodo_PopUp_img.src = src_img_selected;


  let txt_img = nodoImage.dataset.text;

  
  let nodo_paragraphPopUp = document.querySelector('.pop_up-p');
  nodo_paragraphPopUp.innerHTML = txt_img;
})

}


// Accedo al svg para quitar la clase .open al Pop Up y cerrarlo:

let nodo_closePopUp = document.querySelector('.pop_up');

nodo_closePopUp.addEventListener('click', function(){

  nodo_PopUp.classList.remove('open');
});


let nodo_svg_menu = document.querySelector('.header_svg-menu');

let nodo_box_btns = document.querySelector('.header_box-btns');

nodo_svg_menu.addEventListener('click', function(){
  nodo_box_btns.classList.add('active');
});


let nodo_svg_X = document.querySelector('.header_close-btn');

nodo_svg_X.addEventListener('click', function(){
  nodo_box_btns.classList.remove('active');
});