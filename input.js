const input = (game) => {
  // RIGHT
  if (keyState.value & 1) {
    testPlayer.sprite.currentRow = 2;
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
    testPlayer.sprite.posY -= testPlayer.sprite.speedY;
  }
  // DOWN
  if (keyState.value & 8) {
    testPlayer.sprite.currentRow = 0;
    testPlayer.sprite.posY += testPlayer.sprite.speedY;
  }

  // SPACE
  if (keyState.value & 16) {
    testPlayer.isAttack = true;
  }
};
