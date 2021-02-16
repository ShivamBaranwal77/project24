const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,390,1200,20);

	rubber = new Rubber(900,300,80,80);

	hammer = new Hammer(100,100);

	stone = new Stone(800,300,80,80);

	circle1 = new Circle(600,300,10);
	circle2 = new Circle(620,300,10);
	circle3 = new Circle(640,300,10);
	circle4 = new Circle(660,300,10);
	circle5 = new Circle(680,300,10);
	circle6 = new Circle(700,300,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();

  rubber.display();

  hammer.display();

  stone.display();

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  
  drawSprites();
 
}