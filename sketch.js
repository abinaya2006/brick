var lives=3
var add=0
var score=0
var time=0;
var hitsound,hit2,hit3,fail

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){

   createCanvas(600,600)
   engine = Engine.create();
   world = engine.world; 
   
  

   //create paddle
   paddle=createSprite(300,500,100,20)
   paddle.shapeColor="brown"

   //create ball
   ball=createSprite(270,400,20,20)
   ball.shapeColor="green"
   ball.velocityX = 4;
   ball.velocityY = 5;

 
   
 
   //create bricks
   //1st row
   brick1=createSprite(100,75,100,40)
   brick1.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick2=createSprite(220,75,100,40)
   brick2.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick3=createSprite(340,75,100,40)
   brick3.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick4=createSprite(480,75,150,40)
   brick4.shapeColor=color(random (0,255),random(0,255),random(0,255))
   //2nd row
   brick5=createSprite(100,145,100,40)
   brick5.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick6=createSprite(220,145,100,40)
   brick6.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick7=createSprite(340,145,100,40)
   brick7.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick8=createSprite(480,145,150,40)
   brick8.shapeColor=color(random (0,255),random(0,255),random(0,255))
   //3rd row
   brick9=createSprite(100,215,100,40)
   brick9.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick10=createSprite(220,215,100,40)
   brick10.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick11=createSprite(340,215,100,40)
   brick11.shapeColor=color(random (0,255),random(0,255),random(0,255)) 
   brick12=createSprite(480,215,150,40)
   brick12.shapeColor=color(random (0,255),random(0,255),random(0,255))
   //4th row 
   brick13=createSprite(100,285,100,40)
   brick13.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick14=createSprite(220,285,100,40)
   brick14.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick15=createSprite(340,285,100,40)
   brick15.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick16=createSprite(480,285,150,40)
   brick16.shapeColor=color(random (0,255),random(0,255),random(0,255))  
   //5th row 
   brick17=createSprite(100,355,100,40)
   brick17.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick18=createSprite(220,355,100,40)
   brick18.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick19=createSprite(340,355,100,40)
   brick19.shapeColor=color(random (0,255),random(0,255),random(0,255))
   brick20=createSprite(480,355,150,40)
   brick20.shapeColor=color(random (0,255),random(0,255),random(0,255))
   
    //back
    ba=createSprite(300,45,29048,3448)
    ba.shapeColor='#D5D6D6'
    ba.visible=false
 
    //inside edge create
    insideedge1 = createSprite(10, 270, 25, 800);
    insideedge1.shapeColor = "lightblue";
    insideedge2 = createSprite(200, 10, 800, 25);
    insideedge2.shapeColor = "lightblue";
    insideedge3 = createSprite(590, 309, 25, 800);
    insideedge3.shapeColor = "lightblue";
    insideedge4 = createSprite(200, 590, 800, 25);
    insideedge4.shapeColor = "lightblue";
   
    hitsound=loadSound("hit1.ogg")
    hit2=loadSound("hit2.ogg")
    hit3=loadSound("hit3.ogg")
    
}

function draw(){
   background("#D5D6D6")
   Engine.update(engine);
    
  if (frameCount % 30 == 0 &&lives!==0&&add<20 ){
    time++
  }
   paddle.velocityX=0

   //velocity for paddle
   if(keyDown("LEFT_ARROW")){
       paddle.velocityX=-8
   }else if(keyDown("RIGHT_ARROW")){
       paddle.velocityX=8
   }



   //bounce off for paddle
   paddle.bounceOff(insideedge1)
   paddle.bounceOff(insideedge3)

   if(ball.isTouching(paddle)){
    ball.bounceOff(paddle)
    hitsound.play()
   }
   //bounce off for ball
  if(ball.isTouching(insideedge1)||(ball.isTouching(insideedge2)||ball.isTouching(insideedge3))){
   ball.bounceOff(insideedge1)
   ball.bounceOff(insideedge2)
   ball.bounceOff(insideedge3)
   hit2.play()}
 
  //istouching function

  if(ball.isTouching(brick1)){ball.bounceOff(brick1);add+=1;score+=3;lives+=1;brick1.destroy();hit3.play()}  
  if(ball.isTouching(brick2)){ball.bounceOff(brick2);add+=1;score+=1;brick2.destroy();hit3.play()}  
  if(ball.isTouching(brick3)){ball.bounceOff(brick3);add+=1;score+=1;brick3.destroy();hit3.play()}  
  if(ball.isTouching(brick4)){ball.bounceOff(brick4);add+=1;score+=1;brick4.destroy();hit3.play()}  
  if(ball.isTouching(brick5)){ball.bounceOff(brick5);add+=1;score+=5;brick5.destroy();hit3.play()}  
  if(ball.isTouching(brick6)){ball.bounceOff(brick6);add+=1;score+=1;brick6.destroy();hit3.play()}  
  if(ball.isTouching(brick7)){ball.bounceOff(brick7);add+=1;score+=3;brick7.destroy();hit3.play()}  
  if(ball.isTouching(brick8)){ball.bounceOff(brick8);add+=1;score+=1;brick8.destroy();hit3.play()}  
  if(ball.isTouching(brick9)){ball.bounceOff(brick9);add+=1;score+=1;brick9.destroy();hit3.play()}  
  if(ball.isTouching(brick10)){ball.bounceOff(brick10);add+=1;score+=1;brick10.destroy();hit3.play()}  
  if(ball.isTouching(brick11)){ball.bounceOff(brick11);add+=1;score+=1;brick11.destroy();hit3.play()}  
  if(ball.isTouching(brick12)){ball.bounceOff(brick12);add+=1;score+=1;brick12.destroy();hit3.play()}  
  if(ball.isTouching(brick13)){ball.bounceOff(brick13);add+=1;score+=3;lives+=1;brick13.destroy();hit3.play()}  
  if(ball.isTouching(brick14)){ball.bounceOff(brick14);add+=1;score+=1;brick14.destroy();hit3.play()}  
  if(ball.isTouching(brick15)){ball.bounceOff(brick15);add+=1;score+=2;brick15.destroy();hit3.play()}  
  if(ball.isTouching(brick16)){ball.bounceOff(brick16);add+=1;score+=1;brick16.destroy();hit3.play()}  
  if(ball.isTouching(brick17)){ball.bounceOff(brick17);add+=1;score+=1;brick17.destroy();hit3.play()}  
  if(ball.isTouching(brick18)){ball.bounceOff(brick18);add+=1;score+=1;lives+=1;brick18.destroy();hit3.play()}  
  if(ball.isTouching(brick19)){ball.bounceOff(brick19);add+=1;score+=4;brick19.destroy();hit3.play()}  
  if(ball.isTouching(brick20)){ball.bounceOff(brick20);add+=1;score+=1;brick20.destroy();hit3.play()}  
    console.log(add)
  
   
  //reduce lives
  if(ball.isTouching(insideedge4)){
      ball.x=270;
      ball.y=400;
      ball.velocityX = 4;
    ball.velocityY = 5
    lives-=1
    }
   
   //displaying you win 
  

   drawSprites()
   //text displaying
   textSize(30)
   if(add<20&&lives!==0){
   fill (color(random (0,155),random(0,155),random(0,155)))
   text("BRICK BREAKER",200,30)
   fill("red")
   text("💓"+lives,8,30)
   text("💰"+score,8,589)
   text("⏳"+time,500,589)}
 
   if(add>=20&&lives!==0){
       textSize(50)
       fill (color(random (0,155),random(0,155),random(0,155)))
     text("𝓨𝓞𝓤 𝓦𝓞𝓝!",200,100)  
     text("💓"+lives,250,230)
     text("💰"+score,250,430)
     text("⏳"+time,250,550)
     ball.x=2000
     paddle.x=1000 
     
}

if(lives<=0){
  textSize(50)
  fill (color(random (0,155),random(0,155),random(0,155)))
  text("𝓨𝓞𝓤 LOSE",200,100)  
  text("💓"+lives,250,230)
  text("💰"+score,250,330)
  text("⏳"+time,250,430)
  ba.visible=true
  ball.x=2000
  paddle.x=1000
}
}
