function computerPlay() {
    const playOptions = ["rock", "paper", "scissors"];
    const randomComputerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
    return randomComputerSelection;
}

function playRound(userSelection, computerSelection) {
    console.log("user:", userSelection, "computer:", computerSelection);

    if (userSelection === computerSelection) {
        return "draw!";
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        return "User wins! Rock beats scissors.";
    } else if (userSelection === "rock" && computerSelection === "paper") {
        return "Computer wins! Paper beats rock.";
    } else if (userSelection === "paper" && computerSelection === "rock") {
        return "User wins! Paper beats rock.";
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins! Scissors beat paper.";
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins! Rock beats paper.";
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        return "User wins! Scissors beat paper.";
    } else {
        return "Please enter correct value. Try again";
    }
}

function userPlay() {
    let userSelection = window.prompt("Choose rock, paper, or scissors");
    if (userSelection === null) {
        console.log("null")
        return;
    } else return userSelection.toLowerCase();;
}

function game() {
    let gameCount = 1;
    while (gameCount <= 5) {
        console.log(playRound(userPlay(), computerPlay()));
        gameCount++;
    }
}

game();