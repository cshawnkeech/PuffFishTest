var puff1;
var img;
var chest;

function preload() {
  //this image by Felipe Skroski, under CC liscence: attribution
  //img = loadImage("https://upload.wikimedia.org/wikipedia/commons/2/2e/Underwater_world.jpg");

  //chest = loadImage("graphicFiles/chest.png");
  //https://upload.wikimedia.org/wikipedia/commons/4/41/Headphones_256.png
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  puff1 = new Puff();

} // end setup

function draw() {

  background(19, 148, 247);
  //imageMode(CENTER);
  //image(img, 0, 0, img.width, img.height);

  // push();
  // fill(245);
  // //text(puff1.distanceToMouse(), 30, 30);
  // text("targetX " + puff1.newTargetX, width/2, 50);
  // text("targetY " + puff1.newTargetY, width/2, 70);
  // //text(pig.rotateFactor % TWO_PI, 30, 90)
  // pop();

  puff1.followMouse();
  puff1.followTouch();
  puff1.display();

  //image(chest, width/3, height/3);


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
