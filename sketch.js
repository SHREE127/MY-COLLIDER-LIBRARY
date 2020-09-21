var mrect, frect;
var rect1, rect2, rect3, rect4;


function setup() {
  createCanvas(800,400);

  mrect = createSprite(10,10,40,40);
  mrect.shapeColor="red";
  mrect.debug=true;

  frect = createSprite(400,200,40,40);
  frect.shapeColor="white";
  frect.debug=true;

  rect1 = createSprite(100,100,40,40);
  rect1.shapeColor="white";
  rect1.debug=true;

  rect2 = createSprite(400,100,40,40);
  rect2.shapeColor="white";
  rect2.debug=true;

  rect3 = createSprite(300,100,40,40);
  rect3.shapeColor="white";
  rect3.debug=true;

  rect4 = createSprite(200,100,40,40);
  rect4.shapeColor="white";
  rect4.debug=true;

}

function draw() {
  background("skyblue"); 
  
  mrect.x = mouseX;
  mrect.y = mouseY;

 if( isTouching(rect1,mrect)||isTouching(rect2,mrect)||isTouching(rect3,mrect)||isTouching(rect4,mrect)){
  mrect.shapeColor="green";

 }
 else {

  mrect.shapeColor="red";

  frect.shapeColor="white"; 
  rect1.shapeColor="white"; 
  rect2.shapeColor="white"; 
  rect3.shapeColor="white"; 
  rect4.shapeColor="white"; 

}

  drawSprites();
}
