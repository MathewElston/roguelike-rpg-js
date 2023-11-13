function AttackSprite(
  spriteSheet,
  totalFrames,
  speedX,
  speedY,
  width,
  height,
  cropWidth,
  cropHeight,
) {
  this.spriteSheet = spriteSheet;
  this.totalFrames = totalFrames;
  this.location = new Vector(0,0);
  this.velocity = new Vector(0,0);
  this.currentRow = 0;
  this.currentColumn = 0;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.cropWidth = cropWidth;
  this.cropHeight = cropHeight;
  this.animationSpeed = 1 /game.fps;
  this.isPlaying = false;
  this.hitBox = {
    height: Math.floor(this.height/2),
    width:  Math.floor(this.width/2),
    position: {
      x: 0,
      y: 0,
    }
  }
}

AttackSprite.prototype = {
  draw: function () {
    context.drawImage(
      this.spriteSheet,
      this.cropWidth * Math.floor(this.currentColumn),
      this.cropHeight * Math.floor(this.currentRow),
      this.cropWidth,
      this.cropHeight,
      this.location.x,
      this.location.y,
      this.width,
      this.height
    );

    context.beginPath();
  },
  update: function () {
    this.animationSpeed = 10 /game.fps;

    this.location.set(mouseState.position.x - this.hitBox.width, mouseState.position.y - this.hitBox.height);
    this.hitBox.position.x = mouseState.position.x + this.hitBox.width;
    this.hitBox.position.y = mouseState.position.y + this.hitBox.height;
    this.currentColumn += this.animationSpeed;
    if (this.currentColumn > this.totalFrames) {
      this.currentColumn = 0;
      this.isPlaying = false;
    } else {
    } this.currentColumn = this.currentColumn;

  },

};

const slash = new AttackSprite(
  attackSheet,
  5,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
);
slash.animationSpeed = 0.2;

const slash2 = new AttackSprite(
  attackSheet2,
  5,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
);
slash2.animationSpeed = 0.2;

const comboAttack = [slash2, slash2, slash];

const enemySlash = new AttackSprite(
  attackSheet,
  5,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
);
enemySlash.animationSpeed = 0.2;

const enemySlash2 = new AttackSprite(
  attackSheet2,
  5,
  2,
  2,
  attackWidth * 2,
  attackHeight * 2,
  attackWidth,
  attackHeight,
);
enemySlash2.animationSpeed = 0.2;

const enemyComboAttack = [slash2, slash2, slash];
