function Character(sprite, attack, name, health, attackPower) {
  this.sprite = sprite;
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.attack = attack;
  this.isAttack = false;
}

Character.prototype = {
  update: function (keyState) {
    this.sprite.update(keyState);
    this.attack.update();
  },
  draw: function () {
    this.sprite.draw();
    this.attack.draw();
  },
};

const testPlayer = new Character(hero, slash, "Test", 10, 2);
