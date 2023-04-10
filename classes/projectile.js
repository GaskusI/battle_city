class Projectile {
  constructor(object) {
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
    this.speed = TILE_SIZE / 16;
    this.position = new p5.Vector(object.getPositionX(), object.getPositionY());
    this.directionIndex = object.getDirectionIndex();
    
  }
  
  getPositionX() {
    return this.position.x;
  }
  
  getPositionY() {
    return this.position.y;
  }
  
  setPositionX(temp) {
    this.position.x += temp;
  }
  
  setPositionY(temp) {
    this.position.y += temp;
  }
  
  getDirectionIndex() {
    return this.directionIndex;
  }
  
  checkBoundsX() {
    if((this.getPositionX() === 0  && this.getDirectionIndex() === 3) || (this.getPositionX() === CANVAS_SIZE.width - TILE_SIZE && this.getDirectionIndex() === 1)) {
      return true;
    }
  }
  
  checkBoundsY() {
    if((this.getPositionY() === 0 && this.getDirectionIndex() === 0) || (this.getPositionY() === CANVAS_SIZE.height - TILE_SIZE && this.getDirectionIndex() === 2)) {
      return true;
    }
  }
  
  doDamage() {
    let tile = grid.getDamagedTile();
    if(tile.state === 5) {
      return;
    } else if(tile.state === 4) {
      grid.modifyTile(tile.getPositionX() / TILE_SIZE, tile.getPositionY() / TILE_SIZE, 0)
    }
    else {
      tile.state += 1;
    }
  }
  
  update() {
    if(this.directionIndex === 0 || this.directionIndex === 2) {
      game.moveObjectY(this);
    }
    else {
      game.moveObjectX(this);
    }
  }
  
  
  
  draw() {
    imageMode(CORNER);
    image(projectile, this.position.x, this.position.y);
  }
  
}