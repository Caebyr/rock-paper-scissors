console.log("Hello world");

let computerScore = 0;
let humanScore = 0;

// Create buttons
const btn1 = document.createElement("button");
btn1.textContent = "Rock";
const btn2 = document.createElement("button");
btn2.textContent = "Paper";
const btn3 = document.createElement("button");
btn3.textContent = "Scissors";

btn1.style.margin = "8px";
btn1.style.padding = "8px"
btn2.style.margin = "8px";
btn2.style.padding = "8px"
btn3.style.margin = "8px";
btn3.style.padding = "8px"

// Create a div for results
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
resultDiv.style.fontSize = "18px";
resultDiv.style.fontWeight = "bold";

// Create separate paragraphs for different messages
const userChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");
const resultMessagePara = document.createElement("p");
const scorePara = document.createElement("p");
const finalResult = document.createElement("p");

// Append result elements to the div
resultDiv.appendChild(userChoicePara);
resultDiv.appendChild(computerChoicePara);
resultDiv.appendChild(resultMessagePara);
resultDiv.appendChild(scorePara);
resultDiv.appendChild(finalResult);

// Append elements to the body
const container = document.querySelector("body");
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(resultDiv);

function getComputerChoice() {
    let cc = Math.random().toPrecision(3);
    if (cc < 0.345) return "rock";
    else if (cc < 0.675) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    userChoicePara.textContent = `You chose: ${humanChoice}`;
    computerChoicePara.textContent = `Computer chose: ${computerChoice}`;

    if(computerScore == 0 && humanScore == 0){
        finalResult.textContent = "";
    }

    if (humanChoice === computerChoice) {
        resultMessagePara.textContent = "It's a Draw! Try again.";
        resultMessagePara.style.color = "blue";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessagePara.textContent = "Congratulations! You win.";
        resultMessagePara.style.color = "green";
        humanScore++;
    } else {
        resultMessagePara.textContent = "Computer wins!";
        resultMessagePara.style.color = "red";
        computerScore++;
    }

    scorePara.textContent = `Score: Human - ${humanScore} | Computer - ${computerScore}`;

    if(humanScore == 5 && humanScore > computerScore){
        finalResult.textContent = "YOU WON THE GAME!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5 && computerScore > humanScore){
        finalResult.textContent = "COMPUTER WON THE GAME!";
        humanScore = 0;
        computerScore = 0;
    }
}

// Adding event listeners to buttons
btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));
btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));



