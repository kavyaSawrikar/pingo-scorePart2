const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boxs = [];
var divs = [];


var gameState = "play";

var count = 0;

var score = 0;

var particle = null;
var a;
var circles=[];
function setup() {
  var canvas = createCanvas(800,1200);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  for(var i = 200; i <= 700; i=i+200){

  
    for(var j = 100; j <= 790; j=j+100){
      boxs.push(new Box(j,i,15));
    }
  }

  for(var i = 300; i <= 700; i=i+200){

  
    for(var j = 50; j <= 790; j=j+100){
      boxs.push(new Box(j,i,15));
    }
  }
for(var d = 0; d <= 800; d=d+100){
  divs.push(new Ground(d,1100,15,300));
}

  ground = new Ground(400,1190,800,20)


  barrier1 = new Ground(50,190,100,10)
  
  barrier2 = new Ground(750,190,100,10)

  wall1 = new Ground(0,600,10,1200)

  wall2 = new Ground(800,600,10,1200)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)

}

function draw() {
  //camera.zoom=camera.zoom+1

  Engine.update(engine);

  background(rgb(25,0,60));  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 */

/*for (var j = 200; j < 825; j=j+100) 
  {
  for (var i = 100; i < 725; i=i+100) 
  {
  box1 = new Box(i,j,25,25)
  box1.display() 
  }
}*/






for(var j = 0; j < boxs.length; j++){

  boxs[j].display();
}
for(var d = 0; d < divs.length; d++){

  divs[d].display();
}



console.log(particle)


ground.display()

if(keyIsDown(75)){

  if(particle === null){
    keyPressed()
  }
  
}

if(particle !== null){
  particle.display()
}

/*if(particle !== null){
  if(particle.Y > 960){
  particle=null;
}
}*/


barrier1.display()

barrier2.display()

wall1.display();
wall2.display();

 drawSprites();

 textSize(30);
 fill("pink")
 stroke("lightblue")
text("Scroll down", 320,25) 

textSize(20);
fill("pink")
stroke("lightblue")
text("PRESS: k  wait for score to refresh", 250,55) 

textSize(20);
fill("pink")
stroke("lightblue")
text("Score: " + score, 50,30) 

textSize(20);
fill("white")
stroke("black")
text("500", 730,960);



if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 100)
    {
      score=score+500;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("pink")
stroke("black")
text("100", 630,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 200 && particle.body.position.x > 100)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("purple")
stroke("black")
text("300", 530,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 300 && particle.body.position.x > 200)
    {
      score=score+300;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("blue")
stroke("black")
text("100", 430,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 400 && particle.body.position.x > 300)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("green")
stroke("black")
text("100", 330,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 500 && particle.body.position.x > 400)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("yellow")
stroke("black")
text("300", 230,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 600 && particle.body.position.x > 500)
    {
      score=score+300;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("orange")
stroke("black")
text("100", 130,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 700 && particle.body.position.x > 600)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

textSize(20);
fill("red")
stroke("black")
text("500", 30,960)

if(particle!=null)
{
  particle.display();

  if(particle.body.position.y>1000)
  {
    if(particle.body.position.x < 800 && particle.body.position.x > 700)
    {
      score=score+500;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }
}

if(gameState === "end"){
  
  fill("pink")
  textSize(100)
  text("Game Over", 170,600);

  textSize(50);
  text("Your Score Was "+ score,200,700)
}
}




/*function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
  slingshot.fly();
}
*/
/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
*/

function keyPressed(){
   
    if(gameState !== "end"){
      count++;
      particle=new Particle(mouseX, 100, 15);
    }
  
}