var dictionary = new Set();

function addWord() {
    let word = document.getElementById("word").value 
    if (word == "") {
        alert("input is empty");
        return false;
    }

    if (dictionary.has(word) == false) {
        dictionary.add(document.getElementById("word").value); 
        $("#wordList").append('<li> ' + word + ' </li>');
    } else 
        alert("Already in list");
}

function searchWord() {
    let word = document.getElementById("toBeSearched").value;
    if (word == "") {
        alert("input is empty");
        return false;
    }

    if (dictionary.has(word))
        alert("In list");
    else
        alert("Not in list");

    return false;
}