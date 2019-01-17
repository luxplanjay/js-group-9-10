'use strict';

// Базовый класс героя
class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

class Berserker extends Warrior {
  constructor(name, xp, weapon, warcry) {
    super(name, xp, weapon);

    this.warcry = warcry;
  }

  shout() {
    console.log(this.warcry);
    super.gainXp(1000);
  }
}

const mango = new Berserker('Mango', 1000, 'axe', 'Whhhhaaaaaah!');
console.log(mango);

mango.shout();
