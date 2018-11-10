//Ocultamos el contenedor de creditos
$("#creditsContainer").hide();
//Ocultamos el contenedor de puntuaciones
$("#scoresContainer").hide();
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
 * Muestra el menu de creditos
 */
function openScoreList() {
    $("#buttonsContainer").hide();
    $("#scoresContainer").show();
    /*
    var database = openDatabase('puntuaciones', '1.0','Puntuacion del juego', 2* 1024 * 1024);
		database.transaction(function (tx) { 
		tx.executeSql('SELECT * FROM puntuaciones ORDER BY puntos ASC LIMIT 5', [], function (tx, results) { 
		  var len = results.rows.length, i; 
		  for (i = 0; i < len; i++) { 
			 $("#scoresPanel").append(i+".- "results.rows.item(i).puntos+"</br>"); 
		  } 

		}, null); 
		});
    */
}

/**
 * Oculta los creditos
 */
function backToMainCredits() {
    $("#creditsContainer").hide();
    $("#buttonsContainer").show();
}

/**
 * Oculta las puntuaciones
 */
function backToMainScores() {
    $("#scoresContainer").hide();
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