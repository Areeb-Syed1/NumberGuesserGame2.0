document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let number = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const guessedNumbers = [];

    // Get references to HTML elements
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const guessedList = document.getElementById('guessedList');
    const restartButton = document.getElementById('restartButton');

    // Function to handle the guess
    function handleGuess() {
        const guess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        // Add guess to the guessed numbers list
        guessedNumbers.push(guess);
        guessedList.innerHTML = guessedNumbers.map(num => `<li>${num}</li>`).join('');

        if (guess > number) {
            message.textContent = 'Lower number please!';
        } else if (guess < number) {
            message.textContent = 'Higher number please!';
        } else {
            message.innerHTML = `🎉 <span>Congratulations!</span> You guessed the correct number in ${attempts} attempts. 🎉`;
            // Disable input and button
            guessInput.disabled = true;
            guessButton.disabled = true;
            // Show restart button
            restartButton.style.display = 'block';
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    }

    // Handle guess button click
    guessButton.addEventListener('click', handleGuess);

    // Handle Enter key press
    guessInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if inside a form
            handleGuess();
        }
    });

    // Function to restart the game
    restartButton.addEventListener('click', () => {
        number = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        guessedNumbers.length = 0;
        guessedList.innerHTML = '';
        message.textContent = '';
        attemptsDisplay.textContent = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        guessButton.style.display = 'block';
        restartButton.style.display = 'none';
        guessInput.value = '';
        guessInput.focus();
    });
});
