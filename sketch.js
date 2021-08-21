
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy_img, mango_img, stone_img, tree_img;
var boy, ground, stone, tree, slingshot, gameState;
var mango, mango2, mango3, mango4, mango5;

function preload()
{
	boy_img = loadImage("Images/boy.png");
	mango_img = loadImage("Images/mango.png");
	//stone_img = loadImage("Images/stone.png");
	tree_img = loadImage("Images/tree.png");
}

function setup() {
createCanvas(1000, 750);
boy = createSprite(225,650,10,10);
boy.addImage("boy",boy_img);
boy.scale = 0.15;
tree = createSprite(700,450,10,10);
tree.addImage("tree",tree_img);
tree.scale = 0.5;
gameState = "onSling"
//stone = createSprite(500,650,10,10);
//stone.addImage("stone",stone_img);
//stone.scale = 0.1;
engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
ground = new Ground(width/2,height,1000,20);
stone = new Stone(150,575,30);
slingshot = new SlingShot(stone.body,{x:150,y:575});
mango = new Mangoes(700,250,40);
mango2 = new Mangoes(600,280,40);
mango3 = new Mangoes(760,330,40);
mango4 = new Mangoes(500,350,40);
mango5 = new Mangoes(820,375,40);
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(232,232,232);
  
  drawSprites();
 ground.display();
 stone.display();
 slingshot.display();
 mango.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 detectCollision(stone,mango);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
        //Matter.Body.applyForce(polygon.body,polygon.body.position, {x:5, y:5} );
        return false;
    }
}


function mouseReleased(){
    slingshot.fly();
    //birds.pop();
    if (gameState!=="launched"){
        Matter.Body.applyForce(stone.body,stone.body.position, {x:5, y:5} );
        
    }
    gameState = "launched";
    return false;
}

function keyPressed() {
    if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:150, y:575});
        slingshot.attach(stone.body);
        gameState = "onSling";
    }
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition= lmango.body.position
	stoneBodyPosition= lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if (distance <= lmango.r + lstone.r) {
		Matter.body.setStatic(lmango.body, false);
	}
}



