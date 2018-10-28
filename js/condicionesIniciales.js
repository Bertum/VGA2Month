//Variables entorno
var temporizador = "";
var controlTiempo = 0;
var tiempoContrareloj = 90000;
var cuentaMariposas = 0;
var limiteMariposas = 3;
var puntuacion = 0;
var level = 1;
var speed = 6;
var gamePaused = false;
//Variables canvas
var backgroundCanvas = document.getElementById("backgroundCanvas");
var gameCanvas = document.getElementById("gameCanvas");
var helpCanvas = document.getElementById("helpCanvas");
var topCanvas = document.getElementById("topCanvas");
var backgroundContext = backgroundCanvas.getContext("2d"); //indico que el juego será 2D
var gameContext = gameCanvas.getContext("2d"); //indico que el juego será 2D
var topBarContext = topCanvas.getContext("2d");
topBarContext.fillStyle = "white";
topBarContext.font = "30px BlockCartoon";
//Anchura y altura de ventana
var widthVentana = window.innerWidth;
var heightVentana = window.innerHeight;
//Array de mosquitos
var arrFly = new Array();
var numFly = 0;
//Imagen mosquito
var flyImg = new Image();
flyImg.addEventListener('load', function () { }, { once: true });
flyImg.src = "img/fly_small.png";
//Array de mariposas
var arrButterfly = new Array();
var numButterfly = 0;
//Imagen mariposa
var butterflyImg = new Image();
butterflyImg.addEventListener('load', function () { }, { once: true });
butterflyImg.src = "img/butterfly.png";
//Array de manos
var arrayManos = new Array();
var numManos = 0;
//Imagen mano
var hitImg = new Image();
hitImg.addEventListener('load', function () { }, { once: true });
hitImg.src = "img/hit.png";