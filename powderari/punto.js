function Punto(x, y, m){
	
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.grav = 0.5;
	this.rebote = -0.9;
	this.m = m;
	
	this.show = function(){
		fill(0, 0, 0);
		ellipse(this.x, this.y, this.m, this.m);
	}
	
	this.move = function(){
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
		this.vy = this.vy + this.grav;
		if (this.y >= (height - this.m)){
			this.vy = this.vy * this.rebote;
		}
		if (this.x >= width - this.m || this.x - this.m <= 0){
			this.vx = this.vx * this.rebote;
		}
	}
}

/*y = yo + vt + 1/2 a*t^2

v = v + at*/