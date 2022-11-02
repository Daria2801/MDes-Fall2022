let radius;
let angle = 0;
const speed = 0.1;
let PosX, PosY;
let speedMultiX;
let speedMultiY;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  radius = width / 5;
  PosX = width / 2;
  PosY = height / 2;
}

function draw() {
  background(143, 193, 181);
  translate(width / 2, height / 2);
  speedMultiX = 1 - Math.abs(Math.min(mouseX, width) - PosX) / PosX;
  speedMultiY = 1 - Math.abs(Math.min(mouseY, height) - PosY) / PosY;

  // Empty Circle
  noFill();
  circle(0, 0, radius * 2 * speedMultiX * speedMultiY);

  // Rotating Circle
  fill(106, 143, 134);
  let x = cos(angle) * radius;
  let y = sin(angle) * radius;
  circle(x, y, 15);

  // Increase angle every frame
  angle += speed * speedMultiX * speedMultiY * direction;

  //fill(29, 66, 58);
  //square(startMove?angle*10:-10, -10, 55, 10);
}

function mousePressed() {
  direction = direction * -1;
}
