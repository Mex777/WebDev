/* eslint-disable no-unused-vars */
const foundLetters = new Set();
const wantedLetters = new Set();
let wordToGuess;
let wrongGuesses = 0;

/**
 * Makes a hangman game based on the word from the input
 * @return {false}
 */
function createGame() {
  const input = document.getElementById('wordToSearch').value;
  if (!validWord(input)) {
    document.getElementById('outcome').innerHTML = 'INVALID INPUT';
    document.getElementById('wordToSearch').value = '';
    return false;
  }

  // creates the places for the letters on the screen
  wordToGuess = input.toUpperCase();
  for (let i = 0; i < wordToGuess.length; ++i) {
    wantedLetters.add(wordToGuess[i]);
    const node = document.createElement('div');
    document.getElementById('lettersFound').appendChild(node);
    document.getElementById('lettersFound').
        getElementsByTagName('div')[i].className = 'col letters';
  }

  // draws the visuals of the game
  document.getElementById('outcome').innerHTML = '';
  document.getElementById('hangmanWordInput').remove();
  document.getElementById('guessBar').style.opacity = '1.0';
  // draws the image
  const imgLocation = 'hangmanStates/state0.png';
  document.getElementById('hangMan').appendChild(document.createElement('img'));
  document.getElementsByTagName('img')[0].src = imgLocation;

  return false;
}

/**
 * Checks whether the user's guess is in the wanted word or not.
 * @return {false}
 */
function makeGuess() {
  const guess = document.getElementById('guess').value;
  document.getElementById('guess').value = '';

  // checks whether the guess from the user is a letter
  if (!isLetter(guess)) {
    document.getElementById('outcome').innerHTML = 'Not letter! Try again!';
    return false;
  }

  const letter = guess.toUpperCase();
  if (wantedLetters.has(letter) && !foundLetters.has(letter)) {
    // updates letters inside the set and the outcome on the page
    foundLetters.add(letter);
    document.getElementById('outcome').innerHTML = 'Correct guess!';

    // updates the letters on the screen.
    for (let i = 0; i < wordToGuess.length; ++i) {
      if (letter == wordToGuess[i]) {
        document.getElementById('lettersFound').
            getElementsByTagName('div')[i].innerHTML = letter;
      }
    }

    // ends game if the user guessed all the letters
    if (wantedLetters.size == foundLetters.size) {
      endGame(1);
    }
  } else {
    ++wrongGuesses;

    // changes the state of the hangman and updates the outcome on the page
    document.getElementsByTagName('img')[0].src =
        'hangmanStates/state' + wrongGuesses + '.png';
    document.getElementById('outcome').innerHTML = 'Wrong guess';

    // ends game when the man is dead
    if (wrongGuesses == 6) {
      endGame(0);
    }
  }

  return false;
}

/**
 * Checks if the parameter is a letter from the alphabet
 * @param {string} inp
 * @return {boolean} true if it's letter, false otherwise
 */
function isLetter(inp) {
  if (inp.length != 1) {
    return false;
  }
  return (inp >= 'a' && inp <= 'z') || (inp >= 'A' && inp <= 'Z');
}

/**
 * Checks if the word from the user has letters only
 * @param {string} input from the user
 * @return {boolean} true if the word is made of letters only, false otherwise
 */
function validWord(input) {
  for (let i = 0; i < input.length; ++i) {
    if (!isLetter(input[i])) {
      return false;
    }
  }

  return input != '';
}

/**
 * Ends the game
 * @param {boolean} won 1 if game is won, 0 otherwise
 */
function endGame(won) {
  if (won) {
    document.getElementById('outcome').innerHTML = 'Game Over!\nYou won!';
    document.getElementById('outcome').style.color = 'green';
  } else {
    document.getElementById('outcome').innerHTML = 'Game Over!\nYou lost!';
    document.getElementById('outcome').style.color = 'red';
  }

  document.getElementById('guessBar').remove();
  document.getElementById('outcome').style.className = 'center';
}
