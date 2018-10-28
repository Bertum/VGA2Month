$(document).ready(function () {
	inicio();
});
function inicio() {
	level = localStorage.getItem("level");
	gamePaused = true;
	if (level == 2) {
		$("#tiempo").html(tiempoContrareloj / 1000);
	}
	hideHelptText();
	$("canvas").attr("width", widthVentana);
	$("canvas").attr("height", heightVentana);
	temporizador = setTimeout("bucle()", 1000);
	var musica = document.getElementById("musica");
	musica.volume = 0.05;
	displayHelpText();
}
function bucle() {
	if (!gamePaused) {
		clearCanvas();
		//Si no estamos parados
		//Generamos moscas cada X
		if (controlTiempo % 50 == 0) {
			arrFly.push(new Fly(flyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
		}
		//Generamos mariposas cada Y
		if (controlTiempo % 100 == 0) {
			arrButterfly.push(new Butterfly(butterflyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
		}
		//Generamos megaMoscas cada Z
		if (controlTiempo % 500) {
			//arrFly.push(new Fly(flyImg, Math.random() * widthVentana, Math.random() * heightVentana, 5));
		}
		if(controlTiempo % 700 == 0){
			accelerate();
		}
		gestionMoscas();
		gestionMariposas();
		//Gestionar el control del tiempo en una funcion
		controlTiempo++;
		gestionCronometro();		
		gestionPuntuacion();
		gestionPuntuacionMariposas();
	}
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 15);
	finDelJuego();
}

function finDelJuego() {
	if (cuentaMariposas >= limiteMariposas || tiempoContrareloj - controlTiempo <= 0) {
		window.location.href = "gameOver.html";
	}
}

function showHelpText() {
	gamePaused = true;
	displayHelpText();
}