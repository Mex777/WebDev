var dictionary = [];

function addWord() {
    let word = document.getElementById("word").value 
    if (word == "") {
        alert("input is empty");
        return false;
    }

    dictionary.push(document.getElementById("word").value);
    $("#wordList").append('<li> ' + word + ' </li>');
}

function searchWord() {
    let word = document.getElementById("toBeSearched").value;
    let found = false;

    dictionary.forEach(function(item) {
        if (item == word)
            found = true;
    })

    if (found)
        alert("In list");
    else
        alert("Not in list");

    return false;
}