OFF_X = 300;
OFF_Y = 200;

function Linea(punto1, punto2){
	this.p1 = punto1;
	this.p2 = punto2;
	
	this.show = function(rotac, func){
		line(this.p1.fx(rotac, func) + OFF_X, this.p1.fy(rotac, func) + OFF_Y, this.p2.fx(rotac, func) + OFF_X, this.p2.fy(rotac, func) + OFF_Y);
	}
	
	this.get1 = function(){
		return this.p1;
	}
	this.get2 = function(){
		return this.p2;
	}
}