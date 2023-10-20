const update = (game) => {
  const now = Date.now();
  const deltaTime = now - game.prevTime;
  game.fps = (1 / deltaTime) * 1000;


  testPlayer.update(keyState);

  
  game.prevTime = now;
};
