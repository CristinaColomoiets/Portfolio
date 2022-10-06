'use strict'

/*
   - Acceder a cada boton
   - Crear eventos con todos botones:
        - en cada funcion de cada boton le digo sus funciones
   - Crear una funccion que calcula el TEMPORIZADOR:
        - Llamarla para cada número, con sus parametros
   - Pintar en la web

   - Conectar botones con los números
   - Pintar en la web resultados del Timer
*/



// Creo las variables globales para poder usarlas con la funcion TIMER en el boton PARRAR
let ref_milliseconds;
let ref_seconds;
let ref_minuts;
let ref_hours;


// Creo las variables para poder reusarlas luego en la hora de PINTAR en la web usando los botones:
let html_milliseconds = document.querySelector('.wrapper_numbers-milliseconds');
let html_seconds = document.querySelector('.wrapper_numbers-seconds');
let html_minuts = document.querySelector('.wrapper_numbers-minuts');
let html_hours = document.querySelector('.wrapper_numbers-hours');


let value_number = {
     "milliseconds": 0,
     "seconds": 0,
     "minuts": 0,
     "hours": 0,
}




//---------------------------------------- Eventos con BOTONES -------------------------------------


// Accedo al boton START:
let btnStart = document.querySelector('#start');

// Creo la funcion con el boton START:
btnStart.addEventListener('click',function(){
     console.log('Boton EMPEZAR conectado');

     ref_milliseconds = timer (".wrapper_numbers-milliseconds", 100, 100 , "milliseconds");
     ref_seconds = timer (".wrapper_numbers-seconds", 60, 1000, "seconds");
     ref_minuts = timer (".wrapper_numbers-minuts", 60, 1000 * 60, "minuts");
     ref_hours = timer (".wrapper_numbers-hours", null, 1000 * 60 * 60 , "hours"); 

});



// Accedo al boton STOP:
let btnStop = document.querySelector('#stop');

// Creo la funcion con el boton STOP:
btnStop.addEventListener('click',function(){
     console.log('Boton PARAR conectado');

     clearInterval(ref_milliseconds); 
     clearInterval(ref_seconds);
     clearInterval(ref_minuts);
     clearInterval(ref_hours);
});



// Accedo al boton SAVE:
let btnSave = document.querySelector('#save');

// Creo la funcion con el boton SAVE:
btnSave.addEventListener('click', function(){
     console.log('Boton GUARDAR conectado');

     createRowTimeElement(); 
});

function createRowTimeElement(){
     //Accedo a la seccion TIME_SAVED para pintar alli:
     let node_section = document.querySelector('.time_saved');
     
     // Creo elemento padre:
     let node_wrapper_number = document.createElement('div');
     node_wrapper_number.classList.add('time_saved-wrapper-number');
     
     node_wrapper_number.innerHTML = putZero(value_number.hours) + ' : ' + putZero(value_number.minuts) + ' : ' + putZero(value_number.seconds) + ' : ' + putZero(value_number.milliseconds);
     

     // Creo elemento hijo, que es box-svg:
     let button_box = document.createElement('button');
     button_box.classList.add("time_saved-box-svg");
     button_box.innerHTML = ('<svg class="time_saved-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>');

     // Añadir el hijo al padre:
     node_wrapper_number.appendChild(button_box);

     // Añadir el padre a la seccion:
     node_section.appendChild(node_wrapper_number);

     // Añadir evento con el boton:
     button_box.addEventListener('click', function(){
          node_wrapper_number.classList.add('desactive');
     })
} 




// Accedo al boton RESTART:
let btnRestart = document.querySelector('#restart');

// Creo la funcion con el boton RESTART:
btnRestart.addEventListener('click', function(){
     console.log('Boton REINICIAR conectado');

     ref_milliseconds = timer (".wrapper_numbers-milliseconds", 100, 100 , "milliseconds");
     ref_seconds = timer (".wrapper_numbers-seconds", 60, 1000, "seconds");
     ref_minuts = timer (".wrapper_numbers-minuts", 60, 1000 * 60, "minuts");
     ref_hours = timer (".wrapper_numbers-hours", null, 1000 * 60 * 60 , "hours"); 
});



// Accedo al boton DELETE:
let btnDelete = document.querySelector('#delete');

// Creo la funcion con el boton DELETE:
btnDelete.addEventListener('click', function(){
     console.log('Boton BORRAR conectado');

     clearInterval(ref_milliseconds); 
     clearInterval(ref_seconds);
     clearInterval(ref_minuts);
     clearInterval(ref_hours);

     // Vacio el VALOR  en la web:
     html_milliseconds.innerHTML = '00';
     html_seconds.innerHTML = '00';
     html_minuts.innerHTML = '00';
     html_hours.innerHTML = '00';

     // Vacio el VALOR del TIMER:

     value_number.milliseconds = 0;
     value_number.seconds = 0;
     value_number.minuts = 0;
     value_number.hours = 0;
});




//----------------------------------------- TEMPORIZADOR / TIMER ----------------------------------------


// Hemos mejorado la función de TIMER, añadimos nuevo parametro que es PROPERTY para guardar 
// el VALOR del ESTADO de cada NÚMERO cuando paras el TIMER.

/**
 * 
 * @param {element html} selector_html - la etiqueta de html, a donde pasamos más tarde el nombre de la clase
 * @param {*} number_limit - el limite de numero donde tiene que papar el timer y empezar desde nuevo
 * @param {*} time_speed - la velocidad  con la cuál  corre el Timer
 * @param {string} propiedadEstado - Esta cadena determina el valor del estado GLOBAL que se va a usar para ese timer
 * @returns {Number} timer_interval - Id del interval creado.
 */

// Creo la funcion que calcula TIMER para todos números:
function timer (selector_html, number_limit, time_speed, property){
     let number_html = document.querySelector(selector_html);
     
     let timer_interval = setInterval(function(){
          value_number[ property ] = value_number[ property ] + 1;
          // value_number.minuts = value_number.minuts + 1;

          if(value_number[ property ] === number_limit){ 
          value_number[ property ] = 0;
          }
          number_html.innerHTML =  putZero(value_number[ property ])


     }, time_speed);

     return timer_interval;
};


// Funcion que PINTA :
function putZero(valorNumero) {
     if (valorNumero < 10) {
          return '0' + valorNumero;
     }else{
          return valorNumero;
     }
}













// Opcion 3 de crear el TIMER. Más directa, y corta.

let milliseconds = 0;
let seconds = 0;
let minuts = 0;
let hours = 0;

let ref_timer = setInterval(() => {
     milliseconds = milliseconds + 1;

     if( milliseconds === 100 ){

          milliseconds = 0;
          seconds = seconds + 1;

          if(seconds === 60 ){
               seconds = 0;
               minuts = minuts + 1;

               if(minuts === 60){
                    minuts = 0;
                    hours = hours + 1;
               }
          }

     }
}, 10);   // cuenta millisegundos y suma segundos y minutos y horas automaticamente.