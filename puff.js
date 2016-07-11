//Puff constructor
function Puff() {
  // this.red = 235;
  // this.green = 181;
  // this.blue = 227;
  // this.alpha = 200;
  this.xTranslate = width/2 ;
  this.yTranslate = height/2;
  this.newTargetX = width/2;
  this.newTargetY = height/2;
  this.scaleFactor = 0.625;
  this.rotateFactor = 0;
  this.alphaFactor = 240;
  this.boundingCircle = 180 * this.scaleFactor;
  this.speedFactor = 1;

  this.display = function() {

    angleMode(DEGREES);

    // //test boundingCircle
    // ellipse(this.xTranslate, this.yTranslate, this.boundingCircle, this.boundingCircle);

    push(); //begins Puff
    translate(this.xTranslate, this.yTranslate);

    if (this.xTranslate <= this.newTargetX) {
      scale(this.scaleFactor, this.scaleFactor);
    } else if (this.xTranslate > this.newTargetX) {
      scale(-this.scaleFactor, this.scaleFactor);
    }

    scale(-this.scaleFactor, this.scaleFactor);
    rotate(this.rotateFactor);


    translate(42 * this.scaleFactor, 35 * this.scaleFactor); //centers fish in bounding circle

    //dorsal fin
    push(); //push dorsal fin
    translate(1, 27);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(56, -116, 48, 70);

    stroke(0);
    noFill();
    strokeWeight(3);
    arc(56, -116, 48, 70, -153, 1);


    push();//push left arc
    rotate(13);
    translate(-6, -113);

    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 24, 81);

    noFill();
    stroke(0);
    strokeWeight(3);
    arc(0, 0, 24, 81, 160, -60);

    pop();//pop left arc

    pop(); //pop dorsal fin

    //ventral fin
    push(); // push right ventral fin
    translate(-1, 61);
    rotate(-17);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 27, 71);

    stroke(0);
    noFill();
    strokeWeight(3 );
    arc(0, 0, 27, 71, 60, 105);
    pop(); //pop right ventral fin

    push(); // push left ventral fin
    translate(-5, 64);
    rotate(12);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 27, 71);

    stroke(0);
    noFill();
    strokeWeight(3  );
    arc(0, 0, 27, 71, 70, 115);
    pop(); //pop left ventral fin

    //left fin
    push(); // push left fin top
    translate(-175, -35);
    rotate(-15);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 99, 30);

    stroke(0);
    noFill();
    strokeWeight(3);
    arc(0, 0, 99, 30, 155, 310);
    pop(); //pop left fin top

    push(); // push left fin bottom
    translate(-168, -30);
    rotate(-34);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 73, 33);

    stroke(0);
    noFill();
    strokeWeight(3);
    arc(0, 0, 73, 33, 120, 190);
    pop(); //pop left fin bottom

    push(); //push tail fin
    translate(-16, -45);
    rotate(28);

    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(124, -72, 32, 45);

    strokeWeight(3 );
    stroke(0);
    noFill();
    arc(124, -72, 32, 45, -155, 129);

    push();//push left arc
    translate(101, -71);
    rotate(-5);

    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 19, 46);

    stroke(0);
    noFill();
    arc(0, 0, 19, 46, 220, -40);

    pop();//pop left arc

    pop(); //pop tail fin

    //Main Body
    strokeWeight(3 );
    stroke(0, 0, 0);
    fill(247, 118, 19, 255); // alpha added for demonstration purposes

    beginShape();
        curveVertex(-18,84);
        curveVertex(-102,73);
        curveVertex(-158,25);
        curveVertex(-165,-61);
        curveVertex(-122,-121);
        curveVertex(-59,-147);
        curveVertex(-12,-130);
        curveVertex(9,-81);
        curveVertex(45,-91);
        curveVertex(79,-88);
        curveVertex(109,-52);
        curveVertex(95,7);
        curveVertex(55,57);
        curveVertex(-18,84);
        curveVertex(-102,73);
        curveVertex(-158,25);
    endShape();

    // left eye
    push(); //push left eye
    translate(-120, -82);
    rotate(43);
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(0, 0, 40, 50);
    pop(); //pop left eye

    // left eye pupil
    push(); //push left eye pupil
    strokeWeight(9);
    point(-119, -81);
    pop(); //pop left eye pupil


    // right eye
    push(); // push right eye
    translate(4, 20);
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(255, 255, 255);
    beginShape();
        curveVertex(-66,-126);
        curveVertex(-39,-123);
        curveVertex(-24,-105);
        curveVertex(-33,-82);
        curveVertex(-54,-72);
        curveVertex(-76,-76);
        curveVertex(-81,-104);
        curveVertex(-66,-126);
        curveVertex(-39,-123);
        curveVertex(-24,-105);
    endShape();
    pop(); // pop right eye

    //right eye pupil
    push(); // push right eye pupil
    strokeWeight(9);
    point(-51, -79);
    pop(); // pop right eye pupil

    //fish lips
    push(); // push lips
    strokeWeight(3);
    translate(-111,-44);
    rotate(-36);
    noFill();
    arc(0, 0, 20, 9, 93, 312); //upper lip
    arc(0, 10, 20, 10, 420, 617); //lower lip
    pop(); // pop lips

    //interior body fin
    push(); // push interior body fin
    strokeWeight(3);
    noFill();
    translate(-25,-14);
    rotate(-14);
    arc(0, 0, 52, 18, -159, 74); //upper arc
    rotate(0);
    arc(8, 19, 45, 20, -97, 135); //lower arc
    pop(); // pop interior body fin

    pop();//end Puff

  }; // end this.display

  this.newTarget = function() {

    this.newTargetX = mouseX;
    this.newTargetY = mouseY;

  }

  this.followTouch = function () {
    if (touchIsDown === true) {
      this.newTargetX = touchX;
      this.newTargetY = touchY;
    }
  }

  this.followMouse = function () {
    //text('followMouse', width/2, 100);
    var easing = 0.05;
    // I adapted this from
    // http://coursescript.com/notes/interactivecomputing/animation/
    // by John Kuiphoff

    // calculate the new xpos value
    var dx = this.newTargetX - this.xTranslate;
    if(abs(dx) > 1) {
      this.xTranslate += dx * easing;
    }

    // calculate the new ypos value
    var dy = this.newTargetY - this.yTranslate;
    if(abs(dy) > 1) {
      this.yTranslate += dy * easing;
    }

  }

};// end Puff constructor

