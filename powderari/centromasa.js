function CentroMasa(puntos){
	
	this.show = function(){
		var x = 0;
		var y = 0;
		for (var i = 0; i < puntos.length; i++) {
			x += puntos[i].x;
			y += puntos[i].y;
		}
		console.log(x);
		console.log(y);
		x /= puntos.length;
		y /= puntos.length;
		fill(255, 50, 50);
		ellipse(x, y, 5, 5);

	}
}

/*

x = sum

*/