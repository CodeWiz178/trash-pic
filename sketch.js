
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustLeft, dustRight, dustBottom;	
var paper1;
var dustbin, dustbinIMG;
function preload()
{
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 650, 1600, 20);
	dustLeft = new Ground(1420,465, 10,275);
	dustRight = new Ground(1180, 465, 10,275);
	dustBottom = new Ground(1300, 640, 250,10);
	paper1 = new Paper(100,6,70);
	dustbin = createSprite(1300,480)
	dustbin.addImage(dustbinIMG)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground1.display();
  dustLeft.display();
  dustRight.display();
  dustBottom.display();
  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5,y:-1.95});
	}
}

