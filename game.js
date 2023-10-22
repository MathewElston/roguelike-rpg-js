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

const game = {
  fps: 0,
  prevTime: Date.now(),
  fiveSecondTime: Date.now(),
  frameCount: 0,
  spriteX: 100,
  spriteY: 100,
};
