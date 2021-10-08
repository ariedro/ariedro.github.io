/*

    Tareas:
    ------

    1) Modificar a función "generarSuperficie" para que tenga en cuenta los parametros filas y columnas al llenar el indexBuffer
       Con esta modificación deberían poder generarse planos de N filas por M columnas

    2) Modificar la funcion "dibujarMalla" para que use la primitiva "triangle_strip"

    3) Crear nuevos tipos funciones constructoras de superficies

        3a) Crear la función constructora "Esfera" que reciba como parámetro el radio

        3b) Crear la función constructora "TuboSenoidal" que reciba como parámetro la amplitud de onda, longitud de onda, radio del tubo y altura.
        (Ver imagenes JPG adjuntas)
        
        
    Entrega:
    -------

    - Agregar una variable global que permita elegir facilmente que tipo de primitiva se desea visualizar [plano,esfera,tubosenoidal]
    
*/

var superficie3D;
var mallaDeTriangulos;

function crearGeometria() {
  switch (forma) {
    case "esfera":
      superficie3D = new Esfera(radio);
      break;
    case "tubo":
      superficie3D = new TuboSinusoidal(amplitud, longitud, radio, altura);
      break;
    default:
      superficie3D = new Plano(3, 3);
  }
  mallaDeTriangulos = generarSuperficie(superficie3D, filas, columnas);
}

function dibujarGeometria() {
  dibujarMalla(mallaDeTriangulos);
}

class Forma {
  getNormal = function (u, v) {
    return [0, 1, 0];
  };

  getCoordenadasTextura = function (u, v) {
    return [u, v];
  };
}

class Plano extends Forma {
  constructor(ancho, largo) {
    super();
    this.ancho = ancho;
    this.largo = largo;
  }
  getPosicion = function (u, v) {
    var x = (u - 0.5) * this.ancho;
    var z = (v - 0.5) * this.largo;
    return [x, 0, z];
  };
}

class Esfera extends Forma {
  constructor(radio) {
    super();
    this.radio = radio;
  }
  getPosicion = function (u, v) {
    const theta = u * 2 * Math.PI;
    const phi = v * Math.PI;

    const x = Math.cos(theta) * Math.sin(phi) * this.radio;
    const y = Math.sin(theta) * Math.sin(phi) * this.radio;
    const z = -Math.cos(phi) * this.radio;

    return [x, y, z];
  };
}

class TuboSinusoidal extends Forma {
  constructor(amplitud, longitud, radio, altura) {
    super();
    this.amplitud = amplitud;
    this.longitud = longitud;
    this.radio = radio;
    this.altura = altura;
  }
  getPosicion = function (u, v) {
    const theta = u * 2 * Math.PI;
    const phi = this.longitud * v * 2 * Math.PI;

    const radioTubo = this.radio + amplitud * Math.sin(this.longitud * phi);

    const x = radioTubo * Math.cos(theta);
    const y = v * this.altura;
    const z = radioTubo * Math.sin(theta);

    return [x, y, z];
  };
}

function generarSuperficie(superficie, filas, columnas) {
  positionBuffer = [];
  normalBuffer = [];
  uvBuffer = [];

  for (var i = 0; i <= filas; i++) {
    for (var j = 0; j <= columnas; j++) {
      var u = j / columnas;
      var v = i / filas;

      var pos = superficie.getPosicion(u, v);

      positionBuffer.push(pos[0]);
      positionBuffer.push(pos[1]);
      positionBuffer.push(pos[2]);

      var nrm = superficie.getNormal(u, v);

      normalBuffer.push(nrm[0]);
      normalBuffer.push(nrm[1]);
      normalBuffer.push(nrm[2]);

      var uvs = superficie.getCoordenadasTextura(u, v);

      uvBuffer.push(uvs[0]);
      uvBuffer.push(uvs[1]);
    }
  }

  // Buffer de indices de los triángulos

  indexBuffer = [];

  function getIndexesFor(i, j) {
    const a = (columnas + 1) * i + j;
    const b = (columnas + 1) * (i + 1) + j;
    const c = (columnas + 1) * i + (j + 1);
    const d = (columnas + 1) * (i + 1) + (j + 1);

    return { a, b, c, d };
  }

  for (i = 0; i < filas; i++) {
    for (j = 0; j < columnas; j++) {
      const { a, b, c, d } = getIndexesFor(i, j);

      if (j == 0) {
        indexBuffer.push(a);
        indexBuffer.push(b);
      }
      indexBuffer.push(c);
      indexBuffer.push(d);
    }
    if (i < filas - 1) {
      let { a } = getIndexesFor(i + 1, 0);
      let { d } = getIndexesFor(i, columnas - 1);
      indexBuffer.push(d);
      indexBuffer.push(a);
    }
  }

  // Creación e Inicialización de los buffers

  webgl_position_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, webgl_position_buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(positionBuffer),
    gl.STATIC_DRAW
  );
  webgl_position_buffer.itemSize = 3;
  webgl_position_buffer.numItems = positionBuffer.length / 3;

  webgl_normal_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, webgl_normal_buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(normalBuffer),
    gl.STATIC_DRAW
  );
  webgl_normal_buffer.itemSize = 3;
  webgl_normal_buffer.numItems = normalBuffer.length / 3;

  webgl_uvs_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, webgl_uvs_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvBuffer), gl.STATIC_DRAW);
  webgl_uvs_buffer.itemSize = 2;
  webgl_uvs_buffer.numItems = uvBuffer.length / 2;

  webgl_index_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webgl_index_buffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indexBuffer),
    gl.STATIC_DRAW
  );
  webgl_index_buffer.itemSize = 1;
  webgl_index_buffer.numItems = indexBuffer.length;

  return {
    webgl_position_buffer,
    webgl_normal_buffer,
    webgl_uvs_buffer,
    webgl_index_buffer,
  };
}

function dibujarMalla(mallaDeTriangulos) {
  // Se configuran los buffers que alimentaron el pipeline
  gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_position_buffer);
  gl.vertexAttribPointer(
    shaderProgram.vertexPositionAttribute,
    mallaDeTriangulos.webgl_position_buffer.itemSize,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_uvs_buffer);
  gl.vertexAttribPointer(
    shaderProgram.textureCoordAttribute,
    mallaDeTriangulos.webgl_uvs_buffer.itemSize,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_normal_buffer);
  gl.vertexAttribPointer(
    shaderProgram.vertexNormalAttribute,
    mallaDeTriangulos.webgl_normal_buffer.itemSize,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mallaDeTriangulos.webgl_index_buffer);

  if (modo != "wireframe") {
    gl.uniform1i(shaderProgram.useLightingUniform, lighting == "true");
    /*
            Aqui es necesario modificar la primitiva por triangle_strip
        */
    gl.drawElements(
      gl.TRIANGLE_STRIP,
      mallaDeTriangulos.webgl_index_buffer.numItems,
      gl.UNSIGNED_SHORT,
      0
    );
  }

  if (modo != "smooth") {
    gl.uniform1i(shaderProgram.useLightingUniform, false);
    gl.drawElements(
      gl.LINE_STRIP,
      mallaDeTriangulos.webgl_index_buffer.numItems,
      gl.UNSIGNED_SHORT,
      0
    );
  }
}
