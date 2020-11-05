var dog, hdog, db, foods, foodst;
var db = firebase.database();

function preload()
{
  hdog = loadImage("./images/dogImg.png");
  dogimg = loadImage("./images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage("eating",hdog);
  dog.scale = 0.2;
}

function draw() {  
  background(72);
  foods = foodst;
  textSize(20);
  getfs();
  fill(255,0,255);
  text("Press Up Arrow to feed Hedwig.",100,100);
  if (foodst != undefined) {
    fill(255);
    text("Food Left : " + foodst,180,150);
  }
  imageMode(CENTER);
  feed();
  drawSprites();
}

function getfs() {
  db.ref('/food').on("value",(data) => {
    foodst = data.val();
  });
}

function feed() {
  foods = foods -1;
  if (keyDown(UP_ARROW)) {
    db.ref('/').update({
      food : foods
    });
  }
}