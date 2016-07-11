var chest1;
var openClose1;
var chest2;
var openClose2;
var bubble1 = [];

var travelUp = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
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

  chest1.display();
  chest2.display();

  bubblesFloat();

} // end draw

//bubbleTest
function BubbleTest(whichChest) {
	//bubble1[addbubs].xTranslate += round(random-20, 20);
	this.xTranslate = whichChest.xTranslate + round(random(-40, 40));
  this.yTranslate = whichChest.yTranslate;

  this.display = function() {
  	stroke(255,255,255,100);
    fill(255,255,255,70);
  	ellipse(this.xTranslate, this.yTranslate - 60 - travelUp, 20, 20);
  }

}

//TreasureChest constructor
function TreasureChest() {
  this.xTranslate = width/2 ;
  this.yTranslate = height - 70;
  this.scaleFactor = 0.50;
  // this.rotateFactor = 0; //currently not used in display
  this.lidOpen = false;

  this.toggleLid = function(whichChest) {
  	//alert("wth?");
  	text("lidOpen " + chest1.lidOpen, width/2, 70);
    if (whichChest.lidOpen === true) {
      whichChest.lidOpen = false;
    } else if (whichChest.lidOpen === false) {
    	//open lid and do something
      whichChest.lidOpen = true;

    	//add new bubbles to array
    	for (var addbubs = 0; addbubs < 5; addbubs++)	{
  			bubble1.push(new BubbleTest(whichChest));
  		}//end add new bubbles to array

      //remove bubbles that have left the screen
      for (var ridbubs = bubble1.length - 1; ridbubs >= 0; ridbubs--) {
      	//console.log(ridbubs);
      	if (bubble1[ridbubs].yTranslate < 0) {
        	bubble1.splice(ridbubs, 1);
        }
      }//end remove bubbles

    }
  }//end this.toggleLid

  this.display = function() {

    push(); //begins TreasureChest
    rectMode(CENTER);
    translate(this.xTranslate, this.yTranslate);

    //noFill(); //for test bounding box
    //rect(0, 0, 286, 260); // for test bounding box

    scale(this.scaleFactor);

    if (this.lidOpen === true) {
        // chest lid (open)
        push(); // push chest lid (open)
        strokeWeight(6);

        //main box lid
        fill(115, 97, 25);
        rect(0,-122, 280, 96);

        //plush red interior
        fill(194, 35, 61);
        rect(0,-124, 253, 69);
        pop();

    } else if (this.lidOpen === false) {
        // chest lid (closed)
        push(); // push chest lid (closed)
        strokeWeight(6);
        fill(115, 97, 25);
        quad(-120, -128, 120, -128, 140, -70, -140, -70);
        fill(158, 131, 25);
        strokeWeight(5);
        rect(-74,-104, 40, 58);
        rect(74,-104, 40, 58);
        rect(0,-104, 40, 58); // center band
        pop(); //pop chest lid (closed)
    }

    push(); //push hinges & latches
    fill(158, 131, 25);
    strokeWeight(5);
    rect(-74,-80, 40, 10); // L
    rect(74,-80, 40, 10); // R
    pop(); //pop hinges & latches

    //lowerSection
    push();//push lower section
    translate(0,30);
    strokeWeight(6);
    fill(115, 97, 25);
    quad(-140, -100, -100, 100, 100, 100, 140,-100); //outer chest
    fill(158, 131, 25);
    quad(-114, -80, -80, 80, 80, 80, 114, -80); //inner chest
    pop(); //pop lower section

    push(); //push skull
    angleMode(DEGREES);
    translate(0, 30);
    //skull centerpiece
    strokeWeight(2);
    fill(201, 201, 201);
    ellipse(0, -27, 35, 35);//top part
    noStroke();
    ellipse(0, -20, 30, 30); //skull center

    stroke(0);
    fill(0);
    ellipse(-5, -25, 1.5, 2.5); //L eye
    ellipse(5, -25, 1.5, 2.5); //R eye
    ellipse(0, -20, 0.5, 1); //nose

    stroke(158, 131, 25);
    fill(158, 131, 25);
    ellipse(-12, -16, 4, 3.5); //L cheek
    ellipse(12, -16, 4, 3.5); //R cheek

    stroke(0);
    noFill();
    arc(-12, -16, 5.50, 6.83, degrees(-2.70), degrees(1.88)); //L cheek outline
    arc(12, -16, 5.50, 6.83, degrees(1.23), degrees(5.91)); //R cheek outline
    arc(0, -20, 30, 30, degrees(0.50), degrees(2.62));//jawline
    pop(); // pop skull

    pop(); //end TreasureChest

  }; // end this.display

};// end TreasureChest constructor

function bubblesFloat() {
 		for (var showbubs = 0; showbubs < bubble1.length; showbubs++)	{
  		bubble1[showbubs].display();
    	bubble1[showbubs].xTranslate;
    	var jiggleDir = floor(random(0,5));
  		var jiggleAmt = 1;

  		if (jiggleDir <= 1) {
    		bubble1[showbubs].xTranslate = bubble1[showbubs].xTranslate + jiggleAmt;
  		} else if (jiggleDir <= 3) {
    		bubble1[showbubs].xTranslate = bubble1[showbubs].xTranslate - jiggleAmt;
  		} else {
    		bubble1[showbubs].yTranslate = bubble1[showbubs].yTranslate - jiggleAmt - (round(random(1, 4)));
  		}
  	}
}//end bubblesFLoat
