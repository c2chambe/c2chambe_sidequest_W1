const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  background("black");
  fill("red");
  textAlign(CENTER, CENTER);
  textSize(25);
  text("The Taller They Are...", width / 2, height / 3);
  text("...The Harder They'll Fall", width / 2, 2 * (height / 3));
  textSize(50);
  textStyle(BOLD);
  text("JENGA", width / 2, height / 2);
}

function draw() {}
