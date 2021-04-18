var canvas = document.getElementById("theCanvaSSS");
ctx = canvas.getContext("2d");

var Car1_Width = 120;
var Car1_Height = 70;
var Car1_Image = "car1.png";
var Car1_X = 10;
var Car1_Y = 10;

var Car2_Width = 120;
var Car2_Height = 70;
var Car2_Image = "car2.png";
var Car2_X = 10;
var Car2_Y = 100;

var Background_Image = "CarRacingBackground.jfif";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = Background_Image;

    Car1_imageTag = new Image();
    Car1_imageTag.onload = uploadCar1;
    Car1_imageTag.src = Car1_Image;

    Car2_imageTag = new Image();
    Car2_imageTag.onload = uploadCar2;
    Car2_imageTag.src = Car2_Image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(Car1_imageTag, Car1_X, Car1_Y, Car1_Width, Car1_Height);
}

function uploadCar2(){
    ctx.drawImage(Car2_imageTag, Car2_X, Car2_Y, Car2_Width, Car2_Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
       car1_Up();
       console.log("up arrow key") ;
    }

    if (keyPressed == '40') {
        car1_Down();
        console.log("down arrow key") ;
     }

     if (keyPressed == '37') {
        car1_Left();
        console.log("left arrow key"); 
     }

     if (keyPressed == '39') {
        car1_Right();
        console.log("right arrow key") ;
     }

     if (keyPressed == '87') {
        car2_Up();
        console.log("key W") ;
     }
 
     if (keyPressed == '83') {
         car2_Down();
         console.log("key S") ;
      }
 
      if (keyPressed == '65') {
         car2_Left();
         console.log("key A"); 
      }
 
      if (keyPressed == '68') {
         car2_Right();
         console.log("key D") ;
      } 

      if (Car1_X > 700) 
{
   console.log("Car 1 Won");
   document.getElementById("Game_Status").innerHTML = "Car 1 Won";
}
}

function car1_Up(){
   if (Car1_Y >= 0) {
      Car1_Y = Car1_Y-10;
      console.log("When Up arrow key is pressed, x = "+ Car1_X +"| Y= "+Car1_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car1_Down(){
   if (Car1_Y <= 500) {
      Car1_Y = Car1_Y+10;
      console.log("When Down arrow key is pressed, x = "+ Car1_X +"| Y= "+Car1_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car1_Left(){
   if (Car1_X >= 0) {
      Car1_X = Car1_X-10;
      console.log("When Left arrow key is pressed, x = "+ Car1_X +"| Y= "+Car1_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car1_Right(){
   if (Car1_X <= 700) {
      Car1_X = Car1_X+10;
      console.log("When Right arrow key is pressed, x = "+ Car1_X +"| Y= "+Car1_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car2_Up(){
   if (Car2_Y >= 0) {
      Car2_Y = Car2_Y-10;
      console.log("When W key is pressed, x = "+ Car2_X +"| Y= "+Car2_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car2_Down(){
   if (Car2_Y <= 500) {
      Car2_Y = Car2_Y+10;
      console.log("When S key is pressed, x = "+ Car2_X +"| Y= "+Car2_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car2_Left(){
   if (Car2_X >= 0) {
      Car2_X = Car2_X-10;
      console.log("When A key is pressed, x = "+ Car2_X +"| Y= "+Car2_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

function car2_Right(){
   if (Car2_X <= 700) {
      Car2_X = Car2_X+10;
      console.log("When D key is pressed, x = "+ Car2_X +"| Y= "+Car2_Y);
   uploadBackground();
   uploadCar1();
  uploadCar2();
   }
}

