class Logic {
  constructor() {
    this.state = false; // true = on / false = off
    this.maxEnemies = 1;
    this.currentEnemies = 0;
  }
  
  moveObjectX(object) {
    if(object.getDirectionIndex() === 1) {
      if(!this.checkCollision(object) && object.getPositionX() + TILE_SIZE != CANVAS_SIZE.width) {
        object.setPositionX(object.speed);
      }
    } else if(!this.checkCollision(object) && object.getPositionX() != 0) 
       {
        object.setPositionX(object.speed * (-1));
    }
  }
  
  moveObjectY(object) {
    if(object.getDirectionIndex() === 0) {
      if(!this.checkCollision(object) && object.getPositionY() != 0) {
      object.setPositionY(object.speed * (-1));
      }
    } else if(!this.checkCollision(object) && object.getPositionY() + TILE_SIZE != CANVAS_SIZE.height) {
      object.setPositionY(object.speed);
       console.log(2);
      }
    
  }
  
  checkCollision(object) {
    switch(object.getDirectionIndex()) {
      case 0:
        return grid.findTileByCoordinate(object);
      case 1:
        return grid.findTileByCoordinate(object);
      case 2:
        return grid.findTileByCoordinate(object);
      case 3:
        return grid.findTileByCoordinate(object);
        }
      }
  
  decideEnemyBehaviour(object) {
    return int(random(0, 5));
  }
  
  createEnemy() {
    if(this.currentEnemies != this.maxEnemies){
      this.currentEnemies++;
      enemies.push(new Enemy());
    }
  }
  
}