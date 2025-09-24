// rock = зацепка, paper = рука, scissors = магнезия
function getRandomComputerResult() {
  const options = ["Зацепка", "Рука", "Магнезия"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Зацепка" && computer === "Магнезия") ||
    (player === "Магнезия" && computer === "Рука") ||
    (player === "Рука" && computer === "Зацепка")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Игрок побеждает! ${userOption} бьёт ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Ничья! Оба выбрали ${userOption}`;
  } else {
    computerScore++;
    return `Компьютер побеждает! ${computerResult} бьёт ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Игрок" : "Компьютер"
    } побеждает!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
function resetGame() {
resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    playerScoreSpanElement.innerText = "0";
    computerScoreSpanElement.innerText = "0";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
    playerScore = 0;
    computerScore = 0;
  
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Зацепка");
});

paperBtn.addEventListener("click", function () {
  showResults("Рука");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Магнезия");
});