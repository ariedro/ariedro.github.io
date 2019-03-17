class Ball {
  constructor({ r, x, y, vx, vy }) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.ctrl = 0.3;
    this.ay = 0.2;
    this.tanlength = 5;
  }

  listenKeys() {
    if (keyIsDown(LEFT_ARROW)) this.vx -= this.ctrl;
    if (keyIsDown(RIGHT_ARROW)) this.vx += this.ctrl;
    if (keyIsDown(UP_ARROW)) this.vy -= this.ctrl;
    if (keyIsDown(DOWN_ARROW)) this.vy += this.ctrl;
  }

  move() {
    this.vy += this.ay;
    if (this.y + this.vy > MAX_Y - this.r) this.vy = -this.vy;
    if (this.x + this.vx > MAX_X - this.r) this.vx = -this.vx;
    if (this.y + this.vy < 0 + this.r) this.vy = -this.vy;
    if (this.x + this.vx < 0 + this.r) this.vx = -this.vx;

    this.x += this.vx;
    this.y += this.vy;
  }

  getNorm(x1, x2) {
    return Math.sqrt(x1 ** 2 + x2 ** 2);
  }

  update() {
    this.listenKeys();
    this.move();
  }

  drawPath() {
    line(
      this.x,
      this.y,
      this.x + this.vx * this.tanlength,
      this.y + this.vy * this.tanlength
    );
    for (let i = 0; i < 100; i++) {
      circle(
        this.x + this.vx * i,
        this.y + this.vy * i + (this.ay / 2) * i ** 2,
        1
      );
    }
  }

  show() {
    circle(this.x, this.y, this.r);
    this.drawPath();
    text(
      this.vx.toFixed(2) +
        "\n" +
        this.vy.toFixed(2) +
        "\n" +
        this.getNorm(this.vx, this.vy).toFixed(2),
      10,
      10,
      70,
      80
    );
  }
}
