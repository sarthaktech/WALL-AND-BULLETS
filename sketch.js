var bullet,wall
var speed,weight,thickness


function setup() {

  createCanvas(1600,400);
  speed=random(200,300)
  weight=random(30,50)
  thickness=random(20,50)
  bullet=createSprite(100, 200, 20, 10);
  wall=createSprite(1000,200,thickness,height/2);
}

function draw() {
  background("black");  

  bullet.velocityX=speed
if(collided(wall,bullet)){
  bullet.velocityX=0
var damage=0.5*weight*speed*speed/thickness*thickness*thickness
if(damage>10){
  wall.shapeColor="red"
}
if(damage<10){
  wall.shapeColor="green"
}
}








  drawSprites();
}
function collided(a,b){
if(wall.x-bullet.x<wall.width/2+bullet.width/2){
  return true
}else{
  return false
}
}



