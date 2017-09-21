//Array for the hangman game

var wordBank = ["cat", "dog", "monkey", "horse", "bird"];

// ASSUME THAT wordBank[2] "monkey" was chosen from array by a previous function........

//  // This function is run whenever the user presses a key.
// document.onkeyup = function(event) 
// {

// // INSERT FILTER FUNCTION HERE:

// // Determines which key was pressed.
// var userGuess = event.key;
// console.log(event.key);


//  // replace wordbank[2] with variable name for selected word from wordBank
var userGuess = "cat";

function keyPress(str) {
  console.log(str);
  for (var i = 0; i <= str[2].length; i++) {
    var secrestWord = str[2];
      if (userGuess === secrestWord[i]) {
          console.log("match");
      } else  if (secrestWord.indexOf(userGuess) === -1) {
          console.log("not a match");
      }
    }
}

keyPress("cat");