class Enemy {
  constructor() {
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
    this.speed = TILE_SIZE / 4;
    this.directionIndex = 3; // 0 - north, 1 - east, 2 - south, 3 - west
    this.direction = enemyTank_S;
    this.position = 0;
    this.setPosition();
    this.state = 1;
    this.move = 0;
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
  
  getRandom() {
    return int(random(0,13))
  }
  
  setPosition() {
    this.position = new p5.Vector(grid.tiles[this.getRandom()][0].getPositionX(), grid.tiles[this.getRandom()][0].getPositionY());
  }
  
  changeDirection(index) {
    switch (index) {
      case 0:
        this.setDirectionIndex(0);
        this.direction = enemyTank_N;
        break;
      case 1:
        this.setDirectionIndex(1);
        this.direction = enemyTank_E;
        break;
      case 2:
        this.setDirectionIndex(2);
        this.direction = enemyTank_S;
        break;
      case 3:
        this.setDirectionIndex(3);
        this.direction = enemyTank_W;
        break;
    }
  }
  
  shoot() {
    projectiles.push(new Projectile(this));
  }
  
  update() {
    let temp = game.decideEnemyBehaviour(this);
      if(temp != 4) {
        this.setDirection(temp);
      }
      console.log(temp);
      switch(temp) {
      case 0:
        game.moveObjectY(this);
        console.log('pastrigau 0');
        break;
      case 1:
        game.moveObjectX(this);
        console.log('pastrigau 1');
        break;
      case 2:
        game.moveObjectY(this)
        console.log('pastrigau 2');
        break;
      case 3:
        game.moveObjectX(this);
        console.log('pastrigau 3');
        break;
      case 4:
        this.shoot();
        break;
      }
    }
  
  draw () {
    imageMode(CORNER);
    image(this.direction, this.position.x, this.position.y);
  }
}