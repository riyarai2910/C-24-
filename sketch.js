
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammerObj, stoneObj, rubberObj;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammerObj= new hammer(400,230,50,30);
	stoneObj = new stone(180,300,50,70);
	rubberObj = new rubber(700,300,40,_)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 hammmerObj.display();
 rubberObj.display();
 stoneObj.display();   

  drawSprites();
 
}



