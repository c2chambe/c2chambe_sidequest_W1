const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  background("black");
  textColor("red");
  textAlign(CENTER, CENTER);
  textSize(50);
}

function draw() {
  text("The Taller They Are...", width / 2, height / 3);
  text("...The Harder They'll Fall", width / 2, 2 * (height / 3));
  textSize(100);
  textStyle(BOLD);
  text("JENGA", width / 2, height / 2);
}
