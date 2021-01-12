var myEngine , myWorld, ground;

function setup() {
  createCanvas(800,400);
  
  myEngine  = Matter.Engine.create();
  myWorld   = myEngine.world;

var options = {

  isStatic: true

}

 ground  =  Matter.Bodies.rectangle(400,400,800,20,options);
 Matter.World.add(myWorld, ground);

 var options1 = {

 restitution:1

}

ball= Matter.Bodies.circle(400,100,20,options1)
  Matter.World.add(myWorld, ball);
  console.log(ground);
}



function draw() {

  Matter.Engine.update(myEngine);


  background(0);  
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);

  circle(ball.position.x, ball.position.y,40);
  
}