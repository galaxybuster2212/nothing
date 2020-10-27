var fixedRect
var movingRect

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixedRect = createSprite(400,34,45,150)
  fixedRect.shapeColor = "red";
  movingRect = createSprite(550,150,150,45);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
   && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }
  
  drawSprites();
}