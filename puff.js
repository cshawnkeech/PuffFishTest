
//Puff constructor
//noFill();
//strokeWeight(4);
//ellipse(width/2, height/2, 296, 296); //bounding circle
//rectMode(CENTER);
//rect(width/2 - 5, height/2 - 10,282, 234);

function Puff() {
  // this.red = 235;
  // this.green = 181;
  // this.blue = 227;
  // this.alpha = 200;
  this.xTranslate = width/2 ;
  this.yTranslate = height/2;
  this.newTargetX = width/2;
  this.newTargetY = height/2;
  this.scaleFactor = 1;
  this.rotateFactor = 0;
  this.alphaFactor = 240;
  this.boundingCircle = 296 * this.scaleFactor;
  this.speedFactor = 1;

  this.display = function() {

    angleMode(DEGREES);

    push(); //begins Puff
    translate(this.xTranslate, this.yTranslate);
    scale(-this.scaleFactor, this.scaleFactor);
    rotate(this.rotateFactor);


    translate(24 * this.scaleFactor, 22 * this.scaleFactor); //centers fish in bounding circle


    //dorsal fin
    push(); //push dorsal fin
    translate(1, 27);

    //ellipse for color
    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(56, -116, 48, 70);

    stroke(0);
    noFill();
    strokeWeight(3 * abs(this.scaleFactor));
    arc(56, -116, 48, 70, -153, 1);


    push();//push left arc
    rotate(13);
    translate(-6, -113);

    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(0, 0, 24, 81);

    noFill();
    stroke(0);
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
    arc(0, 0, 73, 33, 120, 190);
    pop(); //pop left fin bottom





    push(); //push tail fin
    translate(-16, -45);
    rotate(28);

    fill(247, 118, 19, this.alphaFactor);
    noStroke();
    ellipse(124, -72, 32, 45);

    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(3 * abs(this.scaleFactor));
    fill(255, 255, 255);
    ellipse(0, 0, 40, 50);
    pop(); //pop left eye

    // left eye pupil
    push(); //push left eye pupil
    strokeWeight(9 * abs(this.scaleFactor));
    point(-119, -81);
    pop(); //pop left eye pupil


    // right eye
    push(); // push right eye
    translate(4, 20);
    stroke(0, 0, 0);
    strokeWeight(3 * abs(this.scaleFactor));
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
    strokeWeight(9 * abs(this.scaleFactor));
    point(-51, -79);
    pop(); // pop right eye pupil



    //fish lips

    push(); // push lips
    strokeWeight(3 * abs(this.scaleFactor));
    translate(-111,-44);
    rotate(-36);
    noFill();
    arc(0, 0, 20, 9, 93, 312); //upper lip
    arc(0, 10, 20, 10, 420, 617); //lower lip
    pop(); // pop lips

    //interior body fin

    push(); // push interior body fin
    strokeWeight(3 * abs(this.scaleFactor));
    noFill();
    translate(-25,-14);
    rotate(-14);
    arc(0, 0, 52, 18, -159, 74); //upper arc
    rotate(0);
    arc(8, 19, 45, 20, -97, 135); //lower arc
    pop(); // pop interior body fin







    pop();//end Puff
    //rotate mode radians command goes here...returns to default

  }; // end this.display

  this.newTarget = function() {
    text('Hi', width/2, 100);

    this.newTargetX = mouseX;
    this.newTargetY = mouseY;

  }

  this.followTouch = function () {
    if (touchIsDown) {
      this.newTargetX = touchX;
      this.newTargetY = touchY;
    }
  }

  this.followMouse = function () {
    text('followMouse', width/2, 100);
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
