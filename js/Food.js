class Food {
  constructor() {
    this.foodst;
    this.lf;
    this.foods;
    this.time;
    this.image = loadImage("../images/Milk.png");
    this.log = [];
    this.timelog = [];
    this.x = 0;
    this.y = 0;
  }

  display() {
    this.foods = this.foodst;
    for (let i = 0; i < this.log.length; i++) {
      var fl = this.log[i];
    }
    for (let i = 0; i < this.timelog.length; i++) {
      var tl = this.timelog[i];
    }
    text("Food(s) left : " + fl, 100, 50);
    text("Last fed : " + tl, 100, 75);
  }

  getfs() {
    db.ref('/food').on("value", (data) => {
      this.foodst = data.val();
    });
    db.ref('/time').on("value", (data) => {
      this.time = data.val();
    });
    this.log.push(this.foodst);
    this.timelog.push(this.time);
  }

  updatefs() {
    if (this.foodst > 0 && this.foodst <= 20) {
      this.foods = this.foods - 1;
      var hr = hour();
      var mn = minute();
      var sec = second();
      var date = hr + ":" + mn + ":" + sec;
      db.ref('/').update({
        food: this.foods,
        time: date
      });
      dog.changeImage("happy");
    }
  }

  addfs() {
    if (this.foodst <= 19) {
      this.foods = this.foods + 1;
      db.ref('/').update({
        food: this.foods,
      });
      dog.changeImage("eating");
    }
  }

  displaymilk() {
    var x = 80,
      y = 100;
    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);
    if (this.foodst != 0) {
      for (var i = 0; i < this.foodst; i++) {
        if (i % 10 == 0) {
          x = 150;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }
  }
}