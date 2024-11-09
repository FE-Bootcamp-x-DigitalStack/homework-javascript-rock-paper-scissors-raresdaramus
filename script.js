const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const lizardBtn = document.querySelector("#lizardBtn");
const result = document.querySelector("#result");

const choices = ["rock", "paper", "scissors", "lizard"];

let playerChoice;

const winningCombinations = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "lizard"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "rock"],
};

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const outcome = determineWinner(playerChoice, computerChoice);
  result.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}.<br>${outcome}`;
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return `It's a tie!`;
  } else if (winningCombinations[playerChoice].includes(computerChoice)) {
    return `Congratulations, You won! ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    } beats ${computerChoice}.`;
  } else
    return `Sorry, the computer won! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${playerChoice}.`;
}

rockBtn.addEventListener("click", () => {
  playerChoice = "rock";
  playGame(playerChoice);
});

paperBtn.addEventListener("click", () => {
  playerChoice = "paper";
  playGame(playerChoice);
});

scissorsBtn.addEventListener("click", () => {
  playerChoice = "scissors";
  playGame(playerChoice);
});

lizardBtn.addEventListener("click", () => {
  playerChoice = "lizard";
  playGame(playerChoice);
});
