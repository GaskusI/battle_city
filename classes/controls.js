function keyPressed() {
  switch (currentState) {
    case STATES.menu:
      if(keyCode == 32)
      currentState = STATES.game;
      break;
    case STATES.game:
      switch(keyCode) {
        case 38: // up
          player.setDirection(0);
          game.moveObjectY(player);
          break;
        case 40: // down
          player.setDirection(2);
          game.moveObjectY(player);
          break;
        case 37: // left
          player.setDirection(3);
          game.moveObjectX(player);
          break;
        case 39: // right
          player.setDirection(1);
          game.moveObjectX(player);
          break;
        case 32:
          player.shoot();
          break;
      }
  }
}