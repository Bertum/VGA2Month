/**
 * Funcion para gestionar el cronometro de ambos modos
 */
function gestionCronometro() {
    //Si estamos en el modo arcade, no hacemos nada e imprimimos
    //Si estamos en el modo cronometro, restamos al contador antes de imprimir
    var tiempoDeJuego = controlTiempo;
    if (level == 2) {
        tiempoDeJuego = tiempoContrareloj - controlTiempo;
    }
    var tiempoSegundos = tiempoDeJuego / 60;
    var aux = Math.round(tiempoSegundos * 100) / 100;
    topBarContext.strokeText(aux.toString() ,10,0,widthVentana/3);
}

/**
 * Funcion para gestionar la puntuacion
 */
function gestionPuntuacion() { 
    topBarContext.strokeText(puntuacion.toString() ,10,0,widthVentana/6);
}

/**
 * Funcion para gestionar el numero de mariposas eliminadas
 */
function gestionPuntuacionMariposas(){

}

function drawInTopBar (aux){

}

/**
 * Funcion para desplegar el texto de ayuda
 */
function displayHelpText() {
    if (level == 1) {
        $("#helpTextLevel1").show();
    }
    else {
        $("#helpTextLevel2").show();
    }
}

/**
 * Funcion para gestionar el display de los mosquitos
 */
function gestionMoscas() {
    for (var f in arrFly) {
        arrFly[f].movement();
    }
}

/**
 * Funcion para gestionar el display de los mosquitos
 */
function gestionMariposas() {
    $('#gameCanvas').html("");
    for (var b in arrButterfly) {
        arrButterfly[b].movement();
    }
}

/**
 * Funcion para gestionar el display de los mosquitos
 */
function accelerate() {
    for (var f in arrFly) {
        arrFly[f].accelerate((controlTiempo%700+1)*speed);
    }
    for (var b in arrButterfly) {
        arrButterfly[b].accelerate((controlTiempo%700+1)*speed);
    }
}

/**
 * Funciones para gestionar el toque en la pantalla
 */
function gestionarToque() {
    $("#gameCanvas").click(function () {
        console.log("Has hecho cick");
        console.log("Has hecho click en: " + event.clientX + ", " + event.clientY);
    });
}

function toque() {
    console.log("Has hecho click en: " + event.clientX + ", " + event.clientY);
}

function clearCanvas() {
    backgroundContext.clearRect(0, 0, widthVentana, heightVentana);
    gameContext.clearRect(0, 0, widthVentana, heightVentana);
}

function hideHelptText() {
    $("#helpTextLevel1").hide();
    $("#helpTextLevel2").hide();
}