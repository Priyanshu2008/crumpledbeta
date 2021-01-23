
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,predball;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 645);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=createSprite(1100,590,20,200);
	box2=createSprite(1000,635,200,20);
	box3=createSprite(900,590,20,200);
predball = new Ball (200,200,30)
//	predball=createSprite()
grand = new Ground (1500/2,640,2000,20);
box2 = Bodies.rectangle(400,690,200,20 , {isStatic:true} );
	World.add(world, box2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 predball.display();
 grand.display();
}



