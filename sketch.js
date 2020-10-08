var car,carImage1,carImage2
var wall,wallImage

var weight,speed


function preload(){
  car1=loadImage("car-top-View-PNG-image.png");
  car2=loadImage("car-top-View-PNG-image1.png");
  wall1=loadImage("maxresdefault(1).jpg");
  background1=loadImage("street-clipart-top-view-1.jpg");
  speed=random(55,90);
  weight=random(400,1500);
  }
  
  function setup() {
  
    createCanvas(800,400);

    car=createSprite(400, 200, 50, 50);
   car.shapeColor="blue"
   car.velocity=speed
    wall=createSprite(350,200,60,height/2);

  }
  
  function draw() {
    background(255,255,255); 
  if (wall.x-car.x<(car.width+wall.width)/2){
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  car.shapeColor="red"
}
if(deformation<180&&deformation>100){
  car.shapeColor="yellow"
}
if(deformation<180&&deformation>100){
  car.shapeColor="green"
}

  }
    drawSprites();
  }