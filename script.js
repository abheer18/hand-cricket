const options = document.querySelectorAll('.option_image');
const userImage = document.getElementById('userImage');
const botImage = document.getElementById('botImage');
const resultDisplay = document.querySelector('.result');
const totalScoreDisplay = document.getElementById('totalScore');

let totalScore = 0;
let gameOver = false;

options.forEach(option => {
    option.addEventListener('click', () => {
        if (gameOver) return; // Game is over, prevent further clicks

        const userChoice = parseInt(option.dataset.value); // Get the number value
        const botChoice = generateBotChoice();

        userImage.src = `images/${getImageName(userChoice)}.png`; // Set user image
        botImage.src = `images/${getImageName(botChoice)}.png`; // Set bot image

        if (userChoice === botChoice) {
            resultDisplay.textContent = "You are out!";
            gameOver = true;
            totalScore = 0;
        } else if (userChoice != botChoice) {
            totalScore += userChoice;
            totalScoreDisplay.textContent = totalScore;
            resultDisplay.textContent = "You scored!";
        } else {
            resultDisplay.textContent = "Try again!";
        }
    });
});

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    totalScore = 0;
    totalScoreDisplay.textContent = totalScore;
    resultDisplay.textContent = "Play Cricket"; // Reset the result message
    gameOver = false; // Allow the user to play again
    // Optionally reset the images to default:
    userImage.src = "images/user.png"; // Or your default image
    botImage.src = "images/bot.png"; // Or your default image
});
function generateBotChoice() {
    const choices = [1, 2, 3, 4, 5, 6, 9, 10, 20, 50, 100];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getImageName(value) {
    // Return the correct image name based on the number.  This is crucial!
    switch (value) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 9: return "nine";
        case 10: return "ten";
        case 20: return "twenty";
        case 50: return "fifty";
        case 100: return "hundred";
        default: return "rock"; // Default image if something goes wrong
    }
}