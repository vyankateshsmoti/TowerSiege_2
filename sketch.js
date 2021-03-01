const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,object;

var ground;
var stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var polygon_Obj;
var slingshot;

function preload(){

}

function setup(){
   canvas = createCanvas(1200,500);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,490,1200,20);
   stand1 = new Ground(600,350,320,10);
   stand2 = new Ground(950,218,250,10);


   block1 = new block(480,312,40,50);
   block2 = new block(520,312,40,50);
   block3 = new block(560,312,40,50);
   block4 = new block(600,312,40,50);
   block5 = new block(640,312,40,50);
   block6 = new block(680,312,40,50);
   block7 = new block(720,312,40,50); 

   block8 = new CBlock1(520,262,40,50);
   block9 = new CBlock1(560,262,40,50);
   block10 = new CBlock1(600,262,40,50);
   block11 = new CBlock1(640,262,40,50);
   block12= new CBlock1(680,262,40,50);

   block13 = new CBlock2(560,212,40,50);
   block14 = new CBlock2(600,212,40,50);
   block15 = new CBlock2(640,212,40,50);

   block16 = new block(600,162,40,50);

   block17 = new CBlock1(870,185,40,50);
   block18 = new CBlock1(910,185,40,50);
   block19 = new CBlock1(950,185,40,50);
   block20 = new CBlock1(990,185,40,50);
   block21 = new CBlock1(1030,185,40,50);

   block22 = new CBlock2(910,145,40,50);
   block23 = new CBlock2(950,145,40,50);
   block24 = new CBlock2(990,145,40,50);

   block25 = new block(950,105,40,50);

   polygon_Obj = new polygon(200,200,60,60);
   
slingshot = new SlingShot(polygon_Obj.body,{x:200,y:200});

   

}

function draw(){
    background(0);
   
    Engine.update(engine);

     ground.display();
     stand1.display();
     stand2.display();
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();

     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();

     block13.display();
     block14.display();
     block15.display();

     block16.display();

     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();

     block22.display();
     block23.display();
     block24.display();

     block25.display();

     polygon_Obj.display();

    slingshot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon_Obj.body,{x : mouseX,y:mouseY});
}
function mouseReleased(){
   slingshot.fly();
}
function keyPressed(){
   if(keyCode === 32){
      slingshot.attach(polygon_Obj.body);
      Matter.Body.setPosition(polygon_Obj.body,{x:100,y:100});
   }
}
