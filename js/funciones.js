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
    $("#tiempo").html(Math.round(tiempoSegundos * 100) / 100);
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
    for (var i = 0; i < numFly; i++) {
        if (posx > arrFly[i].posX && posx < arrFly[i].posX + arrFly[i].anchura && posy > arrFly[i].posY && posy < arrFly[i].posY + arrFly[i].altura) {
            console.log("le has dado a una mosca");
            //if (hitDone == 0) {
            arrayManos.push(new Hand(hitImg, posx - hitImg.width / 2, posy - hitImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            //hitDone = 1;
            //}
            //gameContext.drawImage("img/bloodsplat2.png", arrFly[i].posX, arrFly[i].posY);

        }
        else {
            //if (hitDone == 0) {
            arrayManos.push(new Hand(handImg, posx - handImg.width / 2, posy - handImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            //hitDone = 1;
            //}
        }
    }
    for (var i = 0; i < numButterfly; i++) {
        if (posx > arrButterfly[i].posX && posx < arrButterfly[i].posX + arrButterfly[i].anchura && posy > arrButterfly[i].posY && posy < arrButterfly[i].posY + arrButterfly[i].altura) {
            console.log("le has dado a una mariposa");
            //if (hitDone == 0) {
            arrayManos.push(new Hand(hitImg, posx - hitImg.width / 2, posy - hitImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            //hitDone = 1;
            // }
            cuentaMariposas++;
            butterflyImg.src = "img/bloodsplat2.png"
        }
        else {
            // if (hitDone == 0) {
            arrayManos.push(new Hand(handImg, posx - handImg.width / 2, posy - handImg.height / 2));
            gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
            //hitDone = 1;
            // }
        }
    }
}

function duracionMano() {
    if (hitDone == 1) {
        console.log("entro aqui");
        gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
        if (hitCounter == 5) {
            arrayManos.splice(arrayManos.length - 1, 1);
            hitDone = 0;
        }
        else { hitCounter++; }
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