function Punto(x, y){
	
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.grav = 0.5;
	this.rebote = -0.9;
	
	this.show = function(){
		fill(0, 0, 0);
		ellipse(this.x, this.y, 1, 1);
	}
	
	this.move = function(){
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
		this.vy = this.vy + this.grav;
		if (this.y >= height){
			this.vy = this.vy * this.rebote;
		}
		if (this.x >= width || this.x <= 0){
			this.vx = this.vx * this.rebote;
		}
	}
}

/*y = yo + vt + 1/2 a*t^2

v = v + at*/