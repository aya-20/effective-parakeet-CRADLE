
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 500, 50);
	bob1 = new Bob(580, 500);
	bob2 = new Bob(570, 500);
	bob3 = new Bob(560, 500);
	bob4 = new Bob(590, 500);
	bob5 = new Bob(550, 500);

	rope1 = new Rope(bob1.body, roof.body, -40*1, 20);
	rope2 = new Rope (bob2.body, roof.body, -40*2, 20);
	rope3 = new Rope(bob3.body, roof.body, -40*3, 20);
	rope4 = new Rope(bob4.body, roof.body, -40*4, 20);
	rope5 = new Rope(bob5.body, roof.body, -40*5, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  //drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