//bubbleTest
function BubbleTest(whichChest) {
	//bubble1[addbubs].xTranslate += round(random-20, 20);
	this.xTranslate = whichChest.xTranslate + round(random(-40, 40));
  this.yTranslate = whichChest.yTranslate;

  this.display = function() {

    push();
  	stroke(255,255,255,100);
    fill(255,255,255,70);
  	ellipse(this.xTranslate, this.yTranslate - 60 - travelUp, 20, 20);
    pop();
  }

}//end BubbleTest

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

    	//add new bubbles to array, max 50 bubbles
      if (bubble1.length < 50) {
        for (var addbubs = 0; addbubs < 5; addbubs++)	{
    			bubble1.push(new BubbleTest(whichChest));
    		}
      } //end add new bubbles to array


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
  	var jiggleAmt = 1.5;

  	if (jiggleDir <= 1) {
    	bubble1[showbubs].xTranslate = bubble1[showbubs].xTranslate + jiggleAmt;
  	} else if (jiggleDir <= 3) {
    	bubble1[showbubs].xTranslate = bubble1[showbubs].xTranslate - jiggleAmt;
  	} else {
    	bubble1[showbubs].yTranslate = bubble1[showbubs].yTranslate - jiggleAmt - (round(random(1, 4)));
  	}
  }
}//end bubblesFLoat
