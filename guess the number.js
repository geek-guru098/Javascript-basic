function generateRandomNumber(min, max) {
    let randomDecimal = Math.random();
    let randomNumber = Math.floor(randomDecimal * (max - min + 1) + min);
    return randomNumber;
}

function playGuessingGame() {
    let minRange = 1;
    let maxRange = 100;

    let targetNumber = generateRandomNumber(minRange, maxRange);

    console.log("Welcome to the Number Guessing Game!");
    console.log("I have selected a random number between", minRange, "and", maxRange);

    let guess;
    let attempts = 0;

    do {
        const prompt=require('prompt-sync')();
        guess = parseInt(prompt("Enter your guess: "));

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else {
            attempts++;

            if (guess === targetNumber) {
                console.log("Congratulations! You guessed the correct number in", attempts, "attempts.");
            } else if (guess < targetNumber) {
                console.log("Try a higher number. Hint: The number is higher than your guess.");
            } else {
                console.log("Try a lower number. Hint: The number is lower than your guess.");
            }
        }
    } while (guess !== targetNumber);
}

// Start the game
playGuessingGame();
