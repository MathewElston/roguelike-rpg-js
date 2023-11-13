class Tile {
  constructor(
    mapValue,
    spriteSheet,
    posX,
    posY,
    width,
    height,
    cropWidth,
    cropHeight,
    mapValue,
    isCollision,
    totalRows,
    totalColumns
  ) {
    this.mapValue = mapValue;
    this.spriteSheet = spriteSheet;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
    this.totalRows = totalRows;
    this.totalColumns = totalColumns;
    this.isCollision = isCollision;

    if (this.isCollision) {
      this.hitBox = {
        width: this.width,
        height: this.height,
        position: {
          x: this.posX,
          y: this.posY,
        },
      };
    }
  }

  draw() {
    let sourceX = this.cropWidth * (mapValue % this.totalColumns);
    let sourceY = this.cropHeight * Math.floor(mapValue / this.totalColumns);
    context.drawImage(
      this.spriteSheet,
      sourceX,
      sourceY,
      this.cropWidth,
      this.cropHeight,
      posX,
      posY,
      this.width,
      this.height
    );

    if (this.isCollision) {
      context.beginPath();
      context.rect(
        this.hitBox.position.x,
        this.hitBox.position.y,
        this.hitBox.width,
        this.hitBox.height
      );
      context.stroke();
    }
  }
}
