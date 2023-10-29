class TileMap {
  constructor(
    mapTiles,
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
  }

  draw() {
    for (let i = 0; i < this.mapTiles.length; i++) {
      let mapValue = this.mapTiles[i];
      let posX = Math.floor(i % totalMapColumnTiles) * this.cropWidth;
      let posY = Math.floor(i / totalMapColumnTiles) * this.cropHeight;

      context.drawImage(
        this.spriteSheet,
        this.cropWidth * (mapValue % this.totalColumns),
        this.cropHeight * (mapValue / this.totalColumns),
        this.cropWidth,
        this.cropHeight,
        posX,
        posY,
        this.width,
        this.height
      );
    }
  }
}

const map = new TileMap(
  mapValues,
  tileSheet,
  tileSize,
  tileSize,
  tileSize,
  tileSize,
  tileRows,
  tileColumns
);
