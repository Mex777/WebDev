var maxPoints = 0;
var points = 0;
var hearts = 3;
var buttonsCounter = 0;
var winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;

function checkCorrectButton(ID) {
    if (ID == winnerButton) {
        ++points;
        $("#pointsCounter").text("Points: " + points);
        alert("CORRECT BUTTON");
    } else {
        alert("WRONG BUTTON");
        deleteHeart();
    }

    winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;
    return false;
}

function changeNumberOfButtons() {
    let before = Number(buttonsCounter);
    buttonsCounter = Number(prompt("Number of buttons\n(choose a number between 2 and 99)", 3));
    while (!(buttonsCounter > 1 && buttonsCounter < 100)) {
        alert("Invalid input");
        buttonsCounter = Number(prompt("Number of buttons\n(choose a number between 2 and 99)", 3));
    }

    if (buttonsCounter > before)
        for (var i = before + 1; i <= buttonsCounter; ++i) 
            $("#gameButtons").append('<button type = "button" class = "btn btn-outline-success btn-lg" id = "' + i + '" onclick = "return checkCorrectButton(id)"> ' + i + ' </button>');
    else if (buttonsCounter < before)
        for (var i = before; i >= buttonsCounter + 1; --i) 
            $("#" + i).remove();
    winnerButton = Math.floor(Math.random() * buttonsCounter) + 1;    

    return false;
}

function deleteHeart() {
    --hearts;
    $("#heart").remove();

    if (!hearts) {
        alert("Game Over");
        restartGame();
    }
}

function restartGame() {
    //updating the high score
    if (maxPoints <= points) {
        maxPoints = points;
        $("#highScore").text("Your high score is: " + maxPoints);
    }
                
    //resetting the points
    points = 0;
    $("#pointsCounter").text("Points: " + points);

    //resetting the hearts
    hearts = 3;    
    for (let i = 1; i <= hearts; ++i)
        $("#hp").append('<img src = "../view/heart.png" width = "100" height = "100" id = "heart">');
}