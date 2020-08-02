const games = {
  win: 0,
  lost: 0,
};

// config
const SWITCH_DOORS = true;
const GAMES_TO_PLAY = 10000;

// true = win(a car, a vacation) / false = lost(zonk!)
const doorSetup = {
  0: [true, false, false],
  1: [false, true, false],
  2: [false, false, true],
};

let counter = 0;
while (counter < GAMES_TO_PLAY) {
  playgame(SWITCH_DOORS);
  counter++;
}

console.log("Wins:", games.win, "Lost:", games.lost);

function playgame(switchDoors) {
  // generate random three doors with one win two losses
  let doorsToPlay = doorSetup[getRandomNumber(0, 3)];

  // player chooses random a door
  let playerChoose = doorsToPlay[getRandomNumber(0, 3)];

  // gamemaster deletes one false door, now you decide, to switch door or not
  let endOfGame = switchDoors ? !playerChoose : playerChoose;

  if (endOfGame) {
    games.win += 1;
  } else {
    games.lost += 1;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
