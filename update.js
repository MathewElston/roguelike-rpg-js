const update = (game) => {
  const now = Date.now();
  const deltaTime = now - game.prevTime;
  game.fps = (1 / deltaTime) * 1000;

  const friction = testPlayer.sprite.velocity.get();
  const c = 0.2;
  const frictionNormal= 1;
  const frictionMag = c * frictionNormal;
  friction.scale(-1);
  friction.scale(frictionMag);
  testPlayer.sprite.applyForce(friction);

  testPlayer.update(game);

  //if (!collisionDetection(testEnemy.sprite.hitBox, testPlayer.sprite.hitBox))
  //enemyController.moveChase(testPlayer);

  testEnemy.update(game);

  game.prevTime = now;
};
