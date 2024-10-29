function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const result = document.getElementById("result");

    if (guess === randomNumber) {
        result.innerText = "Congratulations! You guessed it right 🎉";
    } else {
        result.innerText = `Sorry! The correct number was ${randomNumber}.`;
    }
}
