//-------------------------------------------- CRUMPLED BALL-1-------------------------------------------------------------
// creating engine
const Engine = Matter.Engine;
//creating world
const World = Matter.World;
//creating bodies
const Bodies = Matter.Bodies;
//creating body
const Body = Matter.Body;

//creating variable of world and world
var engine,world;

// --------------------------------------------SETUP FUNCTION--------------------------------------------------------------------
function setup() {
  //creating canvas of 1200 height and 800 width
	createCanvas(1200, 800);

// creating Engine inside Engine variable  
  engine = Engine.create();
  
// creating world inside Engine's world  
  world = engine.world;
  
  // creating Ground
  Ground = new Ground(width/2,height,width,20);
  //creating a waste paper
  paper = new Paper(200,200,20);  

  //creating Dustbin with all the sides
  dustbinright = new Dustbin(900,height - height/10,15,140);
  dustbinleft = new Dustbin(1100,height - height/10,15,140);
  dustbinbase = new Dustbin(1000,height - height/41,200,15);

  //giving Gravity
	Engine.run(engine);
  
}

//--------------------------------------------------------------DRAW FUNCTION -----------------------------------------------------
function draw() {
  
  rectMode(CENTER);

  //giving black color to background 
  background(0);
 
  // display the Items 
  Ground.display();

  paper.display();
  
  dustbinright.display();
  dustbinleft.display();
  dustbinbase.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:80, y: -80})
  }
}