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
    $("#tiempo").html(aux);
}

/**
 * Funcion para gestionar la puntuacion
 */
function gestionPuntuacion() {
    $("#puntuacion").html(puntuacion.toString());
}

/**
 * Funcion para gestionar el numero de mariposas eliminadas
 */
function gestionPuntuacionMariposas() {
    $("#mariposas").html("");
    for (var i = 0; i < cuentaMariposas; i++) {
        $("#mariposas").append('<img src="img/butterfly.png" />');
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
        if (CheckOutScreen(arrFly[f])) {
            arrFly.splice(f, 1);
        }
    }
}

/**
 * Funcion para gestionar el display de las mariposas
 */
function gestionMariposas() {
    $('#gameCanvas').html("");
    for (var b in arrButterfly) {
        arrButterfly[b].movement();
        if (CheckOutScreen(arrButterfly[b])) {
            arrButterfly.splice(b, 1);
        }
    }
}

/**
 * Funcion para gestionar el display de las avispas
 */
function gestionAvispas() {
    for (var w in arrWasp) {
        arrWasp[w].movement();
        if (CheckOutScreen(arrWasp[w])) {
            arrWasp.splice(w, 1);
        }
    }
}

/**
 * Funcion que comprueba si el sprite sale de la pantalla para eliminarlo
 */
function CheckOutScreen(insecto) {
    var out = false;
    if (insecto.posX + insecto.anchura < 0 || insecto.posX - insecto.anchura > window.innerWidth
        || insecto.posY + insecto.altura < 0 || insecto.posY - insecto.altura > window.innerHeight) {
        out = true;
    }
    return out;
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
    for (var w in arrWasp) {
        arrWasp[w].accelerate((controlTiempo % 700 + 1) * speed);
    }
}

/**
 * Funciones para gestionar el toque en la pantalla
 */
function gestionarToque() {
    $(document).click(function (event) {
        //$("#contieneAudio").append('<audio id="punch" src="audio/punch.ogg"  autoplay></audio>');
        punchSound.play();
        if (!$(event.target).is("#gameCanvas")) {
            toque(event.clientX, event.clientY);
        }
    });
}

function toque(posx, posy) {
    miss = true;
    //console.log("Has hecho click en: " + posx + ", " + posy);
    for (f in arrFly) {
        if (posx > arrFly[f].posX && posx < arrFly[f].posX + arrFly[f].anchura && posy > arrFly[f].posY && posy < arrFly[f].posY + arrFly[f].altura) {
            console.log("le has dado a una mosca");
            //console.log("golpe: " + golpe);
            insectoGolpeado(arrFly[f].posX, arrFly[f].posY);
            if (arrFly[f].vida == 1) { puntuacion += (10) * bonus; }
            else { puntuacion += (golpe * 10) * bonus; }
            arrFly[f].vida = arrFly[f].vida - golpe;
            if (arrFly[f].vida <= 0) {
                arrFly.splice(f, 1);
            }
        }
    }
    for (b in arrButterfly) {
        if (posx > arrButterfly[b].posX && posx < arrButterfly[b].posX + arrButterfly[b].anchura && posy > arrButterfly[b].posY && posy < arrButterfly[b].posY + arrButterfly[b].altura) {
            console.log("le has dado a una mariposa");
            insectoGolpeado(arrButterfly[b].posX, arrButterfly[b].posY);
            cuentaMariposas++;
            arrButterfly.splice(b, 1);
        }
    }
    for (w in arrWasp) {
        if (posx > arrWasp[w].posX && posx < arrWasp[w].posX + arrWasp[w].anchura && posy > arrWasp[w].posY && posy < arrWasp[w].posY + arrWasp[w].altura) {
            console.log("le has dado a una avispa");
            insectoGolpeado(arrWasp[w].posX, arrWasp[w].posY);
            puntuacion += (30) * bonus;
            arrWasp.splice(w, 1);
        }
    }
    for (p in powerup) {
        if (posx > powerup[p].posX && posx < powerup[p].posX + powerup[p].anchura && posy > powerup[p].posY && posy < powerup[p].posY + powerup[p].altura) {
            //Activamos el efecto
            activo = 1;
            activarPowerup(powerup[p].efecto);
            //Borramos el powerup
            powerup.splice(p, 1);
            break;
        }
    }
    if (miss) {
        missInsecto(posx, posy);
    }
}

