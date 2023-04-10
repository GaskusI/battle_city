function preload() {
  playerTank_N = loadImage('assets/sprites/playerTank_N.png');
  playerTank_E = loadImage('assets/sprites/playerTank_E.png');
  playerTank_S = loadImage('assets/sprites/playerTank_S.png');
  playerTank_W = loadImage('assets/sprites/playerTank_W.png');
  
  enemyTank_N = loadImage('assets/sprites/enemy_N.png');
  enemyTank_E = loadImage('assets/sprites/enemy_E.png');
  enemyTank_S = loadImage('assets/sprites/enemy_S.png');
  enemyTank_W = loadImage('assets/sprites/enemy_W.png');
  
  projectile = loadImage('assets/sprites/projectile.png');
  
  playerTank = loadImage('assets/sprites/playerTank.png');
  
  brick_1 = loadImage('assets/environment/brick_1.png');
  brick_2 = loadImage('assets/environment/brick_2.png');
  brick_3 = loadImage('assets/environment/brick_3.png');
  brick_4 = loadImage('assets/environment/brick_4.png');
  steel_1 = loadImage('assets/environment/steel_1.png');
  steel_2 = loadImage('assets/environment/steel_2.png');
  
}

function setup() {
  rectMode(CORNER);
  frameRate(60);
  let canvas = createCanvas(CANVAS_SIZE.width, CANVAS_SIZE.height);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
  
  menu = new Menu();
  grid = new Grid();
  player = new Player();
  game = new Logic();
  grid.load(level_1);
}

function draw() {
  background(0);
  switch (currentState) {
    case STATES.menu:
      menu.draw();
      break;
    case STATES.game:
      
      grid.draw();
      player.draw();
      
      game.createEnemy();
      
      if(enemies.length != 0) {
        for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        if(enemies[i].state && !game.checkCollision(enemies[i])) {
          enemies[i].update(); 
        } else {
          //enemies.splice(i, 1);
          //enemiesCurrent--;
          }
        } 
      }
      if(projectiles.length != 0) {
        for (let i = 0; i < projectiles.length; i++) {
          projectiles[i].draw();
          if(!game.checkCollision(projectiles[i])) {
            projectiles[i].update();
            if(projectiles[i].checkBoundsX() || projectiles[i].checkBoundsY()) {
                projectiles.splice(i, 1);
              }
          } else {
            projectiles[i].doDamage();
            projectiles.splice(i, 1);
          }
        }
      }
      
      break;
  }
}


