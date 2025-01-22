console.log("Hello world")
let computerScore = 0
let humanScore = 0

function getComputerChoice(){
    let cc = Math.random().toPrecision(3)
    let result 
    if(cc >= 0 && cc < 0.345){
        result = "rock"
        console.log("rock")
    }
    else if(cc >= 0.345 && cc < 0.675){
        result ="paper"
        console.log("paper")
    }
    else {
        result = "scissors"
        console.log("scissors")
    }
    return result
}

function getHumanChoice(){
    let humanChoice = prompt("Please, enter your choice: select between \"rock\", \"paper\" or \"scissors\".");
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice==="rock") {
        console.log("rock");
    } else if (humanChoice==="paper") {
        console.log("paper");
    } else if (humanChoice==="scissors") {
        console.log("scissors");
    } else {
        console.log("Invalid input.")
    }
    return humanChoice
}

function playRound(humanChoice , computerChoice){
    if (humanChoice===computerChoice) {
        console.log("Draw! Try again for a new game.");
    } else if (humanChoice==="rock" && computerChoice==="paper") {
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice==="rock" && computerChoice==="scissors"){
        console.log("Congratulations! You win");
        humanScore++;
    } else if (humanChoice==="paper" && computerChoice==="rock") {
        console.log("Congratulations! You win");
        humanScore++;
    } else if (humanChoice==="paper" && computerChoice==="scissors") {
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice==="scissors" && computerChoice==="rock") {
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice==="scissors" && computerChoice==="paper") {
        console.log("Congratulations! You win");
        humanScore++;
    }  else {
        console.log("Please, enter a valid value.");
        alert("Please, enter a valid value.");
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection,computerSelection)

function playGame(){
    for(let i = 0;i < 4;i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
    }

    if (humanScore>computerScore) {
        console.log("You have won the full game.")
        alert("You have won the full game.")
    } else if (computerScore>humanScore) {
        console.log("Computer has won the full game.")
        alert("Computer has won the full game.")
    } else {
        console.log("Stalemate!")
        alert("Stalemate!")
    }
}

playGame()