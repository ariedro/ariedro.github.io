function Tiro(x, y, angulo, potencia, masa){
	
	this.x = x;
	this.y = y;
	this.vx = potencia * Math.cos(angulo);
	this.vy = potencia * Math.sin(angulo);
	this.grav = 0.5;
	this.rebote = -0.7;
	this.m = masa;
	this.tiempo = 0;
	TIEMPOMAX = 100;
	this.destruime = false;
	this.sonido = sonidoRebote;
	
	this.show = function(){
		ellipse(this.x, this.y, this.m * 2, this.m * 2);
		this.tiempo++;
		if (this.tiempo >= TIEMPOMAX){
			this.destruime = true;
		}
	}
	
	this.move = function(){
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
		this.vy = this.vy + this.grav;
		if (this.y >= (height - this.m)){
			this.y = height - this.m;
			this.vy = this.vy * this.rebote;
			this.sonido.play();
		}
		if (this.x >= width - this.m || this.x - this.m <= 0){
			if (this.x >= width - this.m)
				this.x = width - this.m;
			else
				this.x = 0 + this.m;
			this.vx = this.vx * this.rebote;
			this.sonido.play();
		}
	}
	
	this.deberiaDestruirse = function(){
		return this.destruime;
	}
}