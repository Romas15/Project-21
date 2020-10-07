var bullet,wall,speed,weight,deformation,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {

  speed=random(223,321);
  weight = random(30,52);

  wall=createSprite(1190,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(70,200,50,40);
  bullet.velocityX = 75;

  thickness = random(22,83);
}

function draw() {
  createCanvas(1600,400);

  background(255,255,255);  

if (bullet.x>=1070) {
  bullet.velocityX=0;
}  

 if (bullet.x>=1070)
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness)

  if (damage>10)
     {
        bullet.shapeColor=color(255,0,0);;
     }

     if (damage<10) 
     {
       bullet.shapeColor=color(0,255,0);
     }
       }
    
  drawSprites();

}

function hasCollided(lbullet, lwall) 
{
   bulletRightEdge=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
}
