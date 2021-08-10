var bg;
var cat, catImg, catRunningImg, catStopImg;
var mouse, mouseImg, mouseTeaseImg, mouseStopImg;

function preload() {    
    bg = loadImage("images/garden.png");
    catImg =loadAnimation("images/cat1.png");
    catRunningImg = loadAnimation("images/cat2.png","images/cat3.png");
    catStopImg =loadAnimation("images/cat4.png");
    mouseImg =loadAnimation("images/mouse1.png");
    mouseTeaseImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseStopImg =loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(850,500);
    cat.addAnimation("sitting", catImg);
    cat.scale = 0.2;

    mouse = createSprite(100,500);
    mouse.addAnimation("cheese", mouseImg);
    mouse.scale = 0.2;
}

function draw() {
    background(bg);
    
    //condition to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.x = 200;
        cat.addAnimation("standing", catStopImg);
        cat.changeAnimation("standing");
        mouse.addAnimation("smiling", mouseStopImg);
        mouse.changeAnimation("smiling");
    }
    
    drawSprites();
}

function keyPressed(){
  //For moving and changing animation
  if(keyDown(LEFT_ARROW)){
    cat.velocityX = -5;
    cat.addAnimation("running", catRunningImg);
    cat.changeAnimation("running");
    mouse.addAnimation("cheese", mouseTeaseImg);
    mouse.frameDelay = 25;
    mouse.changeAnimation("teasing");  
  }
  }