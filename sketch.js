var bgImg,bgSprites;
var boy,boyImg;
var batman,batmanImg;

function preload(){
    bgImg = loadImage("images/c8a1b2793cb2b0f4e5a120cbe22024eb.png");
    boyImg = loadAnimation("images/boyImages/0.png", "images/boyImages/1.png", "images/boyImages/2.png", "images/boyImages/3.png", "images/boyImages/4.png", "images/boyImages/5.png", "images/boyImages/6.png", "images/boyImages/7.png");

}

function setup() {
  createCanvas(displayWidth - 10,displayHeight - 100);
  bgSprites = createSprite(displayWidth / 2,displayHeight / 2);
  bgSprites.addImage(bgImg);
  bgSprites.scale = 2.2;

  boy = createSprite(displayWidth/4,displayHeight - 200);
  boy.addAnimation("boy",boyImg);
}

function draw() {
  background("black");
  bgSprites.velocityX = -2;  

  if (bgSprites.x < 0){
    bgSprites.x = bgSprites.width/2;
  }
  drawSprites();
}