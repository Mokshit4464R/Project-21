var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1200,300);
speed=random(223, 321);
weight=random(30, 52);
thickness=random(22, 83);
bullet = createSprite(200, 150, 30, 10);
bullet.velocityX = speed;
bullet.shapeColor=color("white");
  wall = createSprite(950, 150, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  //wall.debug=true;
  //wall.visible=false;
}

function draw() {
  background(155,50,25);  
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

}

//hasCollided(bullet, wall);
  drawSprites();
}