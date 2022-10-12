function colorValue(x) {
  return (x + 1) * 100 * Math.random();
}
function setup() {
  createCanvas(500, 500);
  colorMode(HSB, width, height, 100);
  // background(199, 70, 88);
}

function draw(x) {
  // fill(215, 64, 255);
  // rect(x*10, x*10, width, height);
  for (let x = 0; x < 10; x = x + 1) {
    fill(colorValue(x), colorValue(x), colorValue(x));
    rect(x * 50, x * 50, width, height);
  }
}

//  for(let x = 0; x < 10; x = x+1){
//    draw(x)

//  }
