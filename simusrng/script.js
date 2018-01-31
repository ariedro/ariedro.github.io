
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

var videos = [	"https://www.youtube.com/embed/Yl-VY6eNivk",
				"https://www.youtube.com/embed/3-5_dU7hD9g",
				"https://www.youtube.com/embed/3z0tX34GoDs",
				"https://www.youtube.com/embed/-Ew4wWfoLv8",
				"https://www.youtube.com/embed/oCGRIBWE53c",
				"https://www.youtube.com/embed/WzPWJvuT_M8",
				"https://www.youtube.com/embed/lUDyPBqHeUI",
				"https://www.youtube.com/embed/axqO2XH1mbU",
				"https://www.youtube.com/embed/gaizei-jmC8",
				"https://www.youtube.com/embed/uX2DNdjeQAU",
				"https://www.youtube.com/embed/TtBvxgRmzfk",
				"https://www.youtube.com/embed/rnFcy6LO-y8",
				"https://www.youtube.com/embed/vlOQi8Lt21s",
				"https://www.youtube.com/embed/o8w9iIPbdkg",
				"https://www.youtube.com/embed/dWb8fr3ZrYo",
				"https://www.youtube.com/embed/0R4nuwpEnjs",
				"https://www.youtube.com/embed/vZJFQPPLrFg",
				"https://www.youtube.com/embed/Kz3AbZ630kw",
				"https://www.youtube.com/embed/E56aE9EMRyM",
				"https://www.youtube.com/embed/HHrIYjYGX-I",
				"https://www.youtube.com/embed/Ct7C8ZdAhbg",
				"https://www.youtube.com/embed/jaqVTzWb_OQ",
				"https://www.youtube.com/embed/81q2CZfQe-M",
				"https://www.youtube.com/embed/rHs_DBLJIwk"];

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
	document.getElementById("video").src = videos[num];
}

