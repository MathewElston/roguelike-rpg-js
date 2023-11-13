const collisionCasting  = (characterSprite, movementVector, ) => {
    const feetBoxMidPoint = new Vector(testPlayer.sprite.feetBox.position.x + testPlayer.sprite.feetBox.width / 2, testPlayer.sprite.feetBox.position.y + testPlayer.sprite.feetBox.height / 2);

    const castingVector = new Vector(testPlayer.sprite.velocity.x, testPlayer.sprite.velocity.y);
    const locationCheck = new Vector(feetBoxMidPoint.x - testPlayer.sprite.feetBox.width/2, feetBoxMidPoint.y - testPlayer.sprite.feetBox.height/2);
    locationCheck.add(castingVector);
    
    context.beginPath();
    context.moveTo(feetBoxMidPoint.x, feetBoxMidPoint.y);
    context.lineTo(locationCheck.x, locationCheck.y);
    context.stroke();
}
