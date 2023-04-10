class Tile {
  constructor(index) {
    this.scale = TILE_SIZE;
    this.position = new p5.Vector(index.x * this.scale, 
                                  index.y * this.scale);
    this.health = 0;
    this.state = TILE_STATES.empty;
  }

  getPositionX() {
    return this.position.x;
  }

  getPositionY() {
    return this.position.y;
  }
  
  getHealth() {
    return this.health;
  }
  
  setHealth(index) {
    this.health = index;
  }

  modifyState(s) {
    this.state = s;
  }

  draw() {
    //strokeWeight(1);
    //stroke(255,140,0);
    //noFill();
    imageMode(CORNER);
    switch (this.state) {
      case TILE_STATES.empty:
        break;
      case TILE_STATES.brick_4:
        this.setHealth(this.state);
        image(brick_4, this.position.x, this.position.y);
        break;
      case TILE_STATES.brick_3:
        this.setHealth(this.state);
        image(brick_3, this.position.x, this.position.y);
        break;
      case TILE_STATES.brick_2:
        this.setHealth(this.state);
        image(brick_2, this.position.x, this.position.y);
        break;
      case TILE_STATES.brick_1:
        this.setHealth(this.state);
        image(brick_1, this.position.x, this.position.y);
        break;
      case TILE_STATES.steel_2:
        this.setHealth(0);
        image(steel_2, this.position.x, this.position.y);
        break;
      case TILE_STATES.enemySpawn:
        break;
    }
    //rect(this.position.x, this.position.y, this.scale);
  }
}
