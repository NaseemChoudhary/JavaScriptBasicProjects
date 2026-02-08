const buttons = document.querySelectorAll(".btn");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.getElementById("result");
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

const choices = ["👊", "✋", "✌️"];
let shuffleInterval;
let computer = 0;
let player = 0;

// Add click events to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.textContent);
    });
});

// Start game
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice;

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "Draw 🤝";
    } 
    else if (
        (playerChoice === "👊" && computerChoice === "✌️") ||
        (playerChoice === "✌️" && computerChoice === "✋") ||
        (playerChoice === "✋" && computerChoice === "👊")
    ) {
        resultDisplay.textContent = "You Win 🎉";
        player++;
        playerScore.textContent = player;
    } 
    else {
        resultDisplay.textContent = "You Lose 😢";
        computer++;
        computerScore.textContent = computer;
    }

    stopShuffle();
    setTimeout(startShuffle, 1000);
}

// Shuffle animation
function startShuffle() {
    shuffleInterval = setInterval(() => {
        computerChoiceDisplay.textContent =
            choices[Math.floor(Math.random() * choices.length)];
    }, 10);
}

function stopShuffle() {
    clearInterval(shuffleInterval);
}

// Start animation on load
startShuffle();
