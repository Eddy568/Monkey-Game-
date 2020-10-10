
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,600,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;

  score = 0;
  
}


function draw() {
  background("lightgreen");
  
  food();
  obstacles();
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
}
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<0){
    ground.x = ground.width /2;
  }
  
  monkey.collide(ground);
  
  drawSprites();
  
}


function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
  banana.scale = 0.1
  banana.y = Math.round(random(80,120));
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 200;
  foodGroup.add(banana);
}
  
}

function obstacles(){
  if (frameCount % 100 === 0){
  var obstacle = createSprite(600,350,10,40);
  obstacle.scale = 0.1;
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime = 400;
  obstacleGroup.add(obstacle);
}
  
}





