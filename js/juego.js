$(document).ready(function () {
	inicio();
});
function inicio() {
	level = localStorage.getItem("level");
	gamePaused = true;
	if (level == 2) {
		$("#tiempo").apped(tiempoContrareloj/1000);
		//Desplegamos texto de ayuda de nivel 2
	}
	else{
		//Desplegamos texto de ayuda de nivel 1

	}
	$("canvas").attr("width", widthVentana);
	$("canvas").attr("height", heightVentana);
	temporizador = setTimeout("bucle()", 1000);
	var musica = document.getElementById("musica");
	musica.volume = 0.05;
}
function bucle() {
	if (!gamePaused) {
		//Si no estamos parados
		//Generamos moscas cada X
		if(controlTiempo*Math.random()%3){

		}
		//Generamos mariposas cada Y
		if(controlTiempo%100){

		}
		//Generamos megaMoscas cada Z
		if(controlTiempo%500){

		}
		//Gestionar el control del tiempo en una funcion
		controlTiempo++;
		gestionCronometro();
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