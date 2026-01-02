function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors:");

  if (!choice) {
    return "";
  }

  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win this round!";
  } else {
    return "Computer wins this round!";
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(
      `Round ${round}: You chose ${humanChoice}, Computer chose ${computerChoice}. ${result}`
    );

    if (result.includes("You win")) {
      humanScore++;
    } else if (result.includes("Computer wins")) {
      computerScore++;
    }
  }
  console.log("Final Score:");
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game ended in a tie!");
  }
}

playGame();
