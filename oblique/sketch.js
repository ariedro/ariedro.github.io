const HEIGHT = 800;
let MAX_X = 800;
let MAX_Y = 800;

function setup() {
  createCanvas(MAX_X, MAX_Y);
  fill(0, 0, 0);
  ball = new Ball({ r: 10, x: 10, y: 20, vx: 5, vy: 0 });
}

function draw() {
  background(223, 223, 223);
  fill(0, 100, 0);
  ball.update();
  ball.show();
}
