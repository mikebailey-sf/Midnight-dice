class Player {
  constructor(number) {
    this.number = number;
    this.dice = [];
    this.total = 0;
    this.qualified = false;
  }

  randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  roll() {
    let numberOfDice = 6 - this.dice.length;
    let result = [];
    for (i = 1; i <= numberOfDice; i++) {
      result.push(randomDice());
    }
    return result;
  }

  keep(number) {
    this.dice.push(number);
  }

  isQualified() {
    if (this.dice.includes(1) && this.dice.includes(4)) {
      return true;
    } else {
      return false;
    }
  }
}
