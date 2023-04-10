const CANVAS_SIZE = {
  width: 832,
  height: 832,
};

//game screen 832x832 + 128 ekrano dalis skirta stats (in case padidinsiu)

const TILE_SIZE = 64;

const TILE_LENGTH = {
  x: CANVAS_SIZE.width / TILE_SIZE,
  y: CANVAS_SIZE.height / TILE_SIZE,
};

const STATES = {
  menu: 0,
  game: 1,
  scoreboard: 2,
};

const TILE_STATES = {
  empty: 0,
  brick_4: 1,
  brick_3: 2,
  brick_2: 3,
  brick_1: 4,
  steel_2: 5,
  enemySpawn: 6,
};

let currentState = STATES.menu;

// states
let menu;
let game;
let scoreboard;

let grid;
let player;
let projectiles = [];
let enemies = []; 

//sprites
let playerTank;

//environment
let brick_1;
let brick_2;
let brick_3;
let brick_4;
let steel_1;
let steel_2;

let level;