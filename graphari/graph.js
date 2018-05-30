function Graph() {
  vertexs = [];
  vertexs.push(new Vertex(300, 200));
  vertexs.push(new Vertex(300, 400));
  vertexs.push(new Vertex(500, 200));
  vertexs.push(new Vertex(500, 400));

  vertexs.push(new Vertex(200, 300));
  vertexs.push(new Vertex(600, 300));


  this.show = function(adMatrix) {
    for (var i = 0; i < vertexs.length; i++) {
      vertexs[i].show();
    }
    for (var i = 0; i < adMatrix.length; i++) {
      for (var j = 0; j < adMatrix.length; j++) {
        if (adMatrix[i][j] == 1) {
          vertexs[i].drawEdge(vertexs[j]);
        }
      }
    }
  };
}
