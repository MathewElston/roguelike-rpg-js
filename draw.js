const draw = (game) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  testPlayer.sprite.draw(keyState);
};
