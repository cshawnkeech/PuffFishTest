
//use this for github page
// var helpersTheme = new buzz.sound( "https://cshawnkeech.github.io/ThreeLittlePigsThemePlayer/audioExamples/HelpersTheme", {
//     formats: [ "ogg", "mp3", "m4a", "wav" ]
// });
//
// var wolvesTheme = new buzz.sound( "https://cshawnkeech.github.io/ThreeLittlePigsThemePlayer/audioExamples/WolvesTheme", {
//     formats: ["ogg", "mp3", "m4a", "wav" ]
// });

// //use this for local atom tests
//
// var helpersTheme = new buzz.sound( "audioExamples/HelpersTheme", {
//     formats: [ "ogg", "mp3", "m4a", "wav" ]
// });
//
// var wolvesTheme = new buzz.sound( "audioExamples/WolvesTheme", {
//     formats: ["ogg", "mp3", "m4a", "wav" ]
// });

var puff1;
var puffPercent;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createCanvas (460, 320);

  puff1 = new Puff();
  puff1.scaleFactor = 0.5;


} // end setup

function draw() {
  background(19, 148, 247);

  push();
  fill(245);
  text(windowWidth, 30, 30);
  text(windowHeight, 30, 50);
  //text(pig.rotateFactor, 30, 70);
  //text(pig.rotateFactor % TWO_PI, 30, 90)
  pop();


  puff1.display();

  //puff1.rotateFactor++;


  // percent = helpersTheme.getPercent();
  // wolvesPercent = wolvesTheme.getPercent();
  // background(45);
  //
  // // //testing text

  // // //end testing text
  //
  // pig.display();
  // pig.spinCheck();
  //
  // wolf1.display();
  // wolf1.spinCheck();

} // end draw

function mousePressed() {
  // pig.playTheme();
  // wolf1.playTheme();
} //end mousePressed


//for reference, from buzz example
/*
var mySound = new buzz.sound( "/sounds/myfile", {
    formats: [ "ogg", "mp3", "aac" ]
});

mySound.play()
    .fadeIn()
    .loop()
    .bind( "timeupdate", function() {
       var timer = buzz.toTimer( this.getTime() );
       document.getElementById( "timer" ).innerHTML = timer;
    });

*/
