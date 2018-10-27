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