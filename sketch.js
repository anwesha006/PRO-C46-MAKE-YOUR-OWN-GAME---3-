var pacmanUpI, pacmanRightI, pacmanDownI, pacmanLeftI;
var BlueMonsterI, RedMonsterI, GreenMonsterI, PinkMonsterI;
var cherry;
var backgroundImg;


function preload(){
  pacmanUpI = loadAnimation("Images/closeMouth.png","Images/openMouth.png");
  pacmanRightI = loadImage("Images/pacmanRight.gif");
  pacmanDownI = loadImage("Images/pacmanDown.gif");
  pacmanLeftI = loadImage("Images/pacmanLeft.gif");
  BlueMonsterI = loadImage("Images/BlueMonster.png");
  RedMonsterI = loadImage("Images/RedMonster.png");
  GreenMonsterI = loadImage("Images/GreenMonster.png");
  PinkMonsterI = loadImage("Images/PinkMonster.png");
  cherry = loadImage("Images/cherry.png");
  backgroundImg = loadImage("Images/background.png");
}

function setup() {
  createCanvas(800,400);

//pacmanUp
  pacmanUp=createSprite(200,200,20,20);
  pacmanUp.addAnimation("pacmanUp",pacmanUpI);
  pacmanUp.scale=0.3;


/*  pacmanRight=createSprite(200,150,20,20);
  pacmanRight.addImage(pacmanRightI);
  pacmanRight.scale=0.3;
  pacmanRight.visible=false;

  pacmanDown=createSprite(200,100,20,20);
  pacmanDown.addImage(pacmanDownI);
  pacmanDown.scale=0.3;
  pacmanDown.visible=false;

  pacmanLeft=createSprite(200,50,20,20);
  pacmanLeft.addImage(pacmanUpI);
  pacmanLeft.scale=0.3;
  pacmanLeft.visible=false;

  BlueMonster=createSprite(100,200,20,20);
  BlueMonster.addImage(BlueMonsterI);
  BlueMonster.scale=0.1;

  RedMonster=createSprite(100,150,20,20);
  RedMonster.addImage(RedMonsterI);
  RedMonster.scale=0.05;

  GreenMonster=createSprite(100,100,20,20);
  GreenMonster.addImage(GreenMonsterI);
  GreenMonster.scale=0.1;

  PinkMonster=createSprite(100,50,20,20);
  PinkMonster.addImage(PinkMonsterI);
  PinkMonster.scale=0.05;
*/}

function draw() {
  background(backgroundImg);  

  if(keyDown(UP_ARROW)){
  pacmanUp.velocityY= -2;
}

/*  if(keyDown(DOWN_ARROW)){
    pacmanUp.visible=false;
    pacmanDown.visible=true;
    pacmanDown.velocityY= 2;
}*/


  drawSprites();
}