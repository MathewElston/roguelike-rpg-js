function Sprite(
  spriteSheet,
  posX,
  posY,
  speedX,
  speedY,
  width,
  height,
  sourceX,
  sourceY,
  sourceWidth,
  sourceHeight,
  parentWidth,
  parentHeight
) {
  this.spriteSheet = spriteSheet;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.sourceX = sourceX;
  this.sourceY = sourceY;
  this.sourceWidth = sourceWidth;
  this.sourceHeight = sourceHeight;
  this.parentWidth = parentWidth;
  this.parentHeight = parentHeight;
  this.currentColumn = 0;
  this.currentRow = 0;
}

Sprite.prototype = {
  draw: () => {
    context.drawImage(
      this.spriteSheet,
      this.sourceX,
      this.sourceY,
      this.width,
      this.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  },
  update: () => {
    console.log(this.posX);
    // RIGHT
    if (keyState.value & 1) {
      this.posX += this.speedX;
    }

    // LEFT
    if (keyState.value & 2) {
      this.posX -= this.speedX;
    }

    // UP
    if (keyState.value & 4) {
      this.posY -= this.speedY;
    }

    // DOWN
    if (keyState.value & 8) {
      this.posY += this.speedY;
    }

    // SPACE
    if (keyState.value & 16) {
    }
  },
};


