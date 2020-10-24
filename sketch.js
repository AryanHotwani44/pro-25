
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground

function preload()
{
	
}

function setup() { 
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,670,10,10)

    box1 = new DustBin(600,695,100,50);
    box2 = new DustBin(550,660,60,80);
    box3 = new DustBin(650,660,50,80);
    
    ground = Bodies.rectangle(width/2, 710, width, 10 , {isStatic:true} );
    fill("white")
 	World.add(world, ground);

  Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:2.8,y:-4.5});
  }


}
