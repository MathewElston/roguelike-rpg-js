const inputCollision = (moveVector, characterSprite, mapArray) => {
  const tempVector = new Vector(0, 0);
  tempVector.add(moveVector);
  const tempBox = {
    width: characterSprite.feetBox.width,
    height: characterSprite.feetBox.height,
    position: {
      x: characterSprite.feetBox.position.x + tempVector.x,
      y: characterSprite.feetBox.position.y + tempVector.y,
    },
  };

  for (let i = 0; i < mapArray.length; i++) {
    if (collisionDetection(tempBox, mapArray[i])) {
      return true;
    }
  }
  return false;
};
