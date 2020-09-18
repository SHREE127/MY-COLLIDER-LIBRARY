var mrect, frect;

function setup() {
  createCanvas(800,400);

  mrect = createSprite(10,10,40,40);
  mrect.shapeColor="red";
  mrect.debug=true;

  frect = createSprite(400,200,40,40);
  frect.shapeColor="red";
  frect.debug=true;

}

function draw() {
  background("skyblue"); 
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 && frect.x - mrect.x < mrect.width/2 + frect.width/2  &&
    ( mrect.y - frect.y < mrect.height/2 + frect.height/2 && frect.y - mrect.y < mrect.height/2 + frect.height/2)){

    mrect.shapeColor="green";
    frect.shapeColor="green";
  }
  else {

    mrect.shapeColor="red";
    frect.shapeColor="red"; 

  }
  drawSprites();
}