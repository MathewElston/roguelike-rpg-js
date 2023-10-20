function CharacterSprite(
  spriteSheet,
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
  this.currentColumn = 6;
  this.currentRow = 0;
  this.animationSpeed = 0.1;
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
    //console.log(this.posX);
    if ((keyState.value > 0) & (keyState.value < 16)) {
      this.currentColumn += this.animationSpeed;
      this.currentColumn = this.currentColumn > 9 ? 6 : this.currentColumn;
    } else this.currentColumn = 7;
  },
};

const hero = new CharacterSprite(
  spritesheetA,
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
