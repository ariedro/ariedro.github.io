
CANTENEMIGOS = 50;

var tiros = [];
var canion;
var enemigos = [];

function preload() {
	soundFormats('wav');
	soundTiroDisparo = loadSound('shot.wav');
	soundTiroRebote = loadSound('rebote.wav');
	soundTiroRebote.setVolume(0.5);
	soundEnemigoHit = loadSound('hit.wav');	
	soundEnemigoHit.setVolume(0.10);
	soundEnemigoMuere = loadSound('enemydie.wav');;
	soundEnemigoMuere.setVolume(0.5);
}

function enemyWave(){
	for (var i = 0; i < CANTENEMIGOS; i++)
		enemigos[i] = new Enemigo(random(15,width - 15), random(15, height -15));
}

function setup() {
	createCanvas(800, 600);
	fill(0,0,0);
	canion = new Canion(width / 2, height / 2, 5);
	enemyWave();
}

function draw() {
	background(255,255,223);
	canion.show();
	canion.move();
	for (var i = 0; i < enemigos.length; i++){
		enemigos[i].show();
		enemigos[i].move(canion.x, canion.y);
	}
	for (var i = 0; i < tiros.length; i++) {
		for (var j = 0; j < enemigos.length; j++){
			if (enemigos[j].lePego(tiros[i])){
				tiros[i].setDestruccion();
				soundEnemigoHit.play();
			}
		}
		tiros[i].show();
		tiros[i].move();
	}
	
	for (var i = tiros.length - 1; i >= 0; i--){
		if (tiros[i].deberiaDestruirse())
			tiros.splice(i,1);
	}
	for (var i = enemigos.length - 1; i >= 0; i--){
		if (enemigos[i].deberiaDestruirse()){
			soundEnemigoMuere.play();
			enemigos.splice(i,1);
		}
	}
	if (enemigos.length == 0){
		enemyWave();
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
	tiros.push(canion.disparar(soundTiroRebote));
	soundTiroDisparo.play();
}

function mouseWheel(event) {
	canion.aumentarMasa(-event.delta);
}