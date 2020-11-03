
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png"); 
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background(225);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME :"+survivalTime,100,50);
  
  if(keyDown("space")) {
  monkey.velocityY = -12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  food();
  obstacles();

  drawSprites();
  
}

function food() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
    
    
    
    
    bananaGroup.add(banana);
  }
}


function obstacles() {
  
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,327,40,10);
    obstacle.addImage( obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -3;
    
    
    obstacle.lifetime = 200;
    
    
    
    
    
    obstacleGroup.add(obstacle);
  }
}





