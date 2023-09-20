// const gameBoard = document.getElementById('gameBoard')
// const context = gameBoard.getContext('2d')
// const scoreText = document.getElementById('scoreText')
// const rBtn = document.getElementById('resetBtn')
// const gameWidth = gameBoard.width
// const gameHeight = gameBoard.gameHeight
// const boardBackground = "white"
// const snakeColor = "green"
// const snakeBorder = "black"
// const foodColor = 'red'
// const unitSize = 20
// let running = false
// let xVelocity = unitSize
// let yVelocity = 0
// let foodX
// let foodY
// let snake = [
//     { x: unitSize *4, y: 0},
//     { x: unitSize *3, y: 0},
//     { x: unitSize *2, y: 0},
//     { x: unitSize, y: 0},
//     { x: 0, y: 0}
// ]
// window.addEventListener('keydown', changeDirection)
// resetBtn.addEventListener('click', resetGame)

// gameStart()
// createFood()
// drawFood()




// function nextTick() {
//     if (running) {
//         setTimeout(() => {
//             clearBoard()
//             drawFood()
//             moveSnake()
//             drawSnake()
//             checkGameOver()
//             nextTick()

//         }, 100)
//     }
//     else{
//         displayGameOver()
//     }
// }

// function clearBoard() {
//     context.fillStyle = boardBackground;
//     context.fillRect (0, 0, gameWidth, gameHeight)

// }

// function createFood() {
//     function randomFood (min, max) {
//         const randNumb = Math.round((Math.random() * (max - min) + min) /unitSize) *unitSize
//         return randNumb
       
//     }

//     foodX = randomFood(0, gameWidth - unitSize)
//      foodY = randomFood(0, gameWidth - unitSize)
// }


// // console.log(foodX)

// function drawFood() {
//     context.fillStyle = foodColor
//     context.fillRect (foodX, foodY, unitSize, unitSize)
// }


// function gameStart() {
//     // scoreText.textContent = score
//     running = true;
//     createFood();
//     drawFood()
//     nextTick()

// }

// function moveSnake() {
//     const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity}
//     snake.unshift(head)

//     // if food is eaten
//     if (snake[0].x == foodX && snake[0].y == foodY) {
//         score+=1
//         scoreText.textContent = Score
//         createFood()
//     } else {
//         snake.pop()
//     }
// }

// function drawSnake() {
//     context.fillStyle = snakeColor
//     context.strokeStyle = snakeBorder
//     snake.forEach(snakePart => {
//         context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
//         context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
//     })
// }

// function changeDirection(event) {
//     const keyPressed = event.keyCode
//     console.log(keyPressed)
// }

// function checkGameOver() {}

// function displayGameOver() {}

// function resetGame() {}


const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreText");
const resetBtn = document.getElementById("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const boardBackground = "white";
const snakeColor = "darkgreen";
const snakeBorder = "white";
const foodColor = "red";
const unitSize = 20;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let score = 0
let foodX;
let foodY;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
  running = true;
    // scoreText.textContent = Score;
  createFood();
  drawFood();
  nextTick();
}

function nextTick() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 150);
  } else {
    displayGameOver();
  }
}

function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
  function randomFood(min, max) {
    const randNumb =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNumb;
  }

  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);

    // if food is eaten
    if(snake[0].x === foodX && snake[0].y  == foodY) {
        score += 10
        scoreText.textContent = score
        createFood();
    } else {
        snake.pop()
    }
}

function drawSnake() {
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)

    })
}

function changeDirection(event) {
    const keypressed = event.keyCode;

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40


    const goingUp = (yVelocity == -unitSize)
    const goingDown = (yVelocity == unitSize)
    const goingLeft = (yVelocity == -unitSize)
    const goingRight = (yVelocity == unitSize)

    switch(true) {
        case (keypressed == LEFT && !goingRight):
          xVelocity = -unitSize
        yVelocity = 0
        break;
        case (keypressed == UP && !goingDown):
          yVelocity = -unitSize
          xVelocity = 0;
          break;
          case (keypressed == RIGHT && !goingLeft):
          xVelocity = unitSize
          yVelocity = 0
          break;
          case (keypressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize
            break;
      }
}



        function checkGameOver() {
            switch(true) {
                case(snake[0].x < 0): 
                running = false
                break;
                case(snake[0].x >= gameWidth): 
                running = false
                case(snake[0].y < 0): 
                running = false
                break;
                case(snake[0].y >= gameHeight): 
                running = false  
            }

        for (let i = 0; i < snake.lenght; i++)  {
            if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                running = false
            }

        
        }
    }
      

function displayGameOver() {
   ctx.font = '50px MV Boli'
   ctx.fillStyle = 'blue'
   ctx.textAlign = 'center'
   ctx.fillText ("GAME OVER", gameWidth/2, gameHeight/2)
}


function resetGame() {

    score = 0
    xVelocity = unitSize
    yVelocity = 0
    snake = [
    { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
    ]
    gameStart()
}




// console.log(Math.floor(5.9))
// console.log(Math.pow(2,5))


// context.beginPath();
// ctx.font = '50px MV Boli'
// ctx.fillStyle = 'red'
// ctx.textAlign = 'center'