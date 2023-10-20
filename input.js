const input = (game) => {
  // RIGHT
  if (keyState.value & 1) {
    testPlayer.sprite.currentRow = 2;
    // row = 2 column = 6 ->8
    testPlayer.sprite.posX += testPlayer.sprite.speedX;
    testPlayer.attackOffsetX = 50;
    testPlayer.attackOffsetY = 10;
  }

  // LEFT
  if (keyState.value & 2) {
    testPlayer.sprite.currentRow = 1;
    testPlayer.sprite.posX -= testPlayer.sprite.speedX;
    testPlayer.attackOffsetX = -60;
    testPlayer.attackOffsetY = 10;
  }

  // UP
  if (keyState.value & 4) {
    testPlayer.sprite.currentRow = 3;
    testPlayer.sprite.posY -= testPlayer.sprite.speedY;
    testPlayer.attackOffsetX = 0;
    testPlayer.attackOffsetY = -50;
  }
  // DOWN
  if (keyState.value & 8) {
    testPlayer.sprite.currentRow = 0;
    testPlayer.sprite.posY += testPlayer.sprite.speedY;
    testPlayer.attackOffsetX = 5;
    testPlayer.attackOffsetY = 85;
  }

  // SPACE
  if (keyState.value & 16 && !testPlayer.isAttacking) {
    // Start the attack animation
    testPlayer.isAttacking = true;
    testPlayer.attack.isPlaying = true;
  } 
}; 
