$(document).ready(function () {
	inicio();
});
function inicio() {
	level = localStorage.getItem("level");
	gamePaused = true;
	if (level == 2) {
		
	}
	$("canvas").attr("width", widthVentana);
	$("canvas").attr("height", heightVentana);
	temporizador = setTimeout("bucle()", 1000);
	var musica = document.getElementById("musica");
	musica.volume = 0.05;
}
function bucle() {
	if (!gamePaused) {
		controlTiempo++;
	}
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 15);
	finDelJuego();
}

function finDelJuego() {
	/*if () {
		window.location.href = "gameOver.html";
	}*/
}