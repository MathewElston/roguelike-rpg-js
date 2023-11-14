function collisionDetection(box1, box2) {
  return (
    box1.position.x < box2.position.x + box2.width &&
    box1.position.x + box1.width > box2.position.x &&
    box1.position.y < box2.position.y + box2.height &&
    box1.position.y + box1.height > box2.position.y
  );
}
