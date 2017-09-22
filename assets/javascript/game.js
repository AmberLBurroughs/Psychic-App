
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
var computerGuess = choices[Math.floor(Math.random() * choices.length)]; 
// 

// messages
var newGameText =
        "<h2>Look deep into my crystal ball and predict the letter within...</h2>";
var firstGuessWinText = 
		  "<h2>Your psychic abilities are insane! You knew the exact letter.</h2>";
var multiGuessWinText; // this needs to be updated after each win with multi guesses

var guessAgainText = 
		  "<h4>Try another letter.</h4>";
var losingText = 
		  "<h2>You couldn't predict the letter. Try to really focus next time!</h2>"
// var differentLetter = 
// 		  "<h3>try another letter</h3>"; 

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
}; 

var upodateWinnerStats = function (str) {
	document.querySelector("#message-section").innerHTML = str;
	document.querySelector("#answer").innerHTML = "<h1>" + computerGuess +"</h1>";
	document.querySelector("#guess-form").classList.add("hide");
    document.querySelector("#start-new-game").classList.remove("remove");
	wins++;
	gameData();
}  // combined these
var upodateLossesStats = function (str) {
	document.querySelector("#message-section").innerHTML = str;
	document.querySelector("#answer").innerHTML = "<h1>" + computerGuess +"</h1>";
	document.getElementById("letter-sub-btn").setAttribute("disabled", true);
	document.querySelector("#guess-form").classList.add("hide");
    document.querySelector("#start-new-game").classList.remove("remove");
	losses++
    gameData();
}
document.getElementById("start-new-game").addEventListener("click", function(){
	reset();
});

document.getElementById("letter-sub-btn").addEventListener("click", function(e){
	var inpObj = document.getElementById("guess-form");
	if (inpObj.checkValidity() == false) {
		return
	} else {
		e.preventDefault() 
	}

	var userInput = document.getElementById("user-letter").value.toLowerCase();
    psychic(userInput);
    currentGameData();
    document.getElementById("user-letter").value = ""; // reset input value

    if (totalGuesses === 0 ) { 
    	gameData();
    	upodateLossesStats(losingText);

    }

    return false; // prevent page refresh
});

// ? 
document.getElementById("user-letter").addEventListener("click", function(){
	// if (totalGuesses < 5 && totalGuesses < 0){
	 	document.querySelector(".sub-messages").classList.add("hide"); // this is not working
	// }
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
			if (totalGuesses > 1) {
				totalGuesses--;
				console.log(totalGuesses);
				currentGameData();
				document.querySelector(".sub-messages").innerHTML = guessAgainText; // broken on reset
				document.querySelector(".sub-messages").classList.remove("hide");
			} else {
				// stop all
				// play again button - reset all 
				totalGuesses--;
				document.querySelector(".sub-messages").classList.add("hide");
				currentGameData();
				gameData();
			}
		}
	} else {
		// check how many time took to get the right answer
		if (totalGuesses === 5) {
			upodateWinnerStats(firstGuessWinText);
			
		} else {
			multiGuessWinText = 
				"<h2>It only took you " + lettersGuessed.length + " times to predict the letter.</h2>";
			upodateWinnerStats(multiGuessWinText);
			
		}
	}
	currentGameData();
};

var reset = function () {
	document.querySelector("#message-section").innerHTML = newGameText;
	 document.querySelector("#answer").innerHTML = "<h1> </h1>";
	 document.querySelector("#guess-form").classList.remove("hide");
	 totalGuesses = 5; // guesses left
	 lettersGuessed = []; 
	 currentGameData();
	 computerGuess = choices[Math.floor(Math.random() * choices.length)];
	 document.querySelector(".sub-messages").classList.add("hide");
	 document.querySelector("#start-new-game").classList.add("remove");
	 document.getElementById("letter-sub-btn").removeAttribute("disabled");

 };


load();
