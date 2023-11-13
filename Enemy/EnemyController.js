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
    this.enemy.sprite.isMoving = false;
    const deltaX = player.sprite.posX - this.enemy.sprite.posX;
    const deltaY = player.sprite.posY - this.enemy.sprite.posY;

    if (deltaX < 50) {
      this.enemy.sprite.currentRow = 5;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posX--;
    } else if (deltaX > 50) {
      this.enemy.sprite.currentRow = 6;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posX++;
    }

    if (deltaY < 50) {
      this.enemy.sprite.currentRow = 7;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posY--;
    } else if (deltaY > 50) {
      this.enemy.sprite.currentRow = 4;
      this.enemy.sprite.isMoving = true;
      this.enemy.sprite.posY++;
    }
  },

  attack: function () {
    if (!this.enemy.isAttacking) {
      // Start the attack animation
      this.enemy.isAttacking = true;
      this.enemy.attackList[this.enemy.attackIndex].isPlaying = true;

      this.enemy.attackIndex =
        (this.enemy.attackIndex + 1) % this.enemy.attackList.length;
    }
  },
};

const enemyController = new EnemyController(testEnemy);
