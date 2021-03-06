var car;
var wall;
var speed,weight;



function setup() {
  createCanvas(800,400);


  speed = random(55,90);
  weight = random(400,1500);

   car = createSprite(50, 200, 50, 50);
   car.shapeColor = color(225)
   
   wall = createSprite(700,200,60,height/2);
   wall.shapeColor = color(80,80,80);

   
   car.velocityX = speed;
  

}

function draw() {
  background(0);
  
  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/22500;

  if(deformation<100){

   car.shapeColor = color(0,225,0);
   textSize(20);
   fill ("green");
   text("Danger level : Low ",400,200);

  }
  if(deformation>100 &&deformation<180){

   car.shapeColor = color(230,230,0);
   textSize(20)
   fill ("yellow");
   text("Danger level : Average ",400,200);

  }
  if(deformation>180){

   car.shapeColor = color(225,0,0);
   textSize(20);
   fill ("red");
   text("Danger level : High ",400,200);

  }
  

  drawSprites();
  }
}