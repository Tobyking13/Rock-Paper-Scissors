let computerScore = 0;
let playerScore = 0;

let computerPlay = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playerSel = (sel) => {
  let selLower = sel.toLowerCase();

  if (selLower === "rock" || selLower === "paper" || selLower === "scissors") {
    return selLower;
  } else {
    return console.log("Check Your Spelling");
  }
};

const statusDiv = document.querySelector("#statusDiv");
const compScoreDiv = document.querySelector("#compScoreDiv");
const playerScoreDiv = document.querySelector("#playerScoreDiv");

let game = (comp, player) => {
  if (
    (comp === "rock" && player === "scissors") ||
    (comp === "paper" && player === "rock") ||
    (comp === " scissors" && player === "paper")
  ) {
    statusDiv.textContent = `You Loose, ${comp} beats ${player}`;
    computerScore++;
  } else if (comp === player) {
    statusDiv.textContent = "It's a draw!";
  } else {
    statusDiv.textContent = `You Win! ${player} beats ${comp}`;
    playerScore++;
  }
  compScoreDiv.textContent = `Computer Score: ${computerScore}`;
  playerScoreDiv.textContent = `Player Score: ${playerScore}`;
};
const resultDiv = document.querySelector("#resultDiv");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", (e) => {
  game(computerPlay(), playerSel("Rock"));
  win_condition();
});
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", (e) => {
  game(computerPlay(), playerSel("Paper"));
  win_condition();
});
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", (e) => {
  game(computerPlay(), playerSel("Scissors"));
  win_condition();
});

function win_condition() {
  if (playerScore === 5) {
    resultDiv.textContent = "Player Wins!!!";
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();

    const resetBtn = document.createElement("BUTTON");
    resetBtn.innerText = "Play Again?";
    resetBtn.id = "resetButton";
    resetBtn.addEventListener("click", () => {
      computerScore = 0;
      playerScore = 0;
      resetBtn.remove();
      resultDiv.textContent = "";
      statusDiv.textContent = "";
      compScoreDiv.textContent = "";
      playerScoreDiv.textContent = "";
      window.location.reload();
    });
    resultDiv.appendChild(resetBtn);
  }
  if (computerScore === 5) {
    resultDiv.textContent = "Computer Wins!!!";
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();

    const resetBtn = document.createElement("BUTTON");

    resetBtn.innerText = "Play Again?";
    resetBtn.addEventListener("click", (e) => {
      computerScore = 0;
      playerScore = 0;
      resetBtn.remove();
      resultDiv.textContent = "";
      statusDiv.textContent = "";
      compScoreDiv.textContent = "";
      playerScoreDiv.textContent = "";
      window.location.reload();
    });
    resultDiv.appendChild(resetBtn);
  }

  if (computerScore === 5 && playerScore === 5) {
    resultDiv.textContent = "DRAW";
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
    const resetBtn = document.createElement("BUTTON");
    resetBtn.innerText = "Play Again?";
    //    buttons.remove();
    resetBtn.addEventListener("click", (e) => {
      computerScore = 0;
      playerScore = 0;
      resetBtn.remove();
      resultDiv.textContent = "";
      statusDiv.textContent = "";
      compScoreDiv.textContent = "";
      playerScoreDiv.textContent = "";
      window.location.reload();
    });
    resultDiv.appendChild(resetBtn);
  }
}
