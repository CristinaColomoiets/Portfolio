'use strict'

let node_input = document.querySelector('#input');


let btn_add = document.querySelector('#add');
btn_add.addEventListener('click',function(){
    console.log('Boton AÑADIR está conectado');

    
    let input_value = node_input.value;
    console.log("Valor del input es: ", input_value);

    if(node_input.value.trim() !== ''){  
        paint_on_the_web(input_value); 
        node_input.value = '';
    }
});



let btn_choose = document.querySelector('#choose');
btn_choose.addEventListener('click', function(){
    console.log('Boton sortear está conectado');

    let node_list_names = document.querySelectorAll('.wrapper_names-box-name');
    console.log(node_list_names);


    let times_limite = 40;
    let counter_times = 0;


    // Creo el SORTEO:
    let ref_interval = setInterval(function(){
        
        let sorteo_number = Math.trunc (Math.random() * node_list_names.length);
        console.log('Es número de ganador', sorteo_number);
        
        let winner = node_list_names[sorteo_number];
        console.log('Es el ganador', winner);
        
        node_list_names[sorteo_number].classList.add('active');

        
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



let btn_delete = document.querySelector('#delete');
btn_delete.addEventListener('click',function(){
    console.log('Boton BORRAR creado');
    node_wrapper_names.innerHTML = '';
});


let node_wrapper_names = document.querySelector('.wrapper_names');

function paint_on_the_web(nombre){
    
    
    let node_box_name = document.createElement('div');
    
    node_box_name.classList.add('wrapper_names-box-name');

   
    let box_txt = document.createElement('p');
    box_txt.classList.add('wrapper_names-box-txt');

    
    box_txt.innerHTML = nombre;


    let node_btn_x = document.createElement('div');
    node_btn_x.classList.add('wrapper_names-box-svg');

    
    node_btn_x.innerHTML = '<svg class="wrapper_names-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'

    node_box_name.appendChild(box_txt);
    node_box_name.appendChild(node_btn_x);
    node_wrapper_names.appendChild(node_box_name);


    
    node_btn_x.addEventListener('click', function(){
        console.log('Boton X está conectado');
        node_box_name.remove();
    });

}
