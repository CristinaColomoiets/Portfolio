'use strict'

/*
   1. Cuando escribo en el INPUT un nombre y 
      clicko el boton 'AÑADIR', se pinta en la pagína.
   2. Cuando clicko el boton SORTEAR. se sortea  entre todos participantes un rato y aparece el nombre de caballo en el INPUT

   Que hago:
    - Accedo al INPUT
    - Recogo el VALOR del INPUT
    - Accedo a los botones
    - Creo el EVENTO con el BOTON 'añadir'
    - Creo el EVENTO con el BOTON 'sortear'
    - Creo una FUNCION que me PINTE en la web (De manera NUEVA)

    - Creo una FUNCION para el sorteo dentro del BOTON:
        - con una condicion:  que al momento de elegir el ganador me parpadean con colores todos participantes un rato, y al final se para en uno

    - Vinculo mis funciones con los BOTONES
    - Crear el EVENTO con el BOTON 'borrar'
*/

// Accedo al INPUT:
let node_input = document.querySelector('#input');


// Accedo al BOTON 'añadir' :
let btn_add = document.querySelector('#add');

// EVENTO con el boton 'añadir' :
btn_add.addEventListener('click',function(){
    console.log('Boton AÑADIR está conectado');

    // Recojo el VALOR del INPUT:
    let input_value = node_input.value;
    console.log("Valor del input es: ", input_value);

    if(node_input.value.trim() !== ''){  
        paint_on_the_web(input_value); // nombre = input_value
        // Vacio el INPUT después de añadir el nombre
        node_input.value = '';
    }
});


// Accedo al BOTON 'sortear' :
let btn_choose = document.querySelector('#choose');

// EVENTO con el BOTON 'sortear' :
btn_choose.addEventListener('click', function(){
    console.log('Boton sortear está conectado');

    // Acceder a la lista de .wrapper_names
    let node_list_names = document.querySelectorAll('.wrapper_names-box-name');
    console.log(node_list_names);


    let times_limite = 40;
    let counter_times = 0;


    // Creo el SORTEO:
    let ref_interval = setInterval(function(){
        // Aqui creamos la formula para elegir el participante
        let sorteo_number = Math.trunc (Math.random() * node_list_names.length);
        console.log('Es número de ganador', sorteo_number);
        
        let winner = node_list_names[sorteo_number];
        console.log('Es el ganador', winner);
        // Al ganador le pongo otro color
        node_list_names[sorteo_number].classList.add('active');

        // Aqui creo el efecto de parpadeo, el sistema empieza elegir entre todos a cada uno y quitarselo:
        let ref_timeout = setTimeout(function(){
            node_list_names[sorteo_number].classList.remove('active');
            if(counter_times === times_limite){
                clearInterval(ref_interval);
                node_list_names[sorteo_number].classList.add('active');
            }
        }, 90);

        
        counter_times = counter_times + 1;
         
    }, 100);

});


// Accedo al BOTON 'borrar' :
let btn_delete = document.querySelector('#delete');

// EVENTO con el boton 'borrar' :
btn_delete.addEventListener('click',function(){
    console.log('Boton BORRAR creado');
    node_wrapper_names.innerHTML = '';
});



// Accedo a la seccion de 'Wrapper Names' para pintar allí:
let node_wrapper_names = document.querySelector('.wrapper_names');

// FUNCION para PINTAR en la web. Cogiendo CUALQUIER nombre
function paint_on_the_web(nombre){
    
    // Creo elementos en HTML (cajas donde se va a pintar nombres de caballos):
    let node_box_name = document.createElement('div');
    // Añado la clase:
    node_box_name.classList.add('wrapper_names-box-name');

    // Creo la caja para el texto:
    let box_txt = document.createElement('p');
    // Le doy la clase:
    box_txt.classList.add('wrapper_names-box-txt');

    // Pinto dentro:
    box_txt.innerHTML = nombre;


    // Creo el BOTON de SVG para borrar el contenido:
    let node_btn_x = document.createElement('div');
    // Le añado la clase al BOTON:
    node_btn_x.classList.add('wrapper_names-box-svg');

    // A la caja (BOTON) de SVG le añado el svg entero:
    node_btn_x.innerHTML = '<svg class="wrapper_names-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'

    // Añado el BOTON 'X'  y la caja BOX-TXT a la seccion(caja) wrapper_names-box-name:
    node_box_name.appendChild(box_txt);
    node_box_name.appendChild(node_btn_x);

    // Añado al Wrapper Names que es PADRE el hijo:
    node_wrapper_names.appendChild(node_box_name);


    // EVENTO con el BOTON 'X' :
    node_btn_x.addEventListener('click', function(){
        console.log('Boton X está conectado');
        node_box_name.remove();
    });

}
