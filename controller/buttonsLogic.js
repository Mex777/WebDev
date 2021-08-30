var maxPoints = 0;
var points = 0;
var hearts = 3;

function buttonClicked(ID) {
    //Checks if the clicked button is correct or wrong
    if (ID == Math.floor(Math.random() * 3) + 1) {
        ++points;
        $("#pointsCounter").text("Points: " + points);
        alert("CORRECT BUTTON");
    } else {
        alert("WRONG BUTTON");
        deleteHeart();
    }
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
    if (maxPoints < points) {
        maxPoints = points;
        $("#highScore").text("Your high score is: " + maxPoints);
    }
                
    //resetting the points
    points = 0;
    $("#pointsCounter").text("Points: " + points);

    //resetting the hearts
    hearts = 3;    
    for (let i = 1; i <= hearts; ++i)
        $("#hp").append('<img src = "view/heart.png" width="100" height="100" id = "heart">');
}