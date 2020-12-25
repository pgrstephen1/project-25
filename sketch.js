
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var gound;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper = new Paper(200,690,70);
dustbin1 = new Dustbin(620,680,150,20);
dustbin2 = new Dustbin(535,630,20,120);
dustbin3 = new Dustbin(705,630,20,120);
ground = new Ground(400,695,800,10);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("white");
  
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:790,y:-580});
	}
}

