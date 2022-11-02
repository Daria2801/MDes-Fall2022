const system = {
  radius: 0,
  x: 0,
  y: 0,
  angle: 0,
  speed: 0.1,
  posX: 0,
  posY: 0,
  multiplier: 0,
  direction: 1,
  reverse() {
    this.direction = this.direction * -1;
  },
};

function setup() {
  createCanvas(400, 400);

  system.radius = width / 5;
  system.posX = width / 2;
  system.posY = height / 2;
}

function draw() {
  background(143, 193, 181);
  translate(system.posX, system.posY);

  system.multiplier =
    (1 - Math.abs(Math.min(mouseX, width) - system.posX) / system.posX) *
    (1 - Math.abs(Math.min(mouseY, height) - system.posY) / system.posY);

  noFill();
  circle(0, 0, system.radius * 2);

  system.x = cos(system.angle) * system.radius;
  system.y = sin(system.angle) * system.radius;

  fill(106, 143, 134);
  circle(system.x, system.y, 15);

  system.angle += system.speed * system.multiplier * system.direction;
}

function mousePressed() {
  system.reverse();
}
