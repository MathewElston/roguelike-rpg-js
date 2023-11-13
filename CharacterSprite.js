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
) {
  this.spriteSheet = spriteSheet;
  this.idleColumn = idleColumn;
  this.idleRow = idleRow;
  this.totalFrames = totalFrames;
  this.location = new Vector(posX, posY);
  this.velocity = new Vector(0,0);
  this.acceleration = new Vector(0,0);
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.cropWidth = cropWidth;
  this.cropHeight = cropHeight;
  this.currentColumn = idleColumn;
  this.currentRow = idleRow;
  this.animationSpeed = 60 *game.deltaFrame;
  this.isMoving = false;
  this.hitBox = {
    width: this.width,
    height: this.height,
    position: {
      x: 0,
      y: 0
    }
  }
  this.feetOffset = {
    width: -40,
    height: 0,
    x: 60,
    y: -20
  }
  this.feetBox = {
    width: this.feetOffset.width,
    height: Math.floor(this.cropHeight /10) + this.feetOffset.height,
    position: {
      x: 0,
      y: 0
    }
  }
}

CharacterSprite.prototype = {
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
    context.rect(this.feetBox.position.x,this.feetBox.position.y,this.feetBox.width,this.feetBox.height);
    context.stroke();

    // bodybox
    //context.beginPath();
    //context.rect(this.hitBox.position.x,this.hitBox.position.y,this.hitBox.width,this.hitBox.height);
    //context.stroke();
    const feetBoxMidPoint = new Vector(this.feetBox.position.x + this.feetBox.width / 2, this.feetBox.position.y + this.feetBox.height / 2);

    const castingVector = new Vector(this.velocity.x, this.velocity.y);
    castingVector.scale(4);
    const locationCheck = new Vector(feetBoxMidPoint.x,this.feetBox.position.y);
    locationCheck.add(castingVector);
    
    if (this.velocity.x > 0 || this.velocity.y > 0 ) {
      context.beginPath();
      context.moveTo(feetBoxMidPoint.x, feetBoxMidPoint.y);
      context.lineTo(locationCheck.x, locationCheck.y);
      context.stroke();
    }

  },
  update: function () {
    this.animationSpeed =  5 / game.fps;

    // -1 due to the nature of the sprite sheet. Idle animations sit in the middle of an animation.
    const firstColumn = this.idleColumn - 1;
    const lastColumn = firstColumn + this.totalFrames;
    if (this.isMoving) {
      this.currentColumn += this.animationSpeed;
      this.currentColumn = this.currentColumn > lastColumn ? firstColumn : this.currentColumn;
    } else this.currentColumn = this.idleColumn;

    this.velocity.add(this.acceleration);


    this.feetBox.position.x = this.location.x + this.feetOffset.x;
    this.feetBox.position.y = this.location.y + this.height + this.feetOffset.y;
    this.hitBox.position.x = this.location.x;
    this.hitBox.position.y = this.location.y;

    this.location.add(this.velocity);
    this.acceleration.set(0,0);
  },

  applyForce: function(force) {
    this.acceleration.add(force);
  }
  
};


const hero = new CharacterSprite(
  spritesheetA,
  7,
  0,
  3,
  100,
  100,
  300,
  300,
  frameWidth,
  frameHeight,
  frameWidth,
  frameHeight,
);

const goblin = new CharacterSprite(
  spriteSheetB,
  10,
  4,
  3,
  200,
  200,
  300,
  300,
  frameWidth,
  frameHeight,
  frameWidth,
  frameHeight,

);
