const input = (game) => {
  // RIGHT
  if (keyState.value & 1) {
    testPlayer.sprite.currentRow = 2;
    console.log(
      "Crop Width: ",
      testPlayer.sprite.cropWidth * Math.floor(testPlayer.sprite.currentColumn)
    );
    console.log(
      "Crop Height: ",
      testPlayer.sprite.cropHeight * Math.floor(testPlayer.sprite.currentRow)
    );
    console.log("testPlayer.sprite.Width", testPlayer.sprite.width);
    console.log("testPlayer.sprite.Height", testPlayer.sprite.height);

    // row = 2 column = 6 ->8
    testPlayer.sprite.posX += testPlayer.sprite.speedX;
  }

  // LEFT
  if (keyState.value & 2) {
    testPlayer.sprite.currentRow = 1;
    testPlayer.sprite.posX -= testPlayer.sprite.speedX;
  }

  // UP
  if (keyState.value & 4) {
    testPlayer.sprite.currentRow = 3;
    game.spriteY--;
    testPlayer.sprite.posY -= testPlayer.sprite.speedY;
  }
  // DOWN
  if (keyState.value & 8) {
    testPlayer.sprite.currentRow = 0;
    console.log(testPlayer.sprite.currentColumn);
    testPlayer.sprite.posY += testPlayer.sprite.speedY;
  }

  // SPACE
  if (keyState.value & 16) {
    testPlayer.isAttack = true;
  }
};
