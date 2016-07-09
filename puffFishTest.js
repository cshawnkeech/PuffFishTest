var puff1;

function setup() {
  createCanvas(windowWidth,windowHeight);

  puff1 = new Puff();

} // end setup

function draw() {

  background(19, 148, 247);

  push();
  fill(245);
  //text(puff1.distanceToMouse(), 30, 30);
  text("targetX " + puff1.newTargetX, width/2, 50);
  text("targetY " + puff1.newTargetY, width/2, 70);
  //text(pig.rotateFactor % TWO_PI, 30, 90)
  pop();

  puff1.followMouse();
  puff1.followTouch();
  puff1.display();

} // end draw

function mouseMoved() {
  puff1.newTarget();
} // end mouseMoved

function mouseDragged() {
  puff1.followTouch();
  return false;
}


function mousePressed() {

} //end mousePressed
