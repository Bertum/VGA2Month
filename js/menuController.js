//Ocultamos el contenedor de creditos
$("#creditsContainer").hide();
//Agregamos la puntuacion a la pantalla de Game Over
$("#puntuacionGameOver").html("Tu puntuacion esta vez ha sido de "+localStorage.getItem("puntuacion")+" puntos, Enhorabuena!");
//Gestionamos el tamaño de la pantalla
var widthVentana = window.innerWidth;
var heightVentana = window.innerHeight;
var canvas = document.getElementById("backgroundMainMenu");
canvas.width = widthVentana;
canvas.height = heightVentana;

/**
 * Funcion para gestionar el comienzo de un nuevo juego
 * @param {*} level 
 */
function launchLevel(level) {
    localStorage.setItem("level", level);
    window.location.href = "mainGame.html"
}

/**
 * Muestra el menu de creditos
 */
function openCredits() {
    $("#buttonsContainer").hide();
    $("#creditsContainer").show();
}

/**
 * Oculta los creditos
 */
function backToMain() {
    $("#creditsContainer").hide();
    $("#buttonsContainer").show();
}

/**
 * Vuelta al menu de inicio
 */
function resetGame() {
    window.location.href = "index.html";
}

/**
 * Repite el juego
 */
function retry (){
    window.location.href = "mainGame.html"
}