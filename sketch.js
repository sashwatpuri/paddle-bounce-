var ball,img,paddle;

function preload() {
  ballpin = loadImage("ball.png");
  paddlepin = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  
  //you don't have to put var once again. Please note you have already used var for defining your objects globally.
  
  paddle = createSprite (320,200,20,20);
  paddle.addImage("paddlevariable",paddlepin);
  
  ball = createSprite(120,200,20,20);
  ball.addImage("ballvariable",ballpin);
  ball.scale=0.8;
  ball.velocityX=9;
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  
  //You have to difine "edges" like done below & "createEdgeSprites" has S capital for sprites
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle , randomVelocity);
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  if(ball.bounceOff(paddle)){
    randomVelocity();
  }

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-4
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+4;
  }
  drawSprites();
  
}

function randomVelocity()
{
  var randomvelocity = random(1,6);
  ball.velocityY = randomvelocity;
  console.log(randomvelocity)
}

