let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector("#human-score-val");
const computerScoreText = document.querySelector("#computer-score-val");
const outcomeDiv = document.querySelector("#outcome");
const winnerDiv = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset-btn");
const buttons = document.querySelectorAll(".game-btn");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  humanScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
  outcomeDiv.textContent = roundResult;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game! 🎉";
    winnerDiv.style.color = "green";
    endGame();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "GAME OVER! Computer wins. 💻";
    winnerDiv.style.color = "red";
    endGame();
  }
}

function endGame() {
  disableButtons();
  resetBtn.style.display = "inline-block";
}

function disableButtons() {
  buttons.forEach((button) => (button.disabled = true));
}

function enableButtons() {
  buttons.forEach((button) => (button.disabled = false));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  humanScoreText.textContent = 0;
  computerScoreText.textContent = 0;
  winnerDiv.textContent = "";
  outcomeDiv.textContent = "Choose your weapon to start!";

  resetBtn.style.display = "none";
  enableButtons();
});
