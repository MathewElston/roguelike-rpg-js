function EnemyController(enemy) {
  this.enemy = enemy;
}

EnemyController.prototype = {
  moveLeft: function () {
    this.enemy.sprite.currentRow = 5;
    this.enemy.sprite.isMoving = true;
    this.enemy.sprite.posX -= this.enemy.sprite.speedX;
  },
  moveRight: function () {
    this.enemy.sprite.currentRow = 6;
    this.enemy.sprite.isMoving = true;
    this.enemy.sprite.posX += this.enemy.sprite.speedX;
  },
};

const enemyController = new EnemyController(testEnemy);
