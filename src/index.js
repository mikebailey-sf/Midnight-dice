class Player {
  constructor(number) {
    this.number = number;
    this.dice = [];
    this.total = 0;
    this.qualified = false;
    this.taken = false;
  }

  randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  roll() {
    let numberOfDice = 6 - this.dice.length;
    let result = [];
    for (let i = 1; i <= numberOfDice; i++) {
      result.push(this.randomDice());
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

/*----- constants -----*/

/*----- app's state (variables) -----*/

let players = [];
players[0] = new Player(1);
players[1] = new Player(2);

/*----- cached element references -----*/
let header = document.getElementById("header");
let mat = document.getElementById("mat");
let held = document.getElementById("held");
let diceButton = document.getElementsByClassName("diceButton");

/*----- event listeners -----*/
document.getElementById("roll").addEventListener("click", playerRoll);

/*----- functions -----*/
function init() {}

function playerRoll(evt) {
  let roll = players[0].roll();
  let rollHtml = roll.map(x => "<button class='diceButton'>" + x + "</button>");
  mat.innerHTML = rollHtml;
  let rolledDice = document.getElementsByClassName("diceButton");
  for (var i = 0; i < rolledDice.length; i++) {
    rolledDice[i].addEventListener("click", saveDice);
  }
}

function saveDice(evt) {
  //alert(evt.target.innerHTML);
  players[0].dice.push(evt.target.innerHTML);
  evt.target.remove();
  held.innerHTML = players[0].dice;
}

init();
