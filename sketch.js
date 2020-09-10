var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1=createSprite(200,100,130,50);
  obj1.shapeColor="green";
  obj2=createSprite(400,100,85,35);
  obj2.shapeColor="green";
  obj1.velocityX= 5;
  obj2.velocityX= -3;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj1,obj2);
  
  drawSprites();
}

