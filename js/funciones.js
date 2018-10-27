/**
 * Funcion para gestionar el cronometro de ambos modos
 */
function gestionCronometro(){
    //Si estamos en el modo arcade, no hacemos nada e imprimimos
    //Si estamos en el modo cronometro, restamos al contador antes de imprimir
    var tiempoDeJuego = controlTiempo;
    if(level == 2){
        tiempoDeJuego = tiempoContrareloj-controlTiempo; 
    }
    $("#tiempo").append(tiempoDeJuego);
}

/**
 * Funcion para desplegar el texto de ayuda
 */
function displayHelpText(){
    if(level == 1){
        $("#helpCanvas").append("<div id='helpText'><div id='helpHead'>Arcade</div><div id='helpBody'>En este modo, tu objetivo es aplastar tantos mosquitos como sea posible, Cuidado! Mata "+limiteMariposas+" mariposas y perderas!</div></div>");
    }
    else{
        $("#helpCanvas").append("<div id='helpText'><div id='helpHead'>Contrareloj</div><div id='helpBody'>En este modo, tu objetivo es aplastar tantos mosquitos como sea posible dentro del limite de tiempo, Cuidado! Mata "+limiteMariposas+" mariposas y perderas!</div></div>");
    }
}