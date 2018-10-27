$(document).ready(function () {
	inicio();
});
function inicio() {
	level = localStorage.getItem("level");
	/*gamePaused = true;
	if (level == 2) {
		$("#tiempo").html(tiempoContrareloj/1000);
	}*/
	$("canvas").attr("width", widthVentana);
	$("canvas").attr("height", heightVentana);
	temporizador = setTimeout("bucle()", 1000);
	var musica = document.getElementById("musica");
	musica.volume = 0.05;
	displayHelpText();
}
function bucle() {
	if (!gamePaused) {
		//Si no estamos parados
		//Generamos moscas cada X
		if(controlTiempo*Math.random()%3){
			arrFly.push(new Fly (flyImg, Math.random()*widthVentana, Math.random()*heightVentana, 1));
		}
		//Generamos mariposas cada Y
		if(controlTiempo%100){

		}
		//Generamos megaMoscas cada Z
		if(controlTiempo%500){

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