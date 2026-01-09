const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  background("black");
  textColor("red");
  textAlign(CENTER, CENTER);
  textSize(100);
}

function draw() {
  text("The Bigger They Are...", width / 2, height / 3);
  text("...The Harder They Fall", width / 2, (2 * height) / 3);
}
