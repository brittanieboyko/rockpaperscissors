console.log("hello!");

function computerPlay() {
    const playOptions = ["Rock", "Paper", "Scissors"];
    const randomComputerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
    return randomComputerSelection;
}

console.log(computerPlay());