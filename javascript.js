console.log("Hello World")

function getComputerChoice(){
    const randInt = Math.random()
    if (randInt < (1/3)) {
        return("rock")
    }
    else if (randInt < 2/3) {
        return("paper")
    }
    else {
        return("scissors")
    }
}

function getHumanChoice() {
    return(prompt("Choose"))
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Tie! Rock ties with Rock");
            }
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            if (computerChoice === "paper") {
                console.log("Tie! Paper ties with Paper");
            }
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            }
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats  Paper");
                humanScore++;
            }
            if (computerChoice === "scissors") {
                console.log("Tie! Scissors ties with Scissors");
            }
            break;
    }
}

    var humanScore = 0;
    var computerScore = 0;

function playGame() {    

    for (i = 0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        (console.log("You lose!"));
    } else {console.log("You tie!")}
}

playGame()