CANTCHABONCITOS = 200;

chaboncitos = []

function setup() {
	createCanvas(800, 600);
	fill(0,0,0);
	for(var i = 0; i < CANTCHABONCITOS; i++)
		chaboncitos.push(new Chaboncito(random(50,750), random(50,550)));
}

function draw() {
	background(223,223,223);
	for (var i = 0; i < chaboncitos.length; i++)
		chaboncitos[i].draw();

	for (var i = 0; i < chaboncitos.length; i++)
		chaboncitos[i].moveAlMasCercano(chaboncitos, i);
	
	if (mouseIsPressed){
		chaboncitos.push(new Chaboncito(mouseX, mouseY));
	}
}
