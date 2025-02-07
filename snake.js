const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 500;
let score = 0;
let snake = [{x: 160, y: 160}];
let food = spawnFood();
let direction = 'RIGHT';
let nextDirection = direction;  // New direction is tracked

function gameLoop() {
  setTimeout(function() {
    clearCanvas();
    moveSnake();
    checkCollision();
    drawSnake();
    drawFood();
    updateScore();
    gameLoop();  // Continue the game loop
  }, 100); // Speed of the snake
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
  // Change the snake's direction
  direction = nextDirection;

  let head = { ...snake[0] };

  switch (direction) {
    case 'UP':
      head.y -= gridSize;
      break;
    case 'DOWN':
      head.y += gridSize;
      break;
    case 'LEFT':
      head.x -= gridSize;
      break;
    case 'RIGHT':
      head.x += gridSize;
      break;
  }

  snake.unshift(head);

  // Check if the snake eats food
  if (head.x === food.x && head.y === food.y) {
    score += 20;
    food = spawnFood();
  } else {
    snake.pop();
  }
}

function checkCollision() {
  const head = snake[0];

  // Check if snake hits the wall
  if (
    head.x < 0 ||
    head.x >= canvasSize ||
    head.y < 0 ||
    head.y >= canvasSize ||
    isCollidingWithItself(head)
  ) {
    alert('Game Over! Your score: ' + score);
    resetGame();
  }
}

function isCollidingWithItself(head) {
  return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function drawSnake() {
  ctx.fillStyle = 'yellow';
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
  });
}

function drawFood() {
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function spawnFood() {
  let foodX, foodY;

  do {
    foodX = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    foodY = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
  } while (isFoodOnSnake(foodX, foodY));  // Ensure food is not on the snake

  return { x: foodX, y: foodY };
}

function isFoodOnSnake(x, y) {
  return snake.some(segment => segment.x === x && segment.y === y);
}

function updateScore() {
  document.getElementById('scoreText').textContent = 'Score: ' + score;
}

function resetGame() {
  score = 0;
  snake = [{x: 160, y: 160}]; // Reset the snake to its starting position
  food = spawnFood();
  direction = 'RIGHT';  // Reset the direction
  nextDirection = direction;  // Ensure nextDirection also matches
  gameLoop();  // Restart the game loop
}

// Event listener to handle keypress and direction change
document.addEventListener('keydown', function(event) {
  // Prevent 180-degree turns
  if (event.key === 'ArrowUp' && direction !== 'DOWN') {
    nextDirection = 'UP';
  } else if (event.key === 'ArrowDown' && direction !== 'UP') {
    nextDirection = 'DOWN';
  } else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') {
    nextDirection = 'LEFT';
  } else if (event.key === 'ArrowRight' && direction !== 'LEFT') {
    nextDirection = 'RIGHT';
  }
});


gameLoop();  // Start the game loop
