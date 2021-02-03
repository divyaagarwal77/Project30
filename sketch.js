const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var polygon_img;
function preload()
{
	polygon_img=loadImage("polygon.png")
}

function setup() {
	createCanvas(1600,450);
	engine = Engine.create();
	world = engine.world;

var options={
	//isStatic:true
}


   polygon=Bodies.circle(130,300,20,options)
   World.add(world,polygon)

	ground1=new Ground(650,405,240,10)
	ground2=new Ground(800,445,1600,10)
	ground3=new Ground(1350,235,160,10)
	
	slingshot=new SlingShot(this.polygon,{x:130,y:300})

//forth

block1=new Block(560,375,30,40)
block2=new Block(590,375,30,40)
block3=new Block(620,375,30,40)
block4=new Block(650,375,30,40)
block5=new Block(680,375,30,40)
block6=new Block(710,375,30,40)
block7=new Block(740,375,30,40)


//third
   block8=new Block(590,335,30,40)
   block9=new Block(620,335,30,40)
   block10=new Block(650,335,30,40)
   block11=new Block(680,335,30,40)
   block12=new Block(710,335,30,40)
//second
  block13=new Block(620,295,30,40)
  block14=new Block(650,295,30,40)
  block15=new Block(680,295,30,40)
//top
  block16=new Block(650,255,30,40)

 

//three
  block17=new Block(1290,215,30,40)
  block18=new Block(1320,215,30,40)
  block19=new Block(1350,215,30,40)
  block20=new Block(1380,215,30,40)
  block21=new Block(1410,215,30,40)

//two
  block22=new Block(1320,175,30,40)
  block23=new Block(1350,175,30,40)
  block24=new Block(1380,175,30,40)

//one
  block25=new Block(1350,135,30,40)


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  ground1.display()
  ground2.display()
  ground3.display()
  slingshot.display()
  fill(135,206,234)
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  fill(255,192,203)
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  fill(62,223,207)
  block13.display()
  block14.display()
  block15.display()
  fill(128,128,128)
  block16.display()
  fill(135,206,234)
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  fill(62,223,207)
  block22.display()
  block23.display()
  block24.display()
  fill(255,192,203)
  block25.display()

  drawSprites();
 
  stroke(255,104,8)
  textSize(22)
  text("Drag the Polygon to destroy the Blocks.",50,30)

  stroke(255,104,8)
  textSize(22)
  text("Press Space to call the Polygon back.",50,60)
}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:130,y:300})
      slingshot.attach(this.polygon);
  }
}
