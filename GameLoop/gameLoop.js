const gameLoop = (game) => {
  input(game);
  update(game);
  draw(game);
  requestAnimationFrame(() => gameLoop(game));
};
