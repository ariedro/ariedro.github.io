
var titulos= [	"1x01: Tarjeta de Navidad",
				"1x02: Diagn\xF3stico rectosc\xF3pico",
				"1x03: Seguro de desempleo",
				"1x04: El testigo espa\xF1ol",
				"1x05: El joven simulador",
				"1x06: El peque\xF1o problema del gran hombre",
				"1x07: Fuera de c\xE1lculo",
				"1x08: El pacto Cop\xE9rnico",
				"1x09: El \xFAltimo h\xE9roe",
				"1x10: Los Impresentables",
				"1x11: Colaborador for\xE1neo",
				"1x12: Marcela & Paul",
				"1x13: Un trabajo involuntario",
				"2x01: Los cuatro notables",
				"2x02: Z-9000",
				"2x03: La gargantilla de las cuatro estaciones",
				"2x04: El Clan Motul",
				"2x05: El vengador infantil",
				"2x06: El matrimonio mixto",
				"2x07: Brigada B",
				"2x08: Fin de semana de descanso",
				"2x09: El debilitador social",
				"2x10: El anillo de Salom\xF3n",
				"2x11: El final"];

var videos = [	"Yl-VY6eNivk",
				"3-5_dU7hD9g",
				"3z0tX34GoDs",
				"-Ew4wWfoLv8",
				"oCGRIBWE53c",
				"WzPWJvuT_M8",
				"lUDyPBqHeUI",
				"axqO2XH1mbU",
				"gaizei-jmC8",
				"uX2DNdjeQAU",
				"TtBvxgRmzfk",
				"rnFcy6LO-y8",
				"vlOQi8Lt21s",
				"o8w9iIPbdkg",
				"dWb8fr3ZrYo",
				"0R4nuwpEnjs",
				"vZJFQPPLrFg",
				"Kz3AbZ630kw",
				"E56aE9EMRyM",
				"HHrIYjYGX-I",
				"Ct7C8ZdAhbg",
				"jaqVTzWb_OQ",
				"81q2CZfQe-M",
				"rHs_DBLJIwk"];

var anteriores = [-1,-1,-1,-1,-1];

function contiene(array,n){
	for (var i = 0; i < array.length; i++)
		if (array[i] == n)
			return true;
	return false;
}

function generar() {
	num = Math.floor(Math.random() * videos.length);
	while (contiene(anteriores,num))
		num = Math.floor(Math.random() * videos.length);
	anteriores.shift();
	anteriores.push(num);
	document.getElementById("titulo").innerHTML = titulos[num];
	document.getElementById("video").src = "https://www.youtube.com/embed/" + videos[num];
	document.getElementById("boton").innerHTML = "Tirame otro";
}

