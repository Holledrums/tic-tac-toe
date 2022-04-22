// Add Game Logic
// Game State variables:
// 0: Spieler 1 am Zug
// 1: Spieler 2 am Zug
// 2: Spieler 1 hat gewonnen
// 3: Spieler 2 hat gewonnen
// 4: Unentschieden

let gameState = 0;
const fields = [0, 2, 0, 1, 0, 2, 0, 0, 0];

const drawField = () => {
  fields.forEach((field, index) => {
    const cell = document.getElementById(index + 1);
    switch (field) {
      case 0:
      default:
        cell.innerHTML = "";
        break;
      case 1:
        cell.innerHTML = "X";
        break;
      case 2:
        cell.innerHTML = "O";
        break;
    }
  });
};

const newGameButton = document.getElementById("new-game");
newGameButton.disabled = gameState > 1 ? false : true;

const onNewGame = () => {
  console.log("new game button clicked");
};
const onCellClick = (e) => {
  e.target;
  console.log(e.target.id);
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  const newGameButton = document.getElementById("new-game");
  newGameButton.addEventListener("click", onNewGame);
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", onCellClick);
  });
  drawField();
});
