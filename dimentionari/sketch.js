puntos = [];
lineas = [];
var delta;
var s;

DELTATRANS = 0.5;

var angX = 0;
var angY = 0;
var angZ = 0;

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
	rotac = [1,0,0, 0,1,0, 0,0,1];
	
}

function draw() {
	background(223,223,255);
	for(var i = 0; i < lineas.length; i++)
		lineas[i].show(rotac,func);
	
	s = "[ " + Math.floor(func[0]) + "  " + Math.floor(func[1]) + "  " + Math.floor(func[2]) + " ]" + "\n" +
		"[ " + Math.floor(func[3]) + "  " + Math.floor(func[4]) + "  " + Math.floor(func[5]) + " ]" + "\n" + 
		"( " + puntos[0].x + "  " + puntos[0].y + "  " + puntos[0].z + " )";
	text(s,10,20);
	
	s2 = "[ " + Math.floor(rotac[0]) + "  " + Math.floor(rotac[1]) + "  " + Math.floor(rotac[2]) + " ]" + "\n" +
		"[ " + Math.floor(rotac[3]) + "  " + Math.floor(rotac[4]) + "  " + Math.floor(rotac[5]) + " ]" + "\n" + 
		"[ " + Math.floor(rotac[6]) + "  " + Math.floor(rotac[7]) + "  " + Math.floor(rotac[8]) + " ]";
	text(s2,80,20);
	
	
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
	if (keyIsDown(90)){
		angX += 0.1;
		if (angX > (2 * PI))
			angX = 0;
		rotac[0] = 1;
		rotac[1] = 0;
		rotac[2] = 0;
		rotac[3] = 0;
		rotac[4] = Math.cos(angX);
		rotac[5] = -Math.sin(angX);
		rotac[6] = 0;
		rotac[7] = Math.sin(angX);
		rotac[8] = Math.cos(angX);
	}
	if (keyIsDown(88)){
		angY += 0.1;
		if (angY > (2 * PI))
			angY = 0;
		rotac[0] = Math.cos(angY);
		rotac[1] = 0;
		rotac[2] = Math.sin(angY);
		rotac[3] = 0;
		rotac[4] = 1;
		rotac[5] = 0;
		rotac[6] = -Math.sin(angY);
		rotac[7] = 0;
		rotac[8] = Math.cos(angY);
	}
	if (keyIsDown(67)){
		angZ += 0.1;
		if (angZ > (2 * PI))
			angZ = 0;
		rotac[0] = Math.cos(angZ);
		rotac[1] = -Math.sin(angZ);
		rotac[2] = 0;
		rotac[3] = Math.sin(angZ);
		rotac[4] = Math.cos(angZ);
		rotac[5] = 0;
		rotac[6] = 0;
		rotac[7] = 0;
		rotac[8] = 1;
	}
	
	for(var i = 0; i < puntos.length; i++){
		if (keyIsDown(85))
			puntos[i].x += DELTATRANS;
		if (keyIsDown(74))
			puntos[i].x -= DELTATRANS;
		if (keyIsDown(73))
			puntos[i].y += DELTATRANS;
		if (keyIsDown(75))
			puntos[i].y -= DELTATRANS;
		if (keyIsDown(79))
			puntos[i].z += DELTATRANS;
		if (keyIsDown(76))
			puntos[i].z -= DELTATRANS;
	}
	
	if (keyIsDown(ENTER)){
		func[0] = random(-10,10);
		func[1] = random(-10,10);
		func[2] = random(-10,10);
		func[3] = random(-10,10);
		func[4] = random(-10,10);
		func[5] = random(-10,10);
	}
}