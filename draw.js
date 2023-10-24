const draw = (game) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  testEnemy.draw();

  testPlayer.draw(keyState);
};
