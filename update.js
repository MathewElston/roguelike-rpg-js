const update = (game) => {
  const now = Date.now();
  const deltaTime = now - game.prevTime;
  game.fps = (1 / deltaTime) * 1000;
  testPlayer.update(keyState);

  enemyController.moveLeft();
  if (testEnemy.sprite.posX < 0) {
    enemyController.moveRight();
  }
  if (testEnemy > 1000) {
    enemyController.moveLeft();
  }

  testEnemy.update();

  game.prevTime = now;
};
