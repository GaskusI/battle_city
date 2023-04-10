class Player {
  constructor() {
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
    this.speed = TILE_SIZE / 4;
    this.position = new p5.Vector(grid.tiles[6][10].getPositionX(), grid.tiles[6][10].getPositionY());
    this.directionIndex = 0; // 0 - north, 1 - east, 2 - south, 3 - west
    this.direction = playerTank_N;
    this.killCount = 0;
    this.state = 1; // 1 - alive, 0 - DED
  }
  
  getPositionX() {
    return this.position.x;
  }
  
  getPositionY(){
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
  
  setDirectionIndex(index) {
    this.directionIndex = index;
  }
  
  setDirection(index) {
    this.changeDirection(index);
  }
  
  changeDirection(index) {
    switch (index) {
      case 0:
        this.setDirectionIndex(0);
        this.direction = playerTank_N;
        break;
      case 1:
        this.setDirectionIndex(1);
        this.direction = playerTank_E;
        break;
      case 2:
        this.setDirectionIndex(2);
        this.direction = playerTank_S;
        break;
      case 3:
        this.setDirectionIndex(3);
        this.direction = playerTank_W;
        break;
    }
  }
  
  shoot() {
    projectiles.push(new Projectile(this));
  }
  
  draw () {
    imageMode(CORNER);
    image(this.direction, this.position.x, this.position.y);
  }
}