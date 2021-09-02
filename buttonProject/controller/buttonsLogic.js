/* eslint-disable no-unused-vars */
let maxPoints = 0;
let points = 0;
let hearts = 3;
let buttonsCounter = 0;
let winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;

/**
 * Checks whether the pressed button is winner or loser
 * @param {number} ID of the button
 * @return {false}
*/
function checkCorrectButton(ID) {
  if (ID == winnerButton) {
    ++points;
    $('#pointsCounter').text('Points: ' + points);
    alert('CORRECT BUTTON');
  } else {
    alert('WRONG BUTTON');
    deleteHeart();
  }

  winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;
  return false;
}

/**
 * Changes the number of buttons from a previous state to a new one.
 * @return {false}
 */
function changeNumberOfButtons() {
  const before = Number(buttonsCounter);
  buttonsCounter = Number(
      prompt('Number of buttons\n(choose a number between 2 and 99)', 3),
  );

  while (!(buttonsCounter > 1 && buttonsCounter < 100)) {
    alert('Invalid input');
    buttonsCounter = Number(
        prompt('Number of buttons\n(choose a number between 2 and 99)', 3),
    );
  }

  if (buttonsCounter > before) {
    for (let i = before + 1; i <= buttonsCounter; ++i) {
      $('#gameButtons').append(
          '<button type = "button"' +
              'class = "btn btn-outline-success btn-lg"' + 'id =' +
                  i + 'onclick = "return checkCorrectButton(id)"> ' +
                        i +
          '</button>',
      );
    }
  } else if (buttonsCounter < before) {
    for (let i = before; i >= buttonsCounter + 1; --i) {
      $('#' + i).remove();
    }
  }
  winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;

  return false;
}

/**
 * Erases a heart from the screen
 */
function deleteHeart() {
  --hearts;
  $('#heart').remove();

  if (!hearts) {
    alert('Game Over');
    restartGame();
  }
}

/**
* Updated the high score, the points and the hearts.
*/
function restartGame() {
  if (maxPoints <= points) {
    maxPoints = points;
    $('#highScore').text('Your high score is: ' + maxPoints);
  }

  points = 0;
  $('#pointsCounter').text('Points: ' + points);

  hearts = 3;
  for (let i = 1; i <= hearts; ++i) {
    $('#hp').append(
        '<img src = "../view/heart.png"' +
            'width = "100" height = "100" id = "heart">',
    );
  }
}
