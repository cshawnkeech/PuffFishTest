var puff1;
var img;
var chest1;
var openClose1;


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

  //this doesn't work, and I'd like to learn why...
  //openClose1 = setInterval(chest1.toggleLid, 1000);
  //this does work, which makes enough sense
  openClose1 = setInterval(function() {
    if (chest1.lidOpen === true) {
      chest1.lidOpen = false;
    } else if (chest1.lidOpen === false) {
      chest1.lidOpen = true;
    }
  }, 2000);

} // end setup

function draw() {
  background(19, 148, 247);

  // //this works...
  // if (frameCount % 100 === 0) {
  //   chest1.toggleLid();
  // }

  //imageMode(CENTER);
  //image(img, 0, 0, img.width, img.height);

  push();
  fill(245);
  //text(puff1.distanceToMouse(), 30, 30);
  text("lidOpen " + chest1.lidOpen, width/2, 50);
  text(frameCount, width/2, 70);
  //text(pig.rotateFactor % TWO_PI, 30, 90)
  pop();

  puff1.followMouse();
  puff1.followTouch();
  puff1.display();

  chest1.display();


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
