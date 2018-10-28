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
	gestionarToque();
	displayHelpText();
}
function bucle() {
	if (!gamePaused) {
		clearCanvas();
		//Si no estamos parados
		//Generamos moscas cada X
		//if (controlTiempo * Math.random() % 1000) {
		if (controlTiempo % 250 == 0) {
			arrFly.push(new Fly(flyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
			numFly++;
		}
		//Generamos mariposas cada Y
		//if (controlTiempo % 1000) {
		if (controlTiempo % 500 == 0) {
			arrButterfly.push(new Butterfly(butterflyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));
			numButterfly++;
		}
		//Generamos megaMoscas cada Z
		if (controlTiempo % 500) {

		}
		gestionMoscas();
		gestionMariposas();
		//Gestionar la duración de la imagen del golpe
		//duracionMano();
		/*if (hitDone == 1) {
			console.log("entro aqui");
			gameContext.drawImage(arrayManos[arrayManos.length - 1].sprite, arrayManos[arrayManos.length - 1].posX, arrayManos[arrayManos.length - 1].posY);
			/*if (hitCounter == 5) {
				arrayManos.splice(arrayManos.length - 1, 1);
				hitDone = 0;
			}
			else { hitCounter++; }
	}*/
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

function showHelpText() {
	gamePaused = true;
	displayHelpText();
}