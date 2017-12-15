function Enemigo(x, y){
	
	VEL = 0.02;
	TAM = 10;
	SHAKE = 10;
	
	this.x = x;
	this.y = y;
	this.vx;
	this.vy;
	this.vida = 100;
	this.destruime = false;
	
	this.show = function(){
		fill(150,0,0);
		triangle(this.x, this.y - TAM, this.x - TAM, this.y + TAM, this.x + TAM, this.y + TAM);
		fill(0,0,0);
	}
	
	this.move = function(playerx, playery){
		this.vx = (playerx - this.x) * VEL + random(-SHAKE,SHAKE);
		this.vy = (playery - this.y) * VEL + random(-SHAKE,SHAKE);
		if (this.y < (height - TAM) && (this.y - TAM) > 0){
			this.y = this.y + this.vy;
		}
		if (this.x < (width - TAM) && (this.x - TAM) > 0){
			this.x = this.x + this.vx;
		}
	}
	
	this.lePego = function(tiro){
		if ((tiro.x + tiro.m) > this.x - TAM && (tiro.x - tiro.m) < this.x + TAM)
			if ((tiro.y - tiro.m) < this.y + TAM && (tiro.y + tiro.m) > this.y - TAM){
				this.vida -= tiro.m * 5;
				return true;
			}
		return false;
	}
	
	this.deberiaDestruirse = function(){
		return (this.vida < 1);
	}
}