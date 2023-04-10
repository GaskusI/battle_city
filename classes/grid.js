class Grid {
  constructor() {
    this.tiles = [];
    this.twoDimensionArray();
    this.createTiles();
    this.damagedTile = 0;
  }

  twoDimensionArray() {
    for (let i = 0; i < TILE_LENGTH.x; i++) {
      this.tiles[i] = [];
    }
  }

  createTiles() {
    for (let i = 0; i < TILE_LENGTH.x; i++) {
      for (let j = 0; j < TILE_LENGTH.y; j++) {
        this.tiles[i][j] = new Tile(new p5.Vector(i, j));
      }
    }
  }


  draw() {
    for (let i = 0; i < this.tiles.length; i++) {
      for (let j = 0; j < this.tiles[i].length; j++) {
        this.tiles[i][j].draw();
      }
    }
  }
  
  modifyTile(x, y, s) {
    this.tiles[x][y].modifyState(s);
  }
  
  setDamagedTile(x, y) {
    this.damagedTile = this.tiles[x][y];
  }
  
  getDamagedTile() { 
    return this.damagedTile;
  }
  
  findTileByCoordinate(object) {
    let bool = false;
    if(object.getDirectionIndex() === 1) {
      for(let i = 0; i < 13; i++) {
        for(let j = 0; j < 13; j++) {
          if (object.getPositionX() + TILE_SIZE === this.tiles[i][j].getPositionX() && object.getPositionY() < this.tiles[i][j].getPositionY() + TILE_SIZE && object.getPositionY() + object.speed * 3 >= this.tiles[i][j].getPositionY() && this.tiles[i][j].state != 0) {
              bool = true;
              this.setDamagedTile(i, j);
              return bool;
            }
          }
        }
      }
    if(object.getDirectionIndex() === 3) {
      for(let i = 0; i < 13; i++) {
        for(let j = 0; j < 13; j++) {
          if (object.getPositionX() === this.tiles[i][j].getPositionX() + TILE_SIZE && object.getPositionY() + object.speed * 3 >= this.tiles[i][j].getPositionY() && object.getPositionY() < this.tiles[i][j].getPositionY() + TILE_SIZE && this.tiles[i][j].state != 0) {
              bool = true;
              this.setDamagedTile(i, j);
              return bool;
          }
        }
      }
    }
    if(object.getDirectionIndex() === 2) {
      for(let i = 0; i < 13; i++) {
        for(let j = 0; j < 13; j++) {
          if (object.getPositionY() + TILE_SIZE === this.tiles[i][j].getPositionY() && object.getPositionX() < this.tiles[i][j].getPositionX() + TILE_SIZE && object.getPositionX() + object.speed * 3 >= this.tiles[i][j].getPositionX() && this.tiles[i][j].state != 0) {
              bool = true;
              this.setDamagedTile(i, j);
              return bool;
          }
        }
      }
    }
    if(object.getDirectionIndex() === 0) {
      for(let i = 0; i < 13; i++) {
        for(let j = 0; j < 13; j++) {
          if (object.getPositionY() === this.tiles[i][j].getPositionY() + TILE_SIZE && object.getPositionX() + object.speed * 3 >= this.tiles[i][j].getPositionX() && object.getPositionX() < this.tiles[i][j].getPositionX() + TILE_SIZE && this.tiles[i][j].state != 0) {
              bool = true;
              this.setDamagedTile(i, j);
              return bool;
          }
        }
      }
    }
    
    
  }
  
  load(level) {
    for(let i = 0; i < 13; i++) {
      for(let j = 0; j < 13; j++) {;
        this.modifyTile(i, j, int(level[j][i]));
      }
    }
  }
}
