class Board {
  let shapeSides;
  let radius = 0;

  constructor(shapeSides = 6, radius = 10) {
    this.sides = shapeSides;
    this.radius = radius;
  }

  function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  function constructBoard() {

  }
}
