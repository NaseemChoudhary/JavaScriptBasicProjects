const gameBoard = document.querySelector('.gameBoard');
const result = document.getElementById("Results")
let playerA = {
    score: 0,
    chance: true,
}; 
let playerB = {
    score: 0,
    chance: false,
}; 
let gameOver = false;
let board = ["","","","","","","","",""];

let wins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function prepareBoard(){
    gameBoard.innerHTML = ''
    for(let i = 0; i < 9; i++){
        const boardPiece = document.createElement('div');
        boardPiece.classList.add("piece");
        boardPiece.id = i;
        boardPiece.addEventListener("click", ticTacToe)
        gameBoard.appendChild(boardPiece);
    }
}


function ticTacToe(event){
    event.preventDefault();
    if(gameOver) return

    const boardPiece = event.target;
    const index = boardPiece.id;
    if (board[index] !== "") return;
    
    if(playerA.chance){
        
        boardPiece.classList.add("O");                    
        boardPiece.textContent = `O`;
        board[index] = 'O';
        playerB.chance = true
        playerA.chance = false
    }else{
        boardPiece.classList.add("X");                    
        boardPiece.textContent = `X`;
        board[index] = 'X';
        playerB.chance = false
        playerA.chance = true
    }
    checkWinner();
}
function checkWinner() {

  for (let i = 0; i < wins.length; i++) {

    let [a, b, c] = wins[i];

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
       
          if (board[a] === "O") {
            playerA.score++;
        } else {
            playerB.score++;
        }
        result.innerHTML = `<p> PlayerA:  ${playerA.score} </p> <p>PlayerB:, ${playerB.score}</p>`
        gameBoard.classList.add("win");
      alert(board[a] + " Wins! 🎉");
      gameOver = true;
      return;
    }

  }


  // Draw
  if (!board.includes("")) {
    alert("Draw 😐");
    gameOver = true;
  }
}

function reset(){

  playerA.chance = true;
  playerB.chance = false;
    prepareBoard();
    gameOver = false;
    board = ["","","","","","","","",""];

}

prepareBoard();
