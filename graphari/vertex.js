function Vertex(x, y) {
  this.x = x;
  this.y = y;
  this.edgeLength = 10;

  this.show = function() {
    ellipse(this.x, this.y, 10, 10);
  };

  this.drawEdge = function(aVertex) {
    line(this.x, this.y, aVertex.x, aVertex.y);
  };
}
