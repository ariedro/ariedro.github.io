
var puntos = [];
var centromasa;

function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 50; i++) {
		puntos[i] = new Punto(random(0,width),random(-100,0));
	}
	centromasa = new CentroMasa(puntos);
}

function draw() {
	background(255,223,243);
	for (var i = 0; i < puntos.length; i++) {
		puntos[i].show();
		puntos[i].move();
	}
	centromasa.show();
}

function keyPressed() {
	if (key == 'Z') {
		for (var i = 0; i < 50; i++) {
			puntos[i].x = random(0,width);
			puntos[i].y = random(-100,0);
			puntos[i].vx = 0;
			puntos[i].vy = 0;
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
