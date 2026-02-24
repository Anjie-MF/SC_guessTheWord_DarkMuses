
Deviation i --- Global Variation (JS)
I replaced the default word with a custom word ("grimoire") to make the project mine.
I started planning extra features (keyboard + “muse card” UI) by adding future DOM selectors (currently commented out).


deviation ii --- HTML 
-added a muse-card section to introduce a theme (“Draw a Muse”) before guessing begins.
-The card includes three JS-targeted elements:
.muse-sigil (symbol)
.muse-name (muse title)
.muse-hint (keywords / vibe)
-On load (or new game), JavaScript randomly selects one muse from a set of five and updates the card content. This creates a themed hint layer while keeping the core guess-the-word logic unchanged.


deviation iii --- UX
-Theme-driven UX: All game feedback text is styled as “Muse / runes / veil” to match the project’s tone.
--Mystic placeholder: Unrevealed letters render as 🔮 instead of underscores.
Input validation messages: The game guides the player with specific prompts:
Empty input → “The Muse waits.”
More than one character → “One rune at a time.”
Non-letter input → “That is not a rune.”
-Win / Lose states:
Win → “The Muse smiles.”
Lose → Reveals the full word with highlight styling.


Deviation iv --- Async Function
-Built a custom word bank (dark-muses-words.txt) for a Dark Muses-themed version of Guess the Word.
-Served the word list as a static text file and fetched it with fetch() + async/await using Response.text().
-Added a simple data format (# Muse headers + one word per line) to support future “random muse selection” without changing the fetch logic.
-Verified the pipeline with smoke tests (direct URL check + console fetch + status verification).
-Since my file includes section headers (e.g., # Witch) and blank lines, I clean the fetched text before choosing a word:
split into lines
trim whitespace
filter out blank lines
filter out header lines that start with #
-Bug: The game sometimes chose # Siren or a blank line as the word.
Cause: I was picking randomly from the raw wordArray (dirty data).
Fix: Clean first, then randomize: