function getComputerChoice () {
    if (Math.random() < 0.34) {
        return "rock";
    } else if (Math.random() < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

