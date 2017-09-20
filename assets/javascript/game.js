
// display newGameText
// computer selects a random number which is the index of a letter in an array
// user selects a letter or input a letter 
	// convert to lowercase 
// check if input guess and computer letter are equal
// if they are indeed equal wins++
	// if lettersGuessed array is empty display special message versous numerous attempts 
	// display the computersGuess in crystal + some text in body container. 
	// display play again button. if clicked - reset lettersGuessed; userGuess; computerGuess; 
// if they are not equal totalGuessess-- , add letter to letterGuessed array. repeat up to 5x unless they are equal before.
	// if totalguesses is === 0 , losses++
	// display the computersGuess in crystal + some text in body container.
	// if out of guesses display play again button. if clicked - reset lettersGuessed; userGuess; computerGuess; 

var wins = 0;
var losses = 0;
var totalGuesses = 5; // guesses left
var lettersGuessed;
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// messages
var newGameText =
        "<h2>Look deep into my crystal ball and predict the letter within...</h2>";
var firstGuessWinText = 
		  "<h2>Your Psychic abilities are insane! You knew the exact letter.</h2>";
var multiGuessWinText = 
		  "<h2>It may have taken you</h2> " + totalGuesses + "<h2></h2>";
var guessAgainText = 
		  "<h3>Look deep into my crystal ball, guess what letter you will see?</h3>";
var differentLetter = 
		  "<h3>Look deep into my crystal ball, guess what letter you will see?</h3>";
var playAgainText =
		  "<h3>Look deep into my crystal ball, guess what letter you will see?</h3>";


var someFunctionName = function(){
	// show new game message
	document.querySelector("#message-section").innerHTML = newGameText;
	// var userGuess;
	var computerGuess = choices[Math.floor(Math.random() * choices.length)];

	// document.querySelector("#answer").innerHTML = "<h1>" + computerGuess +"</h1>";
};
someFunctionName();

// validate user input 
document.getElementById("letter-sub-btn").addEventListener("click", function(e){
	var inpObj = document.getElementById("guess-form");
	if (inpObj.checkValidity() == false) {
		return
	} else {
		e.preventDefault() 
	}
	var userGuess = document.getElementById("user-letter").value;
    var patt =/[A-z]/g;
    var isletter = patt.test(userGuess);
    console.log(userGuess);
    console.log(isletter);
});

