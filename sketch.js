var dog,happydog;
var foodS,foodStock;
var database;
var position;
var Num = 20

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800,800);

  

  dog = createSprite(600,400,10,10);
  dog.addImage(dogIMG);
  //dog.addImage(dogImg1)
  dog.scale = 0.4;



}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW))
  {
    writePosition(position);
    dog.addImage(dogImg1);
    Num = Num-1;
  }


  textSize(20);
  textFont("Courier New");
  fill(255);
  stroke(255);
  text("Food Remaining :" + Num, 200,200 );
  text("Press Up_Arrow To Feed your Pet", 130,100 )

if(Num == 0){
   fill(255);
   stroke(255);
   text("oh no! the stock is finished.",165,150);
   dog.changeImage(dogImg1);
}
if(Num < 0){
  textSize(20);
  textFont("Courier New");
  fill(255);
  stroke(255);
  text("Food Remaining: null",200,200);
  Num.visible = false;
}


}

function readPosition(data){
  position = data.val();
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(data){
  if(data>0){
    data=data-1;
  }
  else{
    data=0;
  }
  database.ref('/').update;({
      'Food': data
  })  
}



