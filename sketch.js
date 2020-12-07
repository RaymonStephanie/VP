var dog, hdog, db;
var db = firebase.database();
var food;

function preload() {
  hdog = loadImage("./images/dogImg.png");
  dogimg = loadImage("./images/dogImg1.png");
}

function setup() {
  createCanvas(600, 600);
  dog = createSprite(300, 300);
  dog.addImage("eating", dogimg);
  dog.addImage("happy", hdog);
  dog.scale = 0.2;
  fe = new fe();
  food = new Food();
}

function draw() {
  background(72);
  fe.display();
  textSize(20);
  fill(255, 0, 255);
  imageMode(CENTER);
  food.getfs();
  food.display();
  food.displaymilk();
  drawSprites();
}