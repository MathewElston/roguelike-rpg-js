const draw = (game) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  map.draw();
  map.drawHitBoxes();


  testEnemy.draw();
  testPlayer.draw(keyState);
};

// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
