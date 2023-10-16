function Character(sprite, name, health, attackPower) {
  this.sprite = sprite;
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
}

Character.prototype = {
  update: function () {},
  attack: function (targetCharacter) {
    targetCharacter.health -= this.attack;
  },
};

const testPlayer = new Character(hero, "Test", 10, 2);
