function Punto(posX, posY, posZ){
	this.x = posX;
	this.y = posY;
	this.z = posZ;
	
	this.fx = function(func){
		return (func[0] * this.x) + (func[1] * this.y) + (func[2] * this.z);
	}
	
	this.fy = function(func){
		return (func[3] * this.x) + (func[4] * this.y) + (func[5] * this.z);
	}
	
	
}