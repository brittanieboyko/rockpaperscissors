function computerPlay() {
    const playOptions = ["rock", "paper", "scissors"];
    const randomComputerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
    return randomComputerSelection;
}

function playRound(computerSelection) {
    let formattedUserSelection = getPlayerSelection().toLowerCase();
    console.log("user:", formattedUserSelection, "computer:", computerSelection);
    if (formattedUserSelection === computerSelection) {
        return "draw!";
    } else if (formattedUserSelection === "rock" && computerSelection === "scissors") {
        return "User wins! Rock beats scissors.";
    } else if (formattedUserSelection === "rock" && computerSelection === "paper") {
        return "Computer wins! Paper beats rock.";
    } else if (formattedUserSelection === "paper" && computerSelection === "rock") {
        return "User wins! Paper beats rock.";
    } else if (formattedUserSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins! Scissors beat paper.";
    } else if (formattedUserSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins! Rock beats paper.";
    } else if (formattedUserSelection === "scissors" && computerSelection === "paper") {
        return "User wins! Scissors beat paper.";
    }
}

function getPlayerSelection() {
    return window.prompt("Choose rock, paper, or scissors");
}

function game() {
    let gameCount = 1;
    while (gameCount <= 5) {
        console.log(playRound(computerPlay()));
        gameCount++;
    }
}

game();