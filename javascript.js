function getComputerChoice () {
    if (Math.random() < 0.34) {
        return "rock";
    } else if (Math.random() < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice of rock, paper, or scissors!");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;