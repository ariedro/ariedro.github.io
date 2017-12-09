
var tiros = [];
var canion;

function preload() {
	soundFormats('wav');
	sonidoRebote = loadSound('rebote.wav');
}

function setup() {
	createCanvas(800, 600);
	fill(0,0,0);
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
		canion.setMove(0,0);
	}
}

function keyPressed() {
	if (key == 'W') canion.setMove(0,-5);
	if (key == 'S') canion.setMove(0,5);
	if (key == 'D') canion.setMove(5,0);
	if (key == 'A') canion.setMove(-5,0);
	
	if (key == 'O'){
		canion.aumentarMasa(1);
	}
	if (key == 'P'){
		canion.aumentarMasa(-1);
	}
	if (keyCode === RIGHT_ARROW) {
		//canion.setDir(0.1);
		console.log("der");
	} else if (keyCode === LEFT_ARROW) {
		//canion.setDir(-0.1);
		console.log("izq");
	} else if (keyCode === UP_ARROW){
		canion.crecer(5);
	} else if (keyCode === DOWN_ARROW){
		canion.crecer(-5);
	}
}

function mouseMoved(){
	canion.setDir(mouseX, mouseY);
}

function mousePressed(){
	tiros.push(canion.disparar());
}