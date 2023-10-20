function Character(sprite, attack, name, health, attackPower) {
  this.sprite = sprite;
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.attack = attack;
  this.isAttacking = false;
  this.attackOffsetX = 0;
  this.attackOffsetY = 0;
}

Character.prototype = {
  update: function (keyState) {
    this.sprite.update(keyState);

    if (this.isAttacking) {
      this.attack.update();
      if (!this.attack.isPlaying) {
        this.isAttacking = false;
      }
    }
  },
  draw: function () {
    this.sprite.draw();
    this.isAttacking
      ? this.attack.draw(this.attackOffsetX, this.attackOffsetY)
      : 0;
  },
};

const testPlayer = new Character(hero, slash2, "Test", 10, 2);
