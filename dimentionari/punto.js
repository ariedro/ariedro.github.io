function Punto(posX, posY, posZ){
	this.x = posX;
	this.y = posY;
	this.z = posZ;
	
	this.fx = function(rotac, func){
		funcionRotada = this.transformar(rotac, func);
		return (funcionRotada[0] * this.x) + (funcionRotada[1] * this.y) + (funcionRotada[2] * this.z);
	}
	
	this.fy = function(rotac, func){
		funcionRotada = this.transformar(rotac, func);
		return (funcionRotada[3] * this.x) + (funcionRotada[4] * this.y) + (funcionRotada[5] * this.z);
	}
	
	this.transformar = function(rotac, func){
		funcionFinal = [];
		funcionFinal[0] = (func[0] * rotac[0]) + (func[1] * rotac[3]) + (func[2] * rotac[6]);
		funcionFinal[1] = (func[0] * rotac[1]) + (func[1] * rotac[4]) + (func[2] * rotac[7]);
		funcionFinal[2] = (func[0] * rotac[2]) + (func[1] * rotac[5]) + (func[2] * rotac[8]);
		funcionFinal[3] = (func[3] * rotac[0]) + (func[4] * rotac[3]) + (func[5] * rotac[6]);
		funcionFinal[4] = (func[3] * rotac[1]) + (func[4] * rotac[4]) + (func[5] * rotac[7]);
		funcionFinal[5] = (func[3] * rotac[2]) + (func[4] * rotac[5]) + (func[5] * rotac[8]);
		return funcionFinal;
	}
}


/*

[0 1 2]   [0 1 2]   [x]
[3 4 5] x [3 4 5] x [y]
          [6 7 8]   [z]

 2 x 3     3 x 3   3 x 1
*/