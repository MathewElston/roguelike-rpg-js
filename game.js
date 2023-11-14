const spritesheetA = new Image();
spritesheetA.src = "./assets/spritesheet-large.png";

const spriteSheetB = new Image();
spriteSheetB.src = "./assets/spritesheet2-large.png";

const largeMultiplier = 3;
const frameWidth = 26 * largeMultiplier;
const frameHeight = 36 * largeMultiplier;

const attackSheet = new Image();
attackSheet.src = "./assets/attacks/horizontal-slash1.png";

const attackSheet2 = new Image();
attackSheet2.src = "./assets/attacks/vertical-slash1.png";

const attackWidth = 48;
const attackHeight = 48;
let attackColumn = 0;
let attackRow = 0;

const totalMapColumnTiles = 16;
const totalMapRowTiles = 9;

// prettier-ignore
const mapValues = [
  0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  0,7,6,7,6,7,6,7,6,7,6,7,6,7,6,5,
  30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,35,
  40,41,41,41,41,41,41,41,41,41,41,41,41,41,41,45
]

// prettier-ignore
const mapHitBox = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

const tileSheet = new Image();
tileSheet.src = "./assets/MapTiles/Dungeon_Tileset-Large.png";
const tileSizeMultiplier = 5;
const tileSheetWidth = 160 * tileSizeMultiplier;
const tileSheetHeight = 160 * tileSizeMultiplier;
const tileSize = 16 * 5;
const tileRows = 10;
const tileColumns = 10;

const game = {
  fps: 0,
  prevTime: Date.now(),
  fiveSecondTime: Date.now(),
  frameCount: 0,
  deltaFrame: 1,
  spriteX: 100,
  spriteY: 100,
  mapHitBox: {
    width: canvas.width,
    height: Math.floor(canvas.height / tileRows),
    position: {
      x: 0,
      y: 0,
    },
  },
};
