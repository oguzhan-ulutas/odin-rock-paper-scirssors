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

    if (computerSelection == playerSelection) {
        result = "tie";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        result = "you win";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "you lose";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "you lose";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        result = "you win";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        result = "you win";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "you lose";
    } else {
        result = "wrong input";
    };

    return result;
};

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 2; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection
       
        console.log(playerSelection);

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
};

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        let playerSelection = e.target.classList[0];
        let computerSelection = getComputerChoice();
        let score = `You - ${playerScore} ||  Computer- ${computerScore}`;
        // Manupilating DOM for new results
        const div = document.createElement("div");

    });
});

