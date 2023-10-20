function AttackSprite(
  spriteSheet,
  totalFrames,
  parentSprite,
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
  this.totalFrames = totalFrames;
  this.parentSprite = parentSprite;
  this.currentRow = 0;
  this.currentColumn = 0;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.cropWidth = cropWidth;
  this.cropHeight = cropHeight;
  this.parentWidth = parentWidth;
  this.parentHeight = parentHeight;
  this.animationSpeed = 0.1;
}

AttackSprite.prototype = {
  draw: function () {
    context.drawImage(
      this.spriteSheet,
      this.cropWidth * Math.floor(this.currentColumn),
      this.cropHeight * Math.floor(this.currentRow),
      this.cropWidth,
      this.cropHeight,
      this.parentSprite.posX + 50,
      this.parentSprite.posY,
      this.width,
      this.height
    );
  },
  update: function () {
    this.currentColumn += this.animationSpeed;
    this.currentColumn =
      this.currentColumn > this.totalFrames ? 0 : this.currentColumn;
  },
};

const slash = new AttackSprite(
  attackSheet,
  5,
  hero,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
  canvas.width,
  canvas.height
);

slash.animationSpeed = 0.2;

const slash2 = new AttackSprite(
  attackSheet2,
  5,
  hero,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
  canvas.width,
  canvas.height
);
slash2.animationSpeed = 0.2;
