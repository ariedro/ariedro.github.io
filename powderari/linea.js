function Linea(punto1, punto2){
	
	this.show = function(){
		fill(0, 0, 255);
		line(punto1.x, punto1.y, punto2.x, punto2.y);
	}
	
}