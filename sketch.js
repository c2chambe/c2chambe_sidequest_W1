function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  textAlign(CENTER, CENTER);
  textSize(32);
  textColor("white");
  text("The Bigger They Are...", width / 2, height / 3);
  text("...The Harder They Fall", width / 2, (2 * height) / 3);
}
