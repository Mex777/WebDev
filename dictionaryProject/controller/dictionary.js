/* eslint-disable no-unused-vars */
const dictionary = new Set();

/**
 * Adds a word in the dictionary
 * @return {false} when input is empty.
 */
function addWord() {
  const currWord = document.getElementById('word').value;
  if (currWord == '') {
    alert('input is empty');
    return false;
  }

  if (dictionary.has(currWord) == false) {
    dictionary.add(document.getElementById('word').value);
    $('#wordList').append('<li> ' + word + ' </li>');
  } else {
    alert('Already in list');
  }
}

/**
 * Checks whether the current word is in the dictionary
 * @return {false}
 */
function searchWord() {
  const currWord = document.getElementById('toBeSearched').value;
  if (currWord == '') {
    alert('input is empty');
    return false;
  }

  if (dictionary.has(currWord)) {
    alert('In list');
  } else {
    alert('Not in list');
  }
}
