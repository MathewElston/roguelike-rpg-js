function Character(sprite, attack, name, health, attackPower) {
  this.sprite = sprite;
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.attack = attack;
  this.isAttack = false;
  this.attackOffsetX = 0;
  this.attackOffsetY = 0;
}

Character.prototype = {
  update: function (keyState) {
    this.sprite.update(keyState);
    this.attack.update();
  },
  draw: function () {
    this.sprite.draw();
    this.isAttack
      ? this.attack.draw(this.attackOffsetX, this.attackOffsetY)
      : 0;
  },
};

const testPlayer = new Character(hero, slash2, "Test", 10, 2);
