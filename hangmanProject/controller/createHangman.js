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
  // adding the letters in a set
  wordToGuess = $('#wordToSearch').val();
  for (let i = 0; i < wordToGuess.length; ++i) {
    wantedLetters.add(wordToGuess[i]);
  }

  $('#hangmanWordInput').remove();
  $('#guessInput').css('opacity', '1.0');
  $('#hangMan').append('<img src="hangmanStates/state0.png" id="state">');

  return false;
}

/**
 * Checks whether the user's guess is in the wanted word or not.
 * @return {false}
 */
function makeGuess() {
  const guess = $('#guess').val();
  $('#guess').val('');

  // checks whether the guess from the user is a letter
  if (!isLetter(guess)) {
    $('#outcome').text('Not letter. Try again!');
    return false;
  }

  if (wantedLetters.has(guess) && !foundLetters.has(guess)) {
    // updates letters and the outcome on the page
    foundLetters.add(guess);
    $('#outcome').text('Correct guess');

    // ends game if the user guessed all the letters
    if (wantedLetters.size == foundLetters.size) {
      endGame(1);
    }
  } else {
    ++wrongGuesses;

    // changes the state of the hangman and updates the outcome on the page
    $('#hangMan').html('<img src="hangmanStates/state'+ wrongGuesses +'.png">')
    $('#outcome').text('Wrong guess');

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
 * Ends the game
 * @param {int} won 1 if game is won, 0 otherwise
 */
function endGame(won) {
  if (won) {
    $('#outcome').text('Game Over!\nYou won!');
    $('#outcome').css('color', 'green');
  } else {
    $('#outcome').text('Game Over!\nYou lost!');
    $('#outcome').css('color', 'red');
  }

  $('#outcome').css('text-align', 'center');
  $('#guessBar').remove();
}
