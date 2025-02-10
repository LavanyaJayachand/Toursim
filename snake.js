const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 500;
let score = 0;
let snake = [{ x: 160, y: 160 }];
let food = spawnFood();
let direction = 'RIGHT';
let nextDirection = direction;

const snakeImage = new Image();
snakeImage.src = 'browntexture.png';
const foodImage = new Image();
foodImage.src = 'https://th.bing.com/th/id/R.c88ebbc2d566a88f0c7f51f0e1ee482c?rik=eo6fxF92bp851A&riu=http%3a%2f%2fpiq.codeus.net%2fstatic%2fmedia%2fuserpics%2fpiq_293531_400x400.png&ehk=jooK2%2fFbijHmhfd%2bq3s%2fFeB342nnYb9zeZePaMfeIB0%3d&risl=&pid=ImgRaw&r=0';

function gameLoop() {
  setTimeout(function () {
    clearCanvas();
    moveSnake();
    checkCollision();
    drawSnake();
    drawFood();
    updateScore();
    gameLoop();
  }, 100);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
  direction = nextDirection;
  let head = { ...snake[0] };

  switch (direction) {
    case 'UP': head.y -= gridSize; break;
    case 'DOWN': head.y += gridSize; break;
    case 'LEFT': head.x -= gridSize; break;
    case 'RIGHT': head.x += gridSize; break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 20;
    food = spawnFood();
  } else {
    snake.pop();
  }
}

function checkCollision() {
  const head = snake[0];
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
  snake.forEach((segment, index) => {
    ctx.save();
    ctx.translate(segment.x + gridSize / 2, segment.y + gridSize / 2);

    let angle = 0;
    if (index === 0) { // Head rotation
      if (direction === 'UP') angle = -Math.PI / 2;
      else if (direction === 'DOWN') angle = Math.PI / 2;
      else if (direction === 'LEFT') angle = Math.PI;
    } else { // Body rotation based on next segment
      let nextSegment = snake[index - 1];
      if (nextSegment.x > segment.x) angle = 0; // Right
      else if (nextSegment.x < segment.x) angle = Math.PI; // Left
      else if (nextSegment.y > segment.y) angle = Math.PI / 2; // Down
      else if (nextSegment.y < segment.y) angle = -Math.PI / 2; // Up
    }

    ctx.rotate(angle);
    ctx.drawImage(snakeImage, -gridSize / 2, -gridSize / 2, gridSize, gridSize);
    ctx.restore();

    if (index === 0) drawEyes(segment);
  });
}

function drawEyes(head) {
  ctx.fillStyle = 'lavender';
  let eyeSize = 4;

  if (direction === 'RIGHT') {
    ctx.fillRect(head.x + 12, head.y + 4, eyeSize, eyeSize);
    ctx.fillRect(head.x + 12, head.y + 12, eyeSize, eyeSize);
  } else if (direction === 'LEFT') {
    ctx.fillRect(head.x + 4, head.y + 4, eyeSize, eyeSize);
    ctx.fillRect(head.x + 4, head.y + 12, eyeSize, eyeSize);
  } else if (direction === 'UP') {
    ctx.fillRect(head.x + 4, head.y + 4, eyeSize, eyeSize);
    ctx.fillRect(head.x + 12, head.y + 4, eyeSize, eyeSize);
  } else if (direction === 'DOWN') {
    ctx.fillRect(head.x + 4, head.y + 12, eyeSize, eyeSize);
    ctx.fillRect(head.x + 12, head.y + 12, eyeSize, eyeSize);
  }
}

function drawFood() {
  ctx.drawImage(foodImage, food.x, food.y, gridSize, gridSize);
}

function spawnFood() {
  let foodX, foodY;
  do {
    foodX = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    foodY = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
  } while (isFoodOnSnake(foodX, foodY));
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
  snake = [{ x: 160, y: 160 }];
  food = spawnFood();
  direction = 'RIGHT';
  nextDirection = direction;
  gameLoop();
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp' && direction !== 'DOWN') nextDirection = 'UP';
  else if (event.key === 'ArrowDown' && direction !== 'UP') nextDirection = 'DOWN';
  else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') nextDirection = 'LEFT';
  else if (event.key === 'ArrowRight' && direction !== 'LEFT') nextDirection = 'RIGHT';
});

gameLoop();
