class TileMap {
  constructor(
    mapTiles,
    hitBoxTiles,
    spriteSheet,
    width,
    height,
    cropWidth,
    cropHeight,
    totalRows,
    totalColumns
  ) {
    this.mapTiles = mapTiles;
    this.spriteSheet = spriteSheet;
    this.width = width;
    this.height = height;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
    this.totalRows = totalRows;
    this.totalColumns = totalColumns;
    this.currentRow = 0;
    this.currentColumn = 0;
    this.hitBoxTiles = hitBoxTiles;
    this.hitBoxes = [];
  }

  calculateHitboxes() {
    this.hitBoxes = [];

    for (let i = 0; i < this.hitBoxTiles.length; i++) {
      let posX = Math.floor(i % totalMapColumnTiles) * this.cropWidth;
      let posY = Math.floor(i / totalMapColumnTiles) * this.cropHeight;

      if (this.hitBoxTiles[i]) {
        this.hitBoxes.push({
          position: {
            x: posX,
            y: posY,
          },
          width: this.width,
          height: this.height,
        });
      }
    }
  }
  draw() {
    for (let i = 0; i < this.mapTiles.length; i++) {
      let mapValue = this.mapTiles[i];
      let sourceX = this.cropWidth * (mapValue % this.totalColumns);
      let sourceY = this.cropHeight * Math.floor(mapValue / this.totalColumns);
      let posX = Math.floor(i % totalMapColumnTiles) * this.cropWidth;
      let posY = Math.floor(i / totalMapColumnTiles) * this.cropHeight;

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
    }
  }

  drawHitBoxes() {
    for (let i = 0; i < this.hitBoxes.length; i++) {
      const hitBox = this.hitBoxes[i];
      context.beginPath();
      context.rect(
        hitBox.position.x,
        hitBox.position.y,
        hitBox.width,
        hitBox.height
      );
      context.stroke();
      context.strokeText(i, hitBox.position.x, hitBox.position.y + 50);
      context.strokeText(
        "X: " + hitBox.position.x,
        hitBox.position.x,
        hitBox.position.y + 25
      );
      context.strokeText(
        "Y: " + hitBox.position.y,
        hitBox.position.x + 50,
        hitBox.position.y + 25
      );
    }
  }
}

const map = new TileMap(
  mapValues,
  mapHitBox,
  tileSheet,
  tileSize,
  tileSize,
  tileSize,
  tileSize,
  tileRows,
  tileColumns
);

map.calculateHitboxes();
