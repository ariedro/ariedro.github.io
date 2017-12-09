function Canion(posX, posY, angulo){

	LARGO = 15;
	POTENCIA = 20;
	MASA = 5;
	
	this.x = posX;
	this.y = posY;
	this.largo = LARGO;
	this.dx = LARGO;
	this.dy = 0;
	this.ang = angulo;
	this.dir = 0;
	this.masa = MASA;
	
	this.show = function(){
		stroke(this.masa * 5, 0, 0);
		line(this.x, this.y, this.dx, this.dy);
		stroke(0,0,0);
	}
	
	this.move = function(){
		this.ang += this.dir;
		this.dx = this.x + (this.largo * Math.cos(this.ang));
		this.dy = this.y + (this.largo * Math.sin(this.ang));
	}
	
	this.setDir = function(direccion){
		this.dir = direccion;
	}
	
	this.crecer = function(crecimiento){
		this.largo += crecimiento;
	}
	
	this.aumentarMasa = function(aumento){
		this.masa += aumento;
	}
	
	this.disparar = function(){
		return new Tiro(this.dx, this.dy, this.ang, POTENCIA, this.masa);
	}
}