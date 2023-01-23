/* Seleção dos componentes */
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const reset = document.getElementById ('reset');
const lamp = document.getElementById ('lamp');

/* Captura de evento pelo usuario */
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
reset.addEventListener ('click', resetar);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

/* Funções */

function lampOn (){
    if ( !validaçãoLampada() ){
        lamp.src = 'img/ligada.jpg';
    }
}

function lampOff (){
    if ( !validaçãoLampada() ){
        lamp.src = 'img/desligada.jpg';
    }
}

function lampBroken (){
    lamp.src = 'img/quebrada.jpg';
}

function validaçãoLampada (){
    return lamp.src.indexOf ('quebrada') > -1
}

function resetar(){
    window.location.reload();
}