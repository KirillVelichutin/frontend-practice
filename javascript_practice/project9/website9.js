const choices = ["scissors", "rock", "paper"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
let result = "";
let computerScore = 0;
let playerScore = 0;

function game(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerDisplay.textContent = "Player choice: " + playerChoice;
    computerDisplay.textContent = "Computer choice: " + computerChoice;

    if(playerChoice == computerChoice) {
        result = "It's a tie!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice == "scissors") ? "You won!" : "You lost!";
                break;
            case "scissors":
                result = (computerChoice == "paper") ? "You won!" : "You lost!";
                break;
            case "paper":
                result = (computerChoice == "rock") ? "You won!" : "You lost!";
                break;
        }
    }

    switch(result) {
        case "You won!":
            playerScore += 1;
            break;

        case "You lost!":
            computerScore += 1;
            break;
    }

    resultDisplay.textContent = result;
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
}