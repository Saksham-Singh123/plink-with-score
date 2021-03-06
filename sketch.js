var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var count = 0;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var scoreLine;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
  textSize(30);
  text("500",20,550);
  text("500",100,550);
  text("500",180,550);
  text("200",260,550);
  text("100",340,550);
  text("100",420,550);
  text("200",500,550);
  text("500",580,550);
  text("500",660,550);
  text("500",740,550);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles.x>15&&particles.x<75&&particles.y>510){
     score+=500;
   }
   if(particles.x>80&&particles.x<155&&particles.y>510){
    score+=500;
  }
  if(particles.x>160&&particles.x<235&&particles.y>510){
    score+=500;
  }
  if(particles.x>240&&particles.x<315&&particles.y>510){
    score+=200;
  }
}
