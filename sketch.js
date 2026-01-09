function setup() {
  createCanvas(400, 400);
  background("black");
  textColor("white");
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  text("The Bigger They Are...", width / 2, height / 3);
  text("...The Harder They Fall", width / 2, (2 * height) / 3);
}
