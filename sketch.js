
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new roof(60,50,400,30)

bob1=new bob(60,200,30)
bob2=new bob(100,200,30)
bob3=new bob(140,200,30)
bob4=new bob(180,200,30)
rope1=new Rope(bob1.body,{x:60,y:50})
rope2=new Rope(bob2.body,{x:100,y:50})
rope3=new Rope(bob3.body,{x:140,y:50})
rope4=new Rope(bob4.body,{x:180,y:50})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



