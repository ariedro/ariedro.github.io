function CentroMasa(puntos){
	
	this.show = function(){
		var x = 0;
		var y = 0;
		var m = 0;
		for (var i = 0; i < puntos.length; i++) {
			x += (puntos[i].x * puntos[i].m);
			y += (puntos[i].y * puntos[i].m);
			m += puntos[i].m
		}
		x /= m;
		y /= m;
		fill(255, 50, 50);
		ellipse(x, y, 5, 5);

	}
}

/*

x = sum(m*r) / sum(m)

*/