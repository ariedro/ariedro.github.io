class Ball {
  constructor({ r, x, y, vx, vy }) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.ctrl = 0.01;
    this.ax = 0;
    this.ay = 0.2;
    this.tanlength = 500;
  }

  listenKeys() {
    if (keyIsDown(LEFT_ARROW)) this.ax -= this.ctrl;
    if (keyIsDown(RIGHT_ARROW)) this.ax += this.ctrl;
    if (keyIsDown(UP_ARROW)) this.ay -= this.ctrl;
    if (keyIsDown(DOWN_ARROW)) this.ay += this.ctrl;
  }

  move() {
    if (this.y + this.vy > MAX_Y - this.r) this.vy = -this.vy;
    else this.vy += this.ay;
    if (this.x + this.vx > MAX_X - this.r) this.vx = -this.vx;
    else this.vx += this.ax;
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
      this.x + this.ax * this.tanlength,
      this.y + this.ay * this.tanlength
    );
    strokeWeight(2);
    for (let i = 0; i < 100; i++) {
      point(
        this.x + this.vx * i + (this.ax / 2) * i ** 2,
        this.y + this.vy * i + (this.ay / 2) * i ** 2,
        1
      );
    }
    strokeWeight(1);
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
