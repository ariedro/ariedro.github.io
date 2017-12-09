function Canion(posX, posY, angulo){

	LARGO = 15;
	POTENCIA = 20;
	MASA = 5;
	TAMTANQUE = 5;
	INCLINACION = 2;
	
	this.x = posX;
	this.y = posY;
	this.largo = LARGO;
	this.dx = LARGO;
	this.dy = 0;
	this.tx = TAMTANQUE * 3 / 2;
	this.ty = TAMTANQUE;
	this.ang = angulo;
	this.dir = 0;
	this.masa = MASA;
	this.movex = 0;
	this.movey = 0;
	
	this.show = function(){
		stroke(this.masa * 5, 0, 0);
		line(this.x, this.y, this.dx, this.dy);
		stroke(0,0,0);
		quad(this.x - this.tx, this.y, this.x - this.tx - INCLINACION, this.y + this.ty,
			this.x + this.tx + INCLINACION, this.y + this.ty, this.x + this.tx, this.y);
		text(this.x,10,20);
		text(this.y,10,40);
		text(this.ang,10,60);
		text(this.masa,10,80);
		text(this.largo,10,100);
	}
	
	this.setMove = function(unX,unY){
		this.movex = unX;
		this.movey = unY;
	}
	
	this.updateDir = function(){
		this.dx = this.x + (this.largo * Math.cos(this.ang));
		this.dy = this.y + (this.largo * Math.sin(this.ang));
	}
	
	this.move = function(){
		this.x += this.movex;
		this.y += this.movey;
		this.updateDir();
	}
	
	this.setDir = function(dirx, diry){
		this.ang = atan2(diry - this.y, dirx - this.x);
		this.updateDir();
	}
	
	this.crecer = function(crecimiento){
		this.largo += crecimiento;
	}
	
	this.aumentarMasa = function(aumento){
		if ((this.masa + aumento) > 0)
			this.masa += aumento;
	}
	
	this.disparar = function(){
		return new Tiro(this.dx, this.dy, this.ang, POTENCIA, this.masa, soundTiroRebote);
	}
}