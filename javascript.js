// Gets the computer choice

function getComputerChoice () {
    let compGuess = Math.random();
    
    if (compGuess <= 0.33) {
        compGuess = "Rock";
    } else if (0.33 < compGuess & compGuess <= 0.66) {
        compGuess = "Paper";
    } else {
        compGuess = "Scissors";
    }
    return compGuess;
}

console.log(getComputerChoice())

// A round game

// function playRound (playerSelection, computerSelection)