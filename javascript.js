// Gets the computer choice

function getComputerChoice () {
    let compGuess = Math.random();
    
    if (compGuess <= 0.33) {
        compGuess = "rock";
    } else if (0.33 < compGuess && compGuess <= 0.66) {
        compGuess = "paper";
    } else {
        compGuess = "scissors";
    }
    
    return compGuess;
}

// Check getComputerChoice
console.log(getComputerChoice())

// A round game

function playRound (playerSelection, computerSelection) {
    let result

    if (computerSelection == playerSelection.toLowerCase()) {
        result = "tie";
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        result = "you win";
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        result = "you lose";
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        result = "you lose";
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
        result = "you win";
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        result = "you win";
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        result = "you lose";
    } else {
        result = "wrong input";
    }

    return result;
}

// Check playRound
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));