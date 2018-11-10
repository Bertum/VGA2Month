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
		if (controlTiempo % 10 == 0) {
			arrFly.push(new Fly(flyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));

		}
		//Generamos mariposas cada Y
		//if (controlTiempo % 1000) {
		if (controlTiempo % 150 == 1) {
			arrButterfly.push(new Butterfly(butterflyImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));

		}
		if (controlTiempo % 300 == 50) {
			arrWasp.push(new Wasp(waspImg, Math.random() * widthVentana, Math.random() * heightVentana, 1));

		}
		//Generamos megaMoscas cada Z
		if (controlTiempo % 500 == 200) {
			arrFly.push(new Fly(megaFlyImg, Math.random() * widthVentana, Math.random() * heightVentana, 5));
		}
		if ((controlTiempo % 700 == 0) && (slow == 0)) {
			//console.log("sigue acelerando");
			accelerate();
		}
		if (controlTiempo % 500 == 499) {
			spawnPowerup();
		}
		/*if (controlTiempo % 500 == 0) {
			borraSonidos();
		}*/
		gestionMoscas();
		gestionMariposas();
		gestionAvispas();
		gestionPowerups();
		//Gestionar la duración de la imagen del golpe
		//duracionMano();
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
	if (cuentaMariposas >= limiteMariposas || (tiempoContrareloj - controlTiempo <= 0 && level == 2)) {
		gamePaused = true;
		var database = openDatabase('scores', '1.0','Puntuacion del juego', 2* 1024 * 1024);
		
		database.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS scores (id unique, puntos, mariposas, level)');
			tx.executeSql('INSERT INTO scores (puntos, mariposas, level) VALUES ("'+puntuacion+'", "'+cuentaMariposas+'", "'+level+'")'); 
		});
		localStorage.setItem("puntuacion", puntuacion);
		window.location.href = "gameOver.html";
	}
}

function showHelpText() {
	gamePaused = true;
	displayHelpText();
}