var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
function isTouching(object1,object2){


  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y -object1.y < object2.height/2 + object1.height/2) {
      return true;
    }
    else {
      return false;
    }
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = (-1)*object1.velocityX;
      object2.velocityX = (-1)*object2.velocityX;
    }
    if ( object1.y - object2.y < object2.height/2 + object1.height/2
      &&object2.y -object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY = (-1)*object1.velocityY;
        object2.velocityY = (-1)*object2.velocityY; 

}
}
