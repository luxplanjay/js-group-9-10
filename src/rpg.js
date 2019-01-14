'use strict';

// Базовый класс героя
const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function(amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

// Класс Воина
const Warrior = function(name, xp, weapon) {
  // this = {}

  Hero.call(this, name, xp);

  this.weapon = weapon;

  // return this;
};

Warrior.prototype = Object.create(Hero.prototype);
// { __proto__: Hero.prototype }

Warrior.prototype.constructor = Warrior;
// { __proto__: Hero.prototype, constructor: Warrior }

Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

// { __proto__: Hero.prototype, constructor: Warrior, attack: f }

console.dir(Warrior);

const mango = new Warrior('Mango', 1000, 'axe');
// { __proto__: Warrior.prototype }
console.log(mango);

mango.gainXp(1000);

// Класс Мага
const Mage = function Mage(name, xp, spells) {
  Hero.call(this, name, xp);

  this.spells = spells;
};

Mage.prototype = Object.create(Hero.prototype);
Mage.prototype.constructor = Mage;
Mage.prototype.castSpell = function() {
  console.log(`Available spells ${this.spells}`);
};

const poly = new Mage('Poly', 1000, ['fireball', 'cold snap']);

console.log(poly);

poly.castSpell();
poly.gainXp(2000);

// Сделать класс Cleric у которого в прототипе есть
// метод heal который принимает 1 параметр - имя цели
// и выводит "Лечу <имя>"