function insectoGolpeado(x, y) {
    miss = false;
    $("#theHandSplash").css("left", x + "px");
    $("#theHandSplash").css("top", y + "px");
    $("#theHandSplash").addClass("handCooldown");
    setTimeout(function () { $("#theHandSplash").removeClass("handCooldown"); }, 200);
}

function missInsecto(x, y) {
    miss = true;
    $("#theHand").css("left", x + "px");
    $("#theHand").css("top", y + "px");
    $("#theHand").addClass("handCooldown");
    setTimeout(function () { $("#theHand").removeClass("handCooldown"); }, 200);
}

function clearCanvas() {
    backgroundContext.clearRect(0, 0, widthVentana, heightVentana);
    gameContext.clearRect(0, 0, widthVentana, heightVentana);
}

function hideHelptText() {
    $("#helpTextLevel1").hide();
    $("#helpTextLevel2").hide();
}

function randomRangeNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function spawnPowerup() {
    //Solo 1 powerup en pantalla a la vez
    if (nPowerups == 0) {
        var image = new Image();
        var rnd = randomRangeNumber(0, 2);
        switch (rnd) {
            case 0: image = golpeimg; efecto = 1;
                break;
            case 1: image = velbichoimg; efecto = 2;
                break;
            case 2: image = doblesimg; efecto = 3;
                break;
        }
        nPowerups = 1;
        powerup.push(new Powerup(image, Math.random() * widthVentana - 200, Math.random() * heightVentana - 200, efecto));
        console.log("Ha aparecido el powerup " + efecto);
    }
}

function gestionPowerups() {
    //console.log(powerup);
    for (var p in powerup) {
        gameContext.drawImage(powerup[p].sprite, powerup[p].posX, powerup[p].posY)
        //console.log("tiempo efecto: " + tiempoefecto);
    }
    if (activo == 1) {
        tiempoefecto++;
        drawPowerUpActive();
    }
    if (tiempoefecto >= 250) {
        console.log("desactivamos el powerup " + efecto);
        desactivarPowerup(efecto);
        nPowerups = 0;
        tiempoefecto = 0;
    }
}

function activarPowerup(efecto) {
    switch (efecto) {
        case 1:
            golpe = 5;
            break;
        case 2:
            slow = 1;
            speed = 1;
            for (var f in arrFly) {
                vf = arrFly[f].velocX;
                arrFly[f].accelerate(speed);
            }
            for (var b in arrButterfly) {
                vb = arrButterfly[b].velocX;
                arrButterfly[b].accelerate(speed);
            }
            for (var w in arrWasp) {
                vw = arrWasp[w].velocX;
                arrWasp[w].accelerate(speed);
            }
            break;
        case 3:
            bonus = 2;
            break;
    }
}

function desactivarPowerup(efecto) {
    activo = 0;
    switch (efecto) {
        case 1:
            golpe = 1;
            break;
        case 2:
            slow = 0;
            speed = 6;
            for (var f in arrFly) {
                arrFly[f].accelerate(vf);
            }
            for (var b in arrButterfly) {
                arrButterfly[b].accelerate(vb);
            }
            for (var w in arrWasp) {
                arrWasp[w].accelerate(vw);
            }
            console.log(slow);
            break;
        case 3:
            bonus = 1;
            break;
    }
}

//Funcion con la que borraremos los sonidos 
function borraSonidos() {
    $("#contieneAudio").html("");
}

function drawPowerUpActive() {
    gameContext.strokeStyle = "#FF0000";
    gameContext.lineWidth = 15;
    gameContext.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}