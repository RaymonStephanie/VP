class fe {
  constructor() {
    this.feedbutton = createButton("Feed Hedwig");
    this.addbutton = createButton("Add food");
  }

  display() {
    this.feedbutton.position(displayWidth / 2 - 50, 200);
    this.addbutton.position(displayWidth / 2 - 50, 220);
    this.feedbutton.mouseClicked(() => {
      food.updatefs();
    });
    this.addbutton.mouseClicked(() => {
      food.addfs();
    });
  }

  hide() {
    this.feedbutton.hide();
    this.addbutton.hide();
  }
}
