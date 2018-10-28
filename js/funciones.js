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
    topBarContext.strokeText(aux.toString(), 10, 0, widthVentana / 3);
}

/**
 * Funcion para gestionar la puntuacion
 */
function gestionPuntuacion() {
    topBarContext.strokeText(puntuacion.toString(), 10, 0, widthVentana / 6);
}

/**
 * Funcion para gestionar el numero de mariposas eliminadas
 */
function gestionPuntuacionMariposas() {
    for(var i = 0; i<cuentaMariposas;i++){
        //topBarContext.drawImage(butterflyImg,)
    }
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
        arrFly[f].accelerate((controlTiempo % 700 + 1) * speed);
    }
    for (var b in arrButterfly) {
        arrButterfly[b].accelerate((controlTiempo % 700 + 1) * speed);
    }
}

/**
 * Funciones para gestionar el toque en la pantalla
 */
function gestionarToque() {
    $(document).click(function (event) {
        if (!$(event.target).is("#gameCanvas")) {
            toque(event.clientX, event.clientY);
        }
    });
}

function toque(posx, posy) {
    //console.log("Has hecho click en: " + posx + ", " + posy);
    for (f in arrFly) {
        if (posx > arrFly[f].posX && posx < arrFly[f].posX + arrFly[f].anchura && posy > arrFly[f].posY && posy < arrFly[f].posY + arrFly[f].altura) {
            console.log("le has dado a una mosca");
            arrayManos.push(new Hand(hitImg, posx - hitImg.width / 2, posy - hitImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            puntuacion += 10;
            arrFly.splice(f, 1);
        }
        else {
            arrayManos.push(new Hand(handImg, posx - handImg.width / 2, posy - handImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
        }
    }
    for (b in arrButterfly) {
        if (posx > arrButterfly[b].posX && posx < arrButterfly[b].posX + arrButterfly[b].anchura && posy > arrButterfly[b].posY && posy < arrButterfly[b].posY + arrButterfly[b].altura) {
            console.log("le has dado a una mariposa");
            arrayManos.push(new Hand(hitImg, posx - hitImg.width / 2, posy - hitImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            cuentaMariposas++;
            arrButterfly.splice(b, 1);
        }
        else {
            arrayManos.push(new Hand(handImg, posx - handImg.width / 2, posy - handImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
        }
    }
}

function duracionMano() {
    if (hitDone == 1) {
        console.log("entro aqui");
        gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
        if (hitCount == 50) {
            arrayManos.splice(arrayManos.length - 1, 1);
            hitDone = 0;
        }
        else { hitCount++; }
    }
}

function clearCanvas() {
    backgroundContext.clearRect(0, 0, widthVentana, heightVentana);
    gameContext.clearRect(0, 0, widthVentana, heightVentana);
}

function hideHelptText() {
    $("#helpTextLevel1").hide();
    $("#helpTextLevel2").hide();
}