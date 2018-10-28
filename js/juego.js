$(document).ready(function () {
	inicio();
});
function inicio() {
	level = localStorage.getItem("level");
	/*gamePaused = true;
	if (level == 2) {
		$("#tiempo").html(tiempoContrareloj/1000);
	}*/
	$("#helpTextLevel1").hide();
	$("#helpTextLevel1").hide();
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
		if (controlTiempo * Math.random() % 1000) {
			arrFly.push(new Fly(flyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
		}
		//Generamos mariposas cada Y
		if (controlTiempo % 1000) {
			arrButterfly.push(new Butterfly(butterflyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
		}
		//Generamos megaMoscas cada Z
		if (controlTiempo % 500) {

		}
		gestionMoscas();
		gestionMariposas();
		//Gestionar el control del tiempo en una funcion
		controlTiempo++;
		gestionCronometro();
	}
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 15);
	finDelJuego();
}

function finDelJuego() {
	if (cuentaMariposas >= limiteMariposas) {
		window.location.href = "gameOver.html";
	}
}