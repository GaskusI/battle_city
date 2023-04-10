class Menu {
  constructor() {
    this.titlePosition = new p5.Vector(CANVAS_SIZE.width / 2,
                                       CANVAS_SIZE.height / 4);
    this.playTextPosition = new p5.Vector(CANVAS_SIZE.width / 2,
                                           CANVAS_SIZE.height / 2);
    
    this.drawTitle();
    this.drawPlayButton();
  }
  
  drawTitle() {
    textSize(CANVAS_SIZE.width / 10);
    textAlign(CENTER, CENTER);
    fill(255,0,0);
    strokeWeight(5);
    stroke(255);
    text('BATTLE CITY', this.titlePosition.x, this.titlePosition.y);
  }
  
  drawPlayButton() {
    imageMode(CENTER);
    image(playerTank, this.playTextPosition.x / 1.5,
                      this.playTextPosition.y);
    textSize(CANVAS_SIZE.width / 25);
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    text('Start game', this.playTextPosition.x, this.playTextPosition.y);
    
  }
  
  draw() {
    this.drawTitle();
    this.drawPlayButton();
  }
}