
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
var lettersGuessed = []; 
const choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // constent
var computerGuess = "a"; // for test
// choices[Math.floor(Math.random() * choices.length)]
// messages
var newGameText =
        "<h2>Look deep into my crystal ball and predict the letter within...</h2>";
var firstGuessWinText = 
		  "<h2>Your psychic abilities are insane! You knew the exact letter.</h2>";
var multiGuessWinText = 
		  "<h2>It only took you " + totalGuesses + " times to predict the letter.</h2>";
var guessAgainText = 
		  "<h3>Try another letter.</h3>";
// var differentLetter = 
// 		  "<h3></h3>";
// var playAgainText =
// 		  "<h3></h3>";
		

var reset = function () {
	document.querySelector("#message-section").innerHTML = newGameText;
	var totalGuesses = 5; // guesses left
	var lettersGuessed = []; 
	var computerGuess = choices[Math.floor(Math.random() * choices.length)];
 };

var load = function () {
    // show new game message
	document.querySelector("#message-section").innerHTML = newGameText;
	gameData();
	currentGameData();
};

var gameData = function () {
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
};  

var currentGameData = function () {
	document.querySelector("#remaining-guesses").innerHTML = totalGuesses;	
	document.querySelector("#incorrect-guesses").innerHTML = lettersGuessed;	
}; // dont sure where to call this


document.getElementById("letter-sub-btn").addEventListener("click", function(e){
	var inpObj = document.getElementById("guess-form");
	if (inpObj.checkValidity() == false) {
		return
	} else {
		e.preventDefault() 
	}
    if (totalGuesses <= 1) {
    	document.getElementById("letter-sub-btn").setAttribute("disabled", true);
    }
	var userInput = document.getElementById("user-letter").value.toLowerCase();
    psychic(userInput);
    currentGameData();
    document.getElementById("user-letter").value = ""; // reset input value
    return false; // prevent page refresh
});

// ? 
document.getElementById("user-letter").addEventListener("click", function(){
	if (totalGuesses > 5 && totalGuesses < 0){
		document.querySelector(".sub-messages").classList.add("hide");
	}
});

var psychic = function(userInput){
	var userGuess = userInput;
	console.log(userGuess);
	console.log(computerGuess);
	// check if letters match
	console.log(lettersGuessed);
	if (computerGuess != userGuess) {
		// check if guessed letter aleady
		if (lettersGuessed.includes(userGuess)) {
			// guess a diff letter text
			return
		} else {
			lettersGuessed.push(userGuess);
			if (totalGuesses > 0) {
				totalGuesses--;
				console.log(totalGuesses);
				currentGameData();
				document.querySelector(".sub-messages").innerHTML = guessAgainText;
			} else {
				// stop all
				// play again button - reset all 
				losses++;
				gameData();
			}
		}
	} else {
		// check how many time took to get the right answer
		if (totalGuesses === 5) {
			document.querySelector("#message-section").innerHTML = firstGuessWinText;
			document.querySelector("#answer").innerHTML = "<h1>" + computerGuess +"</h1>";
			document.querySelector("#guess-form").classList.add("hide");
			wins++;
			gameData();
		} else {
			document.querySelector("#message-section").innerHTML = multiGuessWinText;
			document.querySelector("#answer").innerHTML = "<h1>" + computerGuess +"</h1>";
			document.querySelector("#guess-form").classList.add("hide");
			wins++;
			gameData();
		}
	}
	currentGameData();
};


load();
