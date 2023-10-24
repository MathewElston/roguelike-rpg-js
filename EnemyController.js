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
  moveChase: function (player) {
    const deltaX = player.sprite.posX - this.enemy.sprite.posX;
    const deltaY = player.sprite.posY - this.enemy.sprite.posY;

    if (deltaX < 10) {
      this.enemy.sprite.currentRow = 5;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posX--;
    } else if (deltaX > 10) {
      this.enemy.sprite.currentRow = 6;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posX++;
    }

    if (deltaY < 10) {
      this.enemy.sprite.currentRow = 4;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posY--;
    } else if (deltaY > 10) {
      this.enemy.sprite.currentRow = 4;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posY++;
    }
  },
};

const enemyController = new EnemyController(testEnemy);
