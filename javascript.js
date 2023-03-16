// Gets the computer choice

function getComputerChoice () {
    let computerChoice = Math.random();
    
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (0.33 < computerChoice && computerChoice <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
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

// function game() {
    
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 2; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection
       
//         console.log(playerSelection);

//         let result = playRound(playerSelection, computerSelection);
        
//         console.log(result);

       
//         if (result == "you win") {
//             playerScore += 1;
//         } else if (result == "you lose") {
//             computerScore += 1;
//         }

//         let score = `You - ${playerScore} ||  Computer- ${computerScore}`;

//         console.log(score);
//      }

//      if (playerScore > computerScore) {
//         console.log("End of the game. You win!!!");
//      } else if (playerScore == computerScore) {
//         console.log("End of the game. Tie");
//      } else {
//         console.log("End of the game. You lose!!!");
//      };
// };

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {

    button.addEventListener("click", function (e) {
        let playerSelection = e.target.className;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        // Add to DOM
        const userCommunication = document.querySelector(".userCommunication");
        const pSelections = document.createElement("p");
        pSelections.textContent = `Your selection: ${playerSelection} ||  Computer selection: ${computerSelection}`;
        userCommunication.appendChild(pSelections);


        if (result == "you win") {
            playerScore += 1;
        } else if (result == "you lose") {
            computerScore += 1;
        };

        let score = `You - ${playerScore} ||  Computer- ${computerScore}`;
        const pScore = document.createElement("p");
        pScore.textContent = score;
        userCommunication.appendChild(pScore);

        let sum = playerScore + computerScore

        if (sum == 5) {
            document.querySelector(".rock").disabled = true;
            document.querySelector(".paper").disabled = true;
            document.querySelector(".scissors").disabled = true;

            const pResult = document.createElement("p");
            pResult.setAttribute("style", "color: #C44141; font-size: 16px;")
            
            if (playerScore > computerScore) {
                pResult.textContent = "End of the game. You win!!! Refresh page to play again.";
             } else if (playerScore == computerScore) {
                pResult.textContent = "End of the game. Tie. Refresh page to play again.";
             } else {
                pResult.textContent = "End of the game. You lose!!! Refresh page to play again.";
             };
            
            userCommunication.appendChild(pResult);
            
            

        };


    });
    
});

