const guessedLettersElement = document.querySelector(".guessed-letters"); //UL for guessed letters
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter"); //input box where player types a letter
const wordInProgressElement = document.querySelector(".word-in-progress"); // display revealed letters/ blanks
const remainingGuessesContainer = document.querySelector(".remaining"); //container for remaning guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
const playAgainButton = document.querySelector(".play-again");
const keyboard = document.querySelector(".keyboard");
const museCardContainer = document.querySelector(".muse-card");
const museSigilElement = document.querySelector(".muse-sigil");
const museNameElement = document.querySelector(".muse-name");
const museHintElement = document.querySelector(".muse-hint");
const word = "grimoire";

const placeholder = function (word) { //allows function to see the secret word
    const placeholderArray = []; //hold the dots aka your basket

    for (const letter of word) {
        console.log(letter);
        placeholderArray.push("🕯️");
    }
    wordInProgressElement.innerText = placeholderArray.join("");
}
placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValueContainer = textInput.value; //get the letter out of the mailbox
    console.log(inputValueContainer); //show me the letter
    inputValueContainer.value = ""; //the inbox for tomorrow mail 
})

const checkPlayerInput = function (textInput) {
    const acceptedLetter = /[a-zA-Z]/;

    if (textInput === '') {
        console.log("You can't leave the offering empty, Mortal.")
    } else if (textInput.length > 1) {
        console.log("You can only submit one offering at a time, Mortal.")
    } else if (textInput.match(/[a-zA-Z]/)) {
        console.log("Your offering doesn't meet the required standard, Mortal.")
    } else {
        return textInput
    }
}