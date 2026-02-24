const guessedLettersElement = document.querySelector(".guessed-letters"); //UL for guessed letters
const guessButton = document.querySelector(".guess");
const playerGuess = document.querySelector(".letter"); //input box where player types a letter
const wordInProgressElement = document.querySelector(".word-in-progress"); // display revealed letters/ blanks
const remainingGuessesContainer = document.querySelector(".remaining"); //container for remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
let remainingGuesses = 8;
const guessedLetters = []; //bucket for all the LETTERS the player have already guessed
let word = "grimoire";
// const keyboard = document.querySelector(".keyboard");
// const museCardContainer = document.querySelector(".muse-card");
// const museSigilElement = document.querySelector(".muse-sigil");
// const museNameElement = document.querySelector(".muse-name");
// const museHintElement = document.querySelector(".muse-hint");


const getWord = async function () {
    const response = await fetch("/dark-muses-words.txt");
    const words = await response.text();

    //split into lines because how i got the doc formatted
    const wordArray = words.split(/\r?\n/);

    //remove headers and blank lines 
    const cleanWordArray = wordArray
        .map((line) => line.trim())
        .filter((line) => line !== "")
        .filter((line) => !line.startsWith("#"));

    const randomIndex = Math.floor(Math.random() * cleanWordArray.length);
    word = cleanWordArray[randomIndex];
}

getWord();

const placeholder = function (word) {
    const placeholderArray = [];

    for (const letter of word) {
        // console.log(letter);
        placeholderArray.push("🔮");
    }
    wordInProgressElement.innerText = placeholderArray.join("");
}
placeholder(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const inputValueContainer = playerGuess.value;
    console.log(inputValueContainer);

    playerGuess.value = "";

    const validatedValue = checkPlayerInput(inputValueContainer);
    if (validatedValue) {
        makeGuess(validatedValue);
    }
})


const checkPlayerInput = function (playerGuess) {
    const acceptedLetter = /^[a-zA-Z]$/;

    if (playerGuess === '') {
        message.innerText = "The Muse waits.";
    } else if (playerGuess.length > 1) {
        message.innerText = "One rune at a time.";
    } else if (!playerGuess.match(acceptedLetter)) {
        message.innerText = "That is not a rune.";
    } else {
        return playerGuess;
    }
}


const makeGuess = function (guess) {
    guess = guess.toUpperCase();

    if (guessedLetters.includes(guess)) {
        message.innerText = "Already offered."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        countGuessesRemaining(guess);
        showGuessedLetters();
        updateWIP(guessedLetters);
    }
}


const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";

    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
}


const updateWIP = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const updatePlaceholder = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            updatePlaceholder.push(letter.toUpperCase());
        } else {
            updatePlaceholder.push("🔮");
        }
    }
    wordInProgressElement.innerText = updatePlaceholder.join("");
    ifPlayerWonGame();
}


const countGuessesRemaining = function (guess) {
    const wordUpper = word.toUpperCase();
    if (!wordUpper.includes(guess)) {
        message.innerText = `No ${guess} answers the call.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `The sigil warms. Continue...`;
    }
    if (remainingGuesses === 0) {
        message.innerHTML = `The veil closes. The word was <span class="highlight">${word}</span>. Foolish Mortal.`;
        remainingGuessesSpan.innerText = `${remainingGuesses}`;
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses}`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses}`;
    }
};


const ifPlayerWonGame = function () {
    if (word.toUpperCase() === wordInProgressElement.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">The Muse smiles.</p>`;
    }
};


