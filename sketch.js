var dog, hdog, dogimg, food, bimage, gamage, wamage;
var db = firebase.database();
var gs = "";

function preload() {
  hdog = loadImage("./images/dogImg.png");
  dogimg = loadImage("./images/dogImg1.png");
  bimage = loadImage("./images/Bed Room.png");
  gimage = loadImage("./images/Garden.png");
  wimage = loadImage("./images/Wash Room.png");
}

function setup() {
  createCanvas(600, 600);
  dog = createSprite(300, 300);
  dog.addImage("hungry", dogimg);
  dog.addImage("happy", hdog);
  dog.addImage("bed", bimage);
  dog.scale = 0.2;
  fe = new fe();
  food = new Food();
}

function draw() {
  readgs();
  background(72);
  fe.display();
  textSize(20);
  fill(255, 0, 255);
  imageMode(CENTER);
  food.getfs();
  food.display();
  food.displaymilk();
  if (gs.gameState != undefined && gs.gameState != "hungry") {
    fe.hide();
    dog.remove();
  }
  if (gs.time != undefined) {
    var hr = parseInt(gs.time.split(":")[0]);
    var compare = parseInt(hour());
    // console.log(compare, hr + 1, hr + 2, hr + 3);
    if (hr + 1 == compare) {
      food.garden();
      db.ref("/").update({
        gameState: "playing",
      });
    }
    if (hr + 2 == compare) {
      food.bedroom();
      db.ref("/").update({
        gameState: "sleeping",
      });
    }
    if (hr + 3 == compare) {
      food.washroom();
      db.ref("/").update({
        gameState: "bathing",
      });
    }
  }
  drawSprites();
}

function readgs() {
  db.ref("/").on("value", (data) => {
    gs = data.val();
  });
}
