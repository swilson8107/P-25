
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinobj= new Dustbin(1200,650)

paperobj= new Paper(200,450,70)
groundobj=new Ground(1200/2,670,1200,20)

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperobj.display()
  dustbinobj.display()
  groundobj.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145});
  
	}
}




