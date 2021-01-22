
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var backgroundImg2;
var player, playerImg;
var ground,groundImg;
var trees;

function preload()
{
	backgroundImg = loadImage("mario2.png");
	backgroundImg2 = loadImage("background.png");
	playerImg = loadAnimation("mario3.png","mario4.png","mario5.png");
	treeImg1 = loadImage("tree1.png");
	treeImg2 = loadImage("tree2.png");
	treeImg3 = loadImage("tree3.png")
	groundImg = loadImage("mario2.jpg");
	groundImg2 = loadImage("ground2.png");
	groundImg3 = loadImage("ground3.png");
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	treesGroup = createGroup();

	ground = createSprite(1000,650,2000,110);
	ground.addImage("ground", groundImg2);
	ground.velocityX = -3;
	ground.scale = 3;
	ground.x = ground.width/2;
	console.log(ground.x);

	background2 = createSprite(800,300,2500,1000);
	background2.addImage("back",backgroundImg2);
	background2.scale = 2;
	background2.velocityX = -3;
	// tree = createSprite(300,500,780,110);
	// tree.addImage("tree",treeImg1);
	// tree.scale = 0.5;
	
	player = createSprite(60,600,0,0);
	player.addAnimation("run",playerImg);
	//player.velocityX = 3;


	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	//background(backgroundImg);

	if (background2.x < 0){
		background2.x = background2.width/2;
	}
	 
	player.collide(ground);
	spawnTrees();


  	drawSprites();
}

function spawnTrees(){
	if(frameCount % 200===0){
		trees = createSprite(850,550,50,50);
		trees.velocityX = -3;
		trees.shapeColor = "red";
		console.log(trees.x,trees.y);
		trees.scale = 0.5;
		player.depth = player.depth+1;

		rand = Math.round(random(1,2));
		switch(rand){
			case 1: trees.addImage(treeImg1);
					break;
			case 2: trees.addImage(treeImg3);
					break;
					default:break;
		}
		treesGroup.add(trees);

	}
}


