function CharacterSprite(
  spriteSheet,
  idleColumn,
  idleRow,
  totalFrames,
  posX,
  posY,
  speedX,
  speedY,
  width,
  height,
  cropWidth,
  cropHeight,
  parentWidth,
  parentHeight
) {
  this.spriteSheet = spriteSheet;
  this.idleColumn = idleColumn;
  this.idleRow = idleRow;
  this.totalFrames = totalFrames;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.cropWidth = cropWidth;
  this.cropHeight = cropHeight;
  this.parentWidth = parentWidth;
  this.parentHeight = parentHeight;
  this.currentColumn = idleColumn;
  this.currentRow = idleRow;
  this.animationSpeed = 0.1;
  this.isMoving = false;
  // 0 = down, 1 = up 2=left 3=right
}

CharacterSprite.prototype = {
  draw: function () {
    context.drawImage(
      this.spriteSheet,
      this.cropWidth * Math.floor(this.currentColumn),
      this.cropHeight * Math.floor(this.currentRow),
      this.cropWidth,
      this.cropHeight,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  },
  update: function (keyState) {
    // -1 due to the nature of the sprite sheet. Idle animations sit in the middle of an animation.
    const firstColumn = this.idleColumn - 1;
    const lastColumn = firstColumn + this.totalFrames;

    if (this.isMoving) {
      this.currentColumn += this.animationSpeed;
      this.currentColumn =
        this.currentColumn > lastColumn ? firstColumn : this.currentColumn;
    } else this.currentColumn = this.idleColumn;
  },
};

const hero = new CharacterSprite(
  spritesheetA,
  7,
  0,
  3,
  100,
  100,
  3,
  3,
  frameWidth,
  frameHeight,
  frameWidth,
  frameHeight,
  canvas.width,
  canvas.height
);
