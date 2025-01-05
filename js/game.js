document.addEventListener('DOMContentLoaded', () => {
    const gameButton = document.getElementById('game-button');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');

    let score = 0;
    let timeLeft = 10;
    let timerInterval;

    // Start the timer
    function startGame() {
        score = 0;
        timeLeft = 10;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        gameButton.disabled = false;

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time Left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                gameButton.disabled = true;
                timerDisplay.textContent = "Time's up! Game Over!";
            }
        }, 1000);
    }

    // Increment the score when the button is clicked
    gameButton.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
    });

    // Start the game when the page loads
    startGame();
});
