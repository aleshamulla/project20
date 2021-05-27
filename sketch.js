
var cat, catImg,catImg2, catAni, mouse, mouseImg, mouseImg2, mouseAni;
var gardenImg;
 
function preload() {
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg2 = loadImage("images/cat4.png");
    mouseImg2 = loadImage("images/mouse4.png");
 
    catAni = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseAni = loadAnimation("images/mouse2.png", "images/mouse3.png");
}
 
function setup(){
    createCanvas(1000,800);
    cat =  createSprite(920,650,20,20);
    cat.addImage("catsit",catImg2);
    cat.scale = 0.19;
 
    mouse = createSprite(250,650,20,20);
    mouse.addImage("mouse1", mouseImg);
    mouse.scale = 0.15;
 
}
 
function draw() {
 
    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width/2 + mouse.width/2)){
        cat.changeImage("catsit");
        mouse.addImage("mouse2", mouseImg2);
        mouse.changeImage("mouse2");
        cat.velocityX = 0;
    }

    drawSprites();
    keyPressed();
}
 
 
function keyPressed(){
 
  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    cat.addAnimation("cattease", catImg2);
    cat.changeAnimation("cattease");
  }

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mousetease", mouseAni);
    mouse.changeAnimation("mousetease");

    cat.addAnimation("catwalk", catAni);
    cat.changeAnimation("catwalk");
    cat.velocityX = -2;
  }
}
 
