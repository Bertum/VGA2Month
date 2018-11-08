//Variables entorno
var temporizador = "";
var controlTiempo = 0;
var tiempoContrareloj = 9000;
var cuentaMariposas = 0;
var limiteMariposas = 3;
var puntuacion = 0;
var level = 1;
var speed = 6;
var gamePaused = false;
var miss = true;
//Variables canvas
var backgroundCanvas = document.getElementById("backgroundCanvas");
var gameCanvas = document.getElementById("gameCanvas");
var helpCanvas = document.getElementById("helpCanvas");
var backgroundContext = backgroundCanvas.getContext("2d"); //indico que el juego será 2D
var gameContext = gameCanvas.getContext("2d"); //indico que el juego será 2D
//Anchura y altura de ventana
var widthVentana = window.innerWidth;
var heightVentana = window.innerHeight;
//Array de mosquitos
var arrFly = new Array();
//Imagen mosquito
var flyImg = new Image();
flyImg.addEventListener('load', function () { }, { once: true });
flyImg.src = "img/mosca_olga.png";
//Array de mariposas
var arrButterfly = new Array();
//Array de avispas
var arrWasp = new Array();
//Imagen mariposa
var butterflyImg = new Image();
butterflyImg.addEventListener('load', function () { }, { once: true });
butterflyImg.src = "img/butterfly.png";
//Imagen avispa
var waspImg = new Image();
waspImg.addEventListener('load', function () { }, { once: true });
waspImg.src = "img/wasp.png";
//Imagen megaMosca
var megaFlyImg = new Image();
megaFlyImg.addEventListener('load', function () { }, { once: true });
megaFlyImg.src = "img/megamosca_olga.png";
//Array de manos
var arrayManos = new Array();
var numManos = 0;
//Imagen mano
var handImg = new Image();
handImg.addEventListener('load', function () { }, { once: true });
handImg.src = "img/hand_small.png";
//Imagen golpe
var hitImg = new Image();
hitImg.addEventListener('load', function () { }, { once: true });
hitImg.src = "img/hit.png";
//hitDone = 0;

//Powerups
var nPowerups = 0;
var powerup = new Array();
var tiempoefecto = 0;
var efecto = 0;
var activo = 0;
//var hitCount = 0;
var golpe = 1;
var vf = 0;
var vb = 0;
var vw = 0;
var slow = 0;
var bonus = 1;

var golpeimg = new Image();
var velbichoimg = new Image();
var doblesimg = new Image();


golpeimg.src = "img/punch_powerup.png";
velbichoimg.src = "img/slow_powerup.png";
doblesimg.src = "img/double_powerup.png";

var punchSound = new Audio("audio/punch.ogg");