const update = (game) => {
  const now = Date.now();
  const deltaTime = now - game.prevTime;
  game.fps = (1 / deltaTime) * 1000;
  //const framesPerUpdate = 20;

  hero.update(keyState);

  // if (game.frameCount % framesPerUpdate === 0) {
  //   
  //  
  // }
  // game.frameCount++;
  game.prevTime = now;
};
