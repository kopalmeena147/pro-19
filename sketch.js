var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var spookySound,collidesound;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}
function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
    ghost = createSprite(200,200);
    ghost.addImage("ghost",ghostImg);
    ghost.scale = 0.5;
  doorsGroup = new Group();
  climbersGroup = new Group();
}

function draw() {
  background(200);
  if((touches.length>0||keyDown("space")&&ghost.x>= width-120))
  
  if(tower.y > 400){
      tower.y = 300
  }
   if(keyDown("left_arrow")){
     ghost.x = ghost.x-3
   }
   if(keyDown("right_arrow")){
    ghost.x = ghost.x+3
  }
  if(keyDown("space")){
    ghost.velocityY = -3;
  }
  ghost.velocityY = ghost.velocityY+0.8
  if(ghost.isTouching(doorsGroup)){
    doorsGroup.visible = false;
  }
  invisibleBlock = createSprite(height/2,width-10,height,125);
  ghost.collide(invisibleBlock);
    spawnDoors();
    drawSprites();
}
function spawnDoors(){
  
  if (frameCount % 240===0){
    var door = createSprite(200,-50);
    door.addImage("door",doorImg) 

    var climber = createSprite(200,10);
    climber.addImage("climber",climberImg);
    door.velocityY = 1;
    kopalMeena 
    door.x = Math.round(random(120,400))
    climber.x = door.x;
    climber.velocityY = 1;
    climber.lifetime = 600;
    climbersGroup.add(climber);
    door.lifetime = 600;
    doorsGroup.add(door);
    ghost.depth = door.depth;
    ghost.depth += 1;}}