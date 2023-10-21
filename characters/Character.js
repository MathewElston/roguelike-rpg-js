function Character(sprite, attackList, name, health, attackPower) {
  this.sprite = sprite;
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.attackList = attackList;
  this.attackIndex = 0;
  this.isAttacking = false;
  this.attackOffsetX = 0;
  this.attackOffsetY = 0;
}

Character.prototype = {
  update: function (keyState) {
    this.sprite.update(keyState);

    if (this.isAttacking) {
      this.attackList[this.attackIndex].update();
      if (!this.attackList[this.attackIndex].isPlaying) {
        this.isAttacking = false;
      }
    }
  },
  draw: function () {
    this.sprite.draw();
    this.isAttacking
      ? this.attackList[this.attackIndex].draw(
          this.attackOffsetX,
          this.attackOffsetY
        )
      : 0;
  },
};

const testPlayer = new Character(hero, comboAttack, "Test", 10, 2);
