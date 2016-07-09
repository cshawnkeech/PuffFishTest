
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
  this.scaleFactor = 1;
  this.rotateFactor = 0;
  this.alphaFactor = 240;

  this.display = function() {

    angleMode(DEGREES);

    push(); //begins Puff
    translate(this.xTranslate, this.yTranslate);
    rotate(this.rotateFactor);
    scale(this.scaleFactor, this.scaleFactor);

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

};// end Puff constructor

var fish1 = new Puff();
fish1.display();





// //Piggy constructor
// function Piggy() {
//   this.red = 235;
//   this.green = 181;
//   this.blue = 227;
//   this.alpha = 240;
//   this.xTranslate = width/3 ;
//   this.yTranslate = height/2;
//   this.rotateFactor = 0;
//   this.scaleFactor = 2;
//
//   this.display = function() {
//     push()
//
//     translate(this.xTranslate, this.yTranslate);
//     scale(this.scaleFactor);
//     rotate(this.rotateFactor);
//
//     // helper theme circle
//     fill(this.red, this.green, this.blue , this.alpha);
//
//     //ears
//     triangle(-20 ,-45, -28, -29, -12, -37); //left
//     push();
//     scale(-1, 1);
//     triangle(-20 ,-45, -28, -29, -12, -37);
//     pop();
//
//     //head
//     ellipse(0, 0, 80, 80);
//     //nose
//     ellipse(0, 0, 20, 14);
//     //nostrils
//     stroke(219, 31, 197, 200);
//     ellipse(3,0, 3, 5);
//     ellipse(-3,0, 3, 5);
//
//     //eyes
//     stroke(0);
//     fill(56, 56, 56);
//     ellipse(-9,-12, 6, 8);
//     ellipse(9,-12, 6, 8);
//
//
//     //mouth
//     noFill();
//     strokeWeight(1);
//     arc(0, 11, 13, 10, 0, 160);
//
//     pop();
//   }//end this.display
//
//   this.headBob = function() {
//     this.rotateFactor = this.rotateFactor++;
//   }// end this.headBob
//
//   this.playTheme = function() {
//     var mouseDistance = dist(mouseX, mouseY, this.xTranslate, this.yTranslate);
//     if (mouseDistance < 40 * this.scaleFactor) {
//       helpersTheme.togglePlay();
//     } else if (mouseDistance > 40 * this.scaleFactor && helpersTheme.isEnded() === false) {
//       helpersTheme.stop();
//     }
//
//   }//end this.playTheme
//
//   this.spinCheck = function() {
//     if (helpersTheme.isPaused() === false && percent > 0) {
//       this.rotateFactor += 0.025;
//     } else if (helpersTheme.isPaused() || percent === 0) {
//       if (this.rotateFactor % TWO_PI > 0) {
//         this.rotateFactor = this.rotateFactor % TWO_PI;
//         this.rotateFactor -= 0.025;
//       } else if (this.rotateFactor < 0) {
//         this.rotateFactor = 0;
//       }
//     }
//   } // end this.spinCheck
//
//
// } // end Piggy constructor
//
// //Wolf constructor
// function Wolf() {
//   //this.red = 235;
//   //this.green = 181;
//   //this.blue = 227;
//   //this.alpha = 200;
//   this.xTranslate = 2 * width/ 3;
//   this.yTranslate = height/2;
//   this.scaleFactor = 0.80;
//   this.rotateFactor = 0;
//
//   this.display = function() {
//
//     push();//begins wolf
//     translate(this.xTranslate, this.yTranslate);
//     scale(this.scaleFactor);
//     rotate(this.rotateFactor);
//
//     strokeWeight(2);
//
//     fill(176, 176, 176);
//     quad(-100, -80, 100, -80, 20, 80, -20, 80);
//
//     fill(230, 225, 225);
//     quad(-93, -75, 93, -75, 73, -36, -73, -37);
//     quad(-20, 80, 20, 80, 14, 92, -14, 92);
//
//     //muzzle
//     stroke(161, 152, 152);
//     fill(176, 176, 176, 200);
//     quad(-10, 0, 10, 0, 19, 80, -18, 80);
//
//     stroke(0, 0, 0);
//     fill(176, 176, 176);
//     angleMode(DEGREES);
//     arc(0, 20, 200, 200, 218, 323);
//     angleMode(RADIANS);
//
//     //eyes
//     fill(168, 151, 151, 100);
//     triangle(-50, -26, -10, -13, -21, 1);
//     push(); //begins second eye
//     scale(-1, 1);
//     triangle(-50, -26, -10, -13, -21, 1);
//     pop(); //ends second eye
//
//     pop(); //ends wolf
//   } //ends this.display
//
//
//     this.headBob = function() {
//       this.rotateFactor = this.rotateFactor++;
//     }// end this.headBob
//
//     this.playTheme = function() {
//       var mouseDistance = dist(mouseX, mouseY, this.xTranslate, this.yTranslate);
//       if (mouseDistance < 100 * this.scaleFactor) {
//         wolvesTheme.togglePlay();
//       } else if (mouseDistance > 100 * this.scaleFactor && wolvesTheme.isEnded() === false) {
//         wolvesTheme.stop();
//       }
//
//     }//end this.playTheme
//
//     this.spinCheck = function() {
//       if (wolvesTheme.isPaused() === false && wolvesPercent > 0) {
//         this.rotateFactor += 0.025;
//       } else if (wolvesTheme.isPaused() || wolvesPercent === 0) {
//         if (this.rotateFactor % TWO_PI > 0) {
//           this.rotateFactor = this.rotateFactor % TWO_PI;
//           this.rotateFactor -= 0.025;
//         } else if (this.rotateFactor < 0) {
//           this.rotateFactor = 0;
//         }
//       }
//     } // end this.spinCheck
//
//
//
//
// }//end wolf constructor
