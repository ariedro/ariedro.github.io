puntos = [];
lineas = [];
var delta;
var s;

function setup() {
	createCanvas(800, 600);
	fill(0,0,0);
	
	puntos.push(new Punto(0,0,0));
	puntos.push(new Punto(10,0,0));
	puntos.push(new Punto(0,10,0));
	puntos.push(new Punto(10,10,0));
	puntos.push(new Punto(0,0,10));
	puntos.push(new Punto(10,0,10));
	puntos.push(new Punto(0,10,10));
	puntos.push(new Punto(10,10,10));
	
	lineas.push(new Linea(puntos[0], puntos[1]));
	lineas.push(new Linea(puntos[0], puntos[2]));
	lineas.push(new Linea(puntos[0], puntos[4]));
	lineas.push(new Linea(puntos[1], puntos[3]));
	lineas.push(new Linea(puntos[1], puntos[5]));
	lineas.push(new Linea(puntos[2], puntos[3]));
	lineas.push(new Linea(puntos[2], puntos[6]));
	lineas.push(new Linea(puntos[3], puntos[7]));
	lineas.push(new Linea(puntos[4], puntos[5]));
	lineas.push(new Linea(puntos[4], puntos[6]));
	lineas.push(new Linea(puntos[5], puntos[7]));
	lineas.push(new Linea(puntos[6], puntos[7]));
	
	func = [0,0,0,0,0,0];
	
}

function draw() {
	background(223,223,255);
	for(var i = 0; i < lineas.length; i++)
		lineas[i].show(func);
	
	s = "[ " + Math.floor(func[0]) + "  " + Math.floor(func[1]) + "  " + Math.floor(func[2]) + " ]" + "\n" +
		"[ " + Math.floor(func[3]) + "  " + Math.floor(func[4]) + "  " + Math.floor(func[5]) + " ]";
	text(s,10,20);
	
	if (keyIsDown(SHIFT))
		delta = -0.1;
	else
		delta = 0.1;
	
	if (keyIsDown(81))
		func[0] += delta;
	if (keyIsDown(87))
		func[1] += delta;
	if (keyIsDown(69))
		func[2] += delta;
	if (keyIsDown(65))
		func[3] += delta;
	if (keyIsDown(83))
		func[4] += delta;
	if (keyIsDown(68))
		func[5] += delta;

}