function Chaboncito(posX, posY){
	this.x = posX;
	this.y = posY;
	
	this.draw = function(){
		point(this.x, this.y);
	}
	
	this.moveRandom = function(){
		this.x += random(-1,1);
		this.y += random(-1,1);
	}
	
	this.moveAlMasCercano = function(chaboncitos, actual){
		if (chaboncitos.length == 1)
			return;
		var distancia = 10000;
		var chabonMasCercano;
		for (var i = 0; i < chaboncitos.length; i++){
			if (i == actual)
				continue;
			distActual = sqrt(sq((chaboncitos[i].x) - this.x) + sq((chaboncitos[i].y) - this.y));
			if (distancia > distActual){
				distancia = distActual;
				chabonMasCercano = chaboncitos[i];
			}
		}
		dirx = this.x - chabonMasCercano.x;
		diry = this.y - chabonMasCercano.y;
		hyp = sqrt(dirx*dirx + diry*diry);
		if (hyp > 0){
			dirx /= hyp;
			diry /= hyp;
		}
		if(this.x > 20 && this.x < width - 20)
			this.x += dirx;
		if(this.y > 20 && this.y < height - 20)
			this.y += diry;
	}
	
}