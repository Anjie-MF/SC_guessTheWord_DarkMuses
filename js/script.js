const guessedLettersElement = document.querySelector(".guessed-letters"); //UL for guessed letters
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter"); //input box where player types a letter
const wordInProgress = document.querySelector(".word-in-progress") // display revealed letters/ blanks
const remainingGuessesContainer = document.querySelector(".remaining") //container for remaning guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
const playAgainButton = document.querySelector(".play-again");
const keyboard = document.querySelector(".keyboard");
const museCardContainer = document.querySelector(".muse-card");
const museSigilElement = document.querySelector(".muse-sigil");
const museNameElement = document.querySelector(".muse-name");
const museHintElement = document.querySelector(".muse-hint");
// const candles = document.querySelector(".candles"); for remaining guesses

let word = "grimoire";