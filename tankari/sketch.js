
var tiros = [];
var canion;

function preload() {
	soundFormats('wav');
	sonidoDisparo = loadSound('shot.wav');
	sonidoRebote = loadSound('rebote.wav');
}

function setup() {
	createCanvas(800, 600);
	canion = new Canion(width / 2, height / 2, 5);
}

function draw() {
	background(255,255,223);
	canion.show();
	canion.move();
	for (var i = 0; i < tiros.length; i++) {
		tiros[i].show();
		tiros[i].move();
	}
	for (var i = tiros.length - 1; i >= 0; i--){
		if (tiros[i].deberiaDestruirse())
			tiros.splice(i,1);
	}
}

function keyReleased() {
	if (key != ' ') {
		canion.setDir(0);
	}
}

function keyPressed() {
	if (key == 'Z' || key == 'X') {
		tiros.push(canion.disparar());
		sonidoDisparo.play();
	}
	if (keyCode === RIGHT_ARROW) {
		canion.setDir(0.1);
	} else if (keyCode === LEFT_ARROW) {
		canion.setDir(-0.1);
	} else if (keyCode === UP_ARROW){
		canion.crecer(5);
	} else if (keyCode === DOWN_ARROW){
		canion.crecer(-5);
	}
}