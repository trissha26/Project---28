
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var tree, treeImg;
var ground, stone, slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(900, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200, 500);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	tree = createSprite(600, 290);
	tree.addImage(treeImg);
	tree.scale = 0.45;

	ground = new Ground(450,575,900,10); 
	mango1 = new Mango(390,180,50);
	mango2 = new Mango(510,70,50); 
	mango3 = new Mango(480,270,50); 
	mango4 = new Mango(640,50,50); 
	mango5 = new Mango(640,260,50); 
	mango6 = new Mango(780,250,50); 
	mango7 = new Mango(720,150,50); 
	mango8 = new Mango(585,170,50); 

	stone = new Stone(150,445,50);
    slingshot = new SlingShot(stone.body, {x:150, y:445});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);
  drawSprites();

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();
  slingshot.display();



  detectcollision(mango1,stone);
  detectcollision(mango2,stone);
  detectcollision(mango3,stone);
  detectcollision(mango4,stone);
  detectcollision(mango5,stone);
  detectcollision(mango6,stone);
  detectcollision(mango7,stone);
  detectcollision(mango8,stone); 
 
}

function mouseDragged(){
    
 Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
  slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x:225,y:420});
       slingshot.attach(stone.body);
       
       
    }
}

function detectcollision(lmango,lstone){
	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
	 if(distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false);
	 }
}



