var maxPoints = 0;
var points = 0;
var hearts = 3;

function updateElement(toRemove, toAppendLocation, appendedMessage) {
    $(toRemove).remove();
    $(toAppendLocation).append(appendedMessage);
}

function buttonClicked(ID) {
    //Checks if the clicked button is correct or wrong
    if (ID == Math.floor(Math.random() * 3) + 1) {
        addPoints();
        alert("CORRECT BUTTON");
    } else {
        alert("WRONG BUTTON");
        deleteHeart();
    }
    return false;
}

function addPoints() {
    ++points;
    updateElement("#pointsCounter", "#pointsDiv", '<h2 id = "pointsCounter"> Points: ' + points + '</h2>');
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
    if (maxPoints < points) {
        maxPoints = points;
        updateElement("#highScore", "#highScoreDiv", '<h2 id = "highScore"> Your high score is: ' + maxPoints + ' </h2>');
    }
                
    //reseting the points
    points = -1;
    addPoints();

    //reseting the hearts
    hearts = 3;    
    for (let i = 1; i <= 3; ++i)
        $("#hp").append('<img src = "images/heart.png" width="100" height="100" id = "heart">');
}