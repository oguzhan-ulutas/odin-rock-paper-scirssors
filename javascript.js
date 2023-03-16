// Gets the computer choice

function getComputerChoice () {
    let computerChoise = Math.random();
    
    if (computerChoise <= 0.33) {
        computerChoise = "rock";
    } else if (0.33 < computerChoise && computerChoise <= 0.66) {
        computerChoise = "paper";
    } else {
        computerChoise = "scissors";
    }
    
    return computerChoise;
};

// // Check getComputerChoice
// console.log(getComputerChoice())

// A round game

function playRound (playerSelection, computerSelection) {
    let result;

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
    };

    return result;
};

// // Check playRound
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 1; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt();
        let result = playRound(playerSelection, computerSelection);
        
        console.log(result);

       
        if (result == "you win") {
            playerScore += 1;
        } else if (result == "you lose") {
            computerScore += 1;
        }

        let score = `You - ${playerScore} ||  Computer- ${computerScore}`;

        console.log(score);
     }

     if (playerScore > computerScore) {
        console.log("End of the game. You win!!!");
     } else if (playerScore == computerScore) {
        console.log("End of the game. Tie");
     } else {
        console.log("End of the game. You lose!!!");
     };
}

console.log(game());