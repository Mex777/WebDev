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
  wordToGuess = $('#wordToSearch').val();

  // creates the hang
  // $('#hanger').append('<img>');

  // adding the letters in a set
  for (let i = 0; i < wordToGuess.length; ++i) {
    wantedLetters.add(wordToGuess[i]);
  }

  $('#hangmanWordInput').remove();
  $('#guessInput').css('opacity', '1.0');
  $('#hangMan').append('<img src="state0.png" id="state">');

  return false;
}

/**
 * Checks whether the user's guess is in the wanted word or not.
 * @return {false}
 */
function makeGuess() {
  const guess = $('#guess').val();

  // checks whether the guess from the user is a letter.
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
      $('#outcome').text('Game Over!\nYou won!');
      $('#guessBar').remove();
    }
  } else {
    ++wrongGuesses;

    // changes the state of the hangman and updates the outcome on the page
    $('#hangMan').html('<img src="state' + wrongGuesses + '.png">')
    $('#outcome').text('Wrong guess');

    // ends game when the hangmen is dead.
    if (wrongGuesses == 6) {
      $('#outcome').text('Game Over!\nYou lost!');
      $('#guessBar').remove();
    }
  }

  return false;
}

/**
 * Checkes if the parameter is a letter from the alphabet.
 * @param {string} inp
 * @return {bool} true if it's letter, false otherwise
 */
function isLetter(inp) {
  if (inp.length != 1) {
    return false;
  }
  return (inp >= 'a' && inp <= 'z') || (inp >= 'A' && inp <= 'Z');
}