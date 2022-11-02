let radius;
let angle = 0;
let speed = 0.02;
let interval = 2000;
let startMove = false;
let PosX, PosY;

function setup() {
  createCanvas(400, 400);
  radius = width / 5;
  PosX = width / 2;
  PosY = height / 2;

  setInterval(() => {
    startMove = true;
  }, interval);
}

function draw() {
  background(143, 193, 181);
  translate(width / 2, height / 2);

  // Empty Circle
  noFill();
  circle(0, 0, radius * 2);

  // Rotating Circle
  fill(106, 143, 134);
  let x = cos(angle) * radius;
  let y = sin(angle) * radius;
  circle(x, y, 15);

  // Increase angle every frame
  angle += speed;

  fill(29, 66, 58);
  square(startMove ? angle * 10 : -10, -10, 55, 10);
}
