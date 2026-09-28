import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function draw() {
    // Efface le canvas, puis dessine la pomme
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Nouvelle position de la tête, selon la direction
  const head = moveSnake(snake, direction, box);
    // Si la tête touche un mur : on arrête le jeu
  if (checkWallCollision(head, canvas, box)) {
    clearInterval(gameInterval);
    alert("Game over !");
    return;
  }
  // On ajoute cette tête au début du tableau
  snake.unshift(head);
  // Si la tête est sur la pomme : on garde la queue (il grandit) et on crée une nouvelle pomme
  if (head.x === food.x && head.y === food.y) {
    food = generateFood(box, canvas);
  } else {
    // Sinon on retire la queue : le serpent avance
    snake.pop();
  }  drawFood(ctx, food, box);
  drawSnake(ctx, snake, box);
}

startGame();
