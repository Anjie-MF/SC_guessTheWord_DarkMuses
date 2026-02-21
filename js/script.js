const guessedLettersElement = document.querySelector(".guessed-letters"); //UL for guessed letters
const guessButton = document.querySelector(".guess");
const playerGuess = document.querySelector(".letter"); //input box where player types a letter
const wordInProgressElement = document.querySelector(".word-in-progress"); // display revealed letters/ blanks
const remainingGuessesContainer = document.querySelector(".remaining"); //container for remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
// const keyboard = document.querySelector(".keyboard");
// const museCardContainer = document.querySelector(".muse-card");
// const museSigilElement = document.querySelector(".muse-sigil");
// const museNameElement = document.querySelector(".muse-name");
// const museHintElement = document.querySelector(".muse-hint");
const word = "grimoire";
const guessedLetters = []; //bucket for all the LETTERS the player have already guessed



const placeholder = function (word) { //allows function to see the secret word
    const placeholderArray = [];

    for (const letter of word) {
        console.log(letter);
        placeholderArray.push("🔮");
    }
    wordInProgressElement.innerText = placeholderArray.join("");
}
placeholder(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const inputValueContainer = playerGuess.value; //get the letter out of the mailbox
    console.log(inputValueContainer); //show me the letter
    inputValueContainer.value = ""; //clear the mailbox for tomorrow's mail


    playerGuess.value = ""; 

    const validatedValue = checkPlayerInput(inputValueContainer); //we have and SAVED the result of the letter insepection
    if (validatedValue) { //let double check that it is a letter and not say, a number
        makeGuess(validatedValue); //oh cool, it is a letter, go ahead and give it to makeGuess 
    }

    checkPlayerInput(inputValueContainer);
})


const checkPlayerInput = function (playerGuess) {
    const acceptedLetter = /[a-zA-Z]/;

    if (playerGuess === '') {
        message.innerText = "You can't leave the offering empty, Mortal.";
    } else if (playerGuess.length > 1) {
        message.innerText = "You can only submit one offering at a time, Mortal.";
    } else if (!playerGuess.match(acceptedLetter)) {
        message.innerText = "Your offering doesn't meet the required standard, Mortal.";
    } else {
        return playerGuess;
    }
}


const makeGuess = function (guess) {
    guess = guess.toUpperCase();

    if (guessedLetters.includes(guess)) {
        message.innerText = "You already given that offering before, Mortal."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}