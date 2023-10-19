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
      if (keyState.value & 1) {
        // RIGHT
        this.currentRow = 2;
        console.log(
          "Crop Width: ",
          this.cropWidth * Math.floor(this.currentColumn)
        );
        console.log(
          "Crop Height: ",
          this.cropHeight * Math.floor(this.currentRow)
        );
        console.log("This.Width", this.width);
        console.log("This.Height", this.height);

        // row = 2 column = 6 ->8
        this.posX += this.speedX;
      }

      // LEFT
      if (keyState.value & 2) {
        // Row =1 column =6 -> 8
        this.currentRow = 1;
        this.posX -= this.speedX;
      }

      // UP
      if (keyState.value & 4) {
        // Row = 3 Column = 6 ->
        this.currentRow = 3;
        game.spriteY--;
        this.posY -= this.speedY;
      }

      // DOWN
      if (keyState.value & 8) {
        //    Row = 0, Column = 6 -> 8
        this.currentRow = 0;
        console.log(this.currentColumn);
        this.posY += this.speedY;
      }

      // SPACE
      if (keyState.value & 16) {
      }

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
