const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext('2d');

let box = 10;
let row = canvas.width / box;
let col = canvas.height / box;
let direction = "LEFT";

let food  = {
    x: Math.floor(Math.random() * row)* box,
    y: Math.floor(Math.random() * col)* box
}

let snake = [
    {x: 7 * box, y: 2*box}
]

function setDirection(newDir) {
    if (newDir === "UP" && direction !== "DOWN") direction = "UP";
    if (newDir === "DOWN" && direction !== "UP") direction = "DOWN";
    if (newDir === "LEFT" && direction !== "RIGHT") direction = "LEFT";
    if (newDir === "RIGHT" && direction !== "LEFT") direction = "RIGHT";
}



document.addEventListener("keydown", changeDirection);

function changeDirection(event){
    if(event.key === "ArrowUp" && direction !== "DOWN") direction = 'UP';
    if(event.key === "ArrowDown" && direction !== "UP") direction = 'DOWN';
    if(event.key === "ArrowRight" && direction !== "LEFT") direction = 'RIGHT';
    if(event.key === "ArrowLeft" && direction !== "RIGHT") direction = 'LEFT'
    if (event.key === "r" || event.key === "R")  reset();
}


function draw(){
    
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < snake.length; i++){    
        ctx.fillStyle = i === 0 ? "blue" : i % 2 === 0? 'lightblue': 'pink';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let [headX, headY] = [snake[0].x, snake[0].y]
    
    if (direction === "LEFT") headX -= box;
    if (direction === "UP") headY -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "DOWN") headY += box;
    
    
    if (headX < 0) headX = canvas.width - box;
    if (headX >= canvas.width) headX = 0;
    if (headY < 0) headY = canvas.height - box;
    if (headY >= canvas.height) headY = 0;
    let newHead = { x: headX, y: headY };
    

    snake.unshift(newHead);
    if (headX === food.x && headY === food.y) {
        
        food = generateFood();
    } 
    else {
        snake.pop();
    }

    if(collision(snake[0], snake.slice(1))){
        clearInterval(time)
    }
}


function collision(head, array) {

  for (let i = 0; i < array.length; i++) {

    if (head.x === array[i].x &&
        head.y === array[i].y) {

      return true;
    }
  }

  return false;
}

function generateFood() {
    let newFood;

    while (true) {
        newFood = {
            x: Math.floor(Math.random() * row) * box,
            y: Math.floor(Math.random() * col) * box
        };

        let collision = false;

        for (let part of snake) {
            if (part.x === newFood.x && part.y === newFood.y) {
                collision = true;
                break;
            }
        }

        if (!collision) break;
    }

    return newFood;
}

function reset() {
    clearInterval(time);
    direction = "LEFT";
    snake = [
        { x: 7 * box, y: 2 * box }
    ];
    food = generateFood();
    time = setInterval(draw, 100);
}
let time = setInterval(draw, 100);
//canvas.focus();