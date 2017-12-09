
var puntos = [];
var centromasa;
var lineas = [];
const CANTPUNTOS = 10;
const STARTY = -500;
const MAXMASA = 100;

var fondoR = 255;

function preload() {
	soundFormats('mp3', 'ogg');
	mySound = loadSound('fondo.mp3');
	mySound.setLoop(true);
}

function setup() {
	createCanvas(800, 600);
	for (var i = 0; i < CANTPUNTOS; i++) {
		puntos[i] = new Punto(random(MAXMASA,width - MAXMASA),random(STARTY,0), random(0,MAXMASA));
	}
	centromasa = new CentroMasa(puntos);
	for (var i = 0; i < puntos.length; i++){
		for (var j = 0; j < puntos.length; j++){
			if (i != j){
				lineas[i] = new Linea(puntos[i], puntos[j]);
			}
		}
	}
}

function draw() {
	background(fondoR,223,243);
	for (var i = 0; i < puntos.length; i++) {
		puntos[i].show();
		puntos[i].move();
	}
	centromasa.show();
	for (var i = 0; i < lineas.length; i++){
		lineas[i].show();
	}
}

function keyPressed() {
	if (key == 'Z') {
		for (var i = 0; i < CANTPUNTOS; i++) {
			puntos[i].x = random(MAXMASA,width);
			puntos[i].y = random(STARTY,0);
			puntos[i].vx = 0;
			puntos[i].vy = 0;
		}
	}
	if (key == 'P') {
		for (var i = 0; i < CANTPUNTOS; i++) {
			puntos[i].activarPortal();
		}
		if (mySound.isPlaying()){
			mySound.stop();
			fondoR = 255;
		}
		else{
			mySound.setVolume(1);
			mySound.play();
			fondoR = 0;
		}
	}

	if (keyCode === RIGHT_ARROW) {
		for (var i = 0; i < puntos.length; i++) {
			puntos[i].vx++;
		}
	} else if (keyCode === LEFT_ARROW) {
		for (var i = 0; i < puntos.length; i++) {
			puntos[i].vx--;
		}
	}
}
