//Variables entorno
var temporizador = "";
var controlTiempo = 0;
var puntuacion = 0;
var level = 1;
var speed = 6;
var gamePaused = false;
//Variables canvas
var backgroundCanvas = document.getElementById("backgroundCanvas");
var gameCanvas = document.getElementById("gameCanvas");
var ammoCanvas = document.getElementById("ammoCanvas");
var backgroundContext = backgroundCanvas.getContext("2d"); //indico que el juego será 2D
var gameContext = gameCanvas.getContext("2d"); //indico que el juego será 2D
var ammoContext = ammoCanvas.getContext("2d"); //indico que el juego será 2D
//Anchura y altura de ventana
var widthVentana = window.innerWidth;
var heightVentana = window.innerHeight;