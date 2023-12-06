class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep;
    this.y += ystep;
  }
}
let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}
function draw() {
  walker.step();
  walker.show();
}
//step(); {
//let xstep = random(-1, 1);
//let ystep = random(-1, 1);
//this.x += xstep;
//this.y += ystep;
//let x = randomGaussian(320, 60);
//noStroke();
//fill(0, 10);
//circle(x, 120, 16);
//}
//let num = randomGaussian();
