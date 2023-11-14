const input = (game) => {
  if (keyState.value === 0) {
    testPlayer.sprite.isMoving = false;
    //testPlayer.sprite.velocity.set(0,0);
  }
  // RIGHT
  if (keyState.value & 1) {
    testPlayer.sprite.isMoving = true;
    testPlayer.sprite.currentRow = 2;

    const moveVector = new Vector(1, 0);
    moveVector.normalize();
    moveVector.scale(testPlayer.sprite.speedX / game.fps);
    if (inputCollision(moveVector, testPlayer.sprite, map.hitBoxes)) return;
    testPlayer.sprite.acceleration.add(moveVector);
  }

  // LEFT
  if (keyState.value & 2) {
    testPlayer.sprite.isMoving = true;
    testPlayer.sprite.currentRow = 1;

    const moveVector = new Vector(-1, 0);
    moveVector.normalize();
    moveVector.scale(testPlayer.sprite.speedX / game.fps);
    if (inputCollision(moveVector, testPlayer.sprite, map.hitBoxes)) return;
    testPlayer.sprite.acceleration.add(moveVector);
  }

  // UP
  if (keyState.value & 4) {
    testPlayer.sprite.isMoving = true;
    testPlayer.sprite.currentRow = 3;

    const moveVector = new Vector(0, -1);
    moveVector.normalize();
    moveVector.scale(testPlayer.sprite.speedX / game.fps);
    if (inputCollision(moveVector, testPlayer.sprite, map.hitBoxes)) return;
    testPlayer.sprite.acceleration.add(moveVector);
  }
  // DOWN
  if (keyState.value & 8) {
    testPlayer.sprite.isMoving = true;
    testPlayer.sprite.currentRow = 0;

    const moveVector = new Vector(0, 1);
    moveVector.normalize();
    moveVector.scale(testPlayer.sprite.speedX / game.fps);
    if (inputCollision(moveVector, testPlayer.sprite, map.hitBoxes))
     return;
    testPlayer.sprite.acceleration.add(moveVector);
  }

  // SPACE
  if (keyState.value & 16 && !testPlayer.isAttacking) {
  }

  // Mouse State
  if (
    mouseState.position.x >
    testPlayer.sprite.location.x + testPlayer.sprite.width
  ) {
    testPlayer.sprite.currentRow = 2;
  } else if (
    mouseState.position.x <
    testPlayer.sprite.location.x - testPlayer.sprite.width
  ) {
    testPlayer.sprite.currentRow = 1;
  } else if (mouseState.position.y < testPlayer.sprite.location.y) {
    testPlayer.sprite.currentRow = 3;
  } else if (mouseState.position.y > testPlayer.sprite.location.y) {
    testPlayer.sprite.currentRow = 0;
  }

  if (mouseState.mouseDown) {
    // Start the attack animation
    testPlayer.isAttacking = true;

    testPlayer.attackList[testPlayer.attackIndex].isPlaying = true;

    testPlayer.attackIndex =
      (testPlayer.attackIndex + 1) % testPlayer.attackList.length;
  } else if (mouseState.mouseUp) {
    testPlayer.isAttacking = false;
    testPlayer.attackList[testPlayer.attackIndex].isPlaying = false;
  }
};
