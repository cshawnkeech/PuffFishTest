var puff1;
var img;
var chest1;
var openClose1;
var chest2;
var openClose2;
var bubble1 = [];
var travelUp = 0;


function preload() {
  //this image by Felipe Skroski, under CC liscence: attribution
  //img = loadImage("https://upload.wikimedia.org/wikipedia/commons/2/2e/Underwater_world.jpg");

  //chest = loadImage("graphicFiles/chest.png");
  //https://upload.wikimedia.org/wikipedia/commons/4/41/Headphones_256.png
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  puff1 = new Puff();

  chest1 = new TreasureChest();
  chest1.xTranslate = width/3;

  chest2 = new TreasureChest();
  chest2.xTranslate = 2 * width/3;

  //this does work, and I'd like to learn why...
  openClose1 = setInterval(chest1.toggleLid, 2050, chest1);
  openCLose2 = setInterval(chest2.toggleLid, 3020, chest2);

} // end setup

function draw() {
  background(19, 148, 247);

  //imageMode(CENTER);
  //image(img, 0, 0, img.width, img.height);

  // push();
  // fill(245);
  // //text(puff1.distanceToMouse(), 30, 30);
  // text("lidOpen " + chest1.lidOpen, width/2, 50);
  // text(frameCount, width/2, 70);
  // //text(pig.rotateFactor % TWO_PI, 30, 90)
  // pop();

  puff1.followMouse();
  puff1.followTouch();
  puff1.display();

  chest1.display();
  chest2.display();

  bubblesFloat();


} // end draw

function mouseMoved() {
  puff1.newTarget();
} // end mouseMoved

function mouseDragged() {
  puff1.followTouch();
  return false;
}


function mousePressed() {
  chest1.toggleLid();
} //end mousePressed
