const draw = (game) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  /*   context.drawImage(
    tileSheet,
    0,
    0,
    tileSheetWidth * tileSizeMultiplier,
    tileSheetHeight * tileSizeMultiplier
  ); */
  /* 
  context.drawImage(
    tileSheet,
    tileSize * 0,
    tileSize * 0,
    tileSize,
    tileSize,
    0,
    0,
    tileSize * tileSizeMultiplier,
    tileSize * tileSizeMultiplier
  );
  context.drawImage(
    tileSheet,
    tileSize * 0,
    tileSize * 0,
    tileSize,
    tileSize,
    tileSize * tileSizeMultiplier,
    0,
    tileSize * tileSizeMultiplier,
    tileSize * tileSizeMultiplier
  );
 */
  map.draw();
  testEnemy.draw();
  testPlayer.draw(keyState);
};

// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
