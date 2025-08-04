function getComputerChoice () {
    if (Math.random() < 0.34) {
        return "Rock";
    } else if (Math.random() < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice of rock, paper, or scissors!");

    return humanChoice.charAt().toUpperCase() + humanChoice.slice(1).toLowerCase();
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "It's a tie!";

        } else {
            if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
                (humanChoice == "Paper" && computerChoice == "Rock") ||
                (humanChoice == "Scissors" && computerChoice == "Paper")) {
                
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}.`;

            } else {

                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}.`;
            }   
        }
    }
    for (let i = 0; i < 5; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Current Score: You - ${humanScore} vs. Computer - ${computerScore}`);
    }

    console.log(`Final Score: You - ${humanScore} vs. Computer - ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }

    console.log("Thanks for playing!");
    console.log("Please refresh the page to play again.");
}

playGame();