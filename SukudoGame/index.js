const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const board = document.querySelector('#board');

window.addEventListener("DOMContentLoaded", createBoard);

function createBoard(){
    console.log('heeheheh');
    board.innerHTML = '';
    for(let row = 0; row <9; row++){
        for(let col = 0; col <9; col++){
            const cell = document.createElement("div");
            cell.classList.add('cell');
            if(puzzle[row][col] !== 0){
                cell.textContent = puzzle[row][col];
                cell.classList.add("fixed");
            }else{
                const input = document.createElement('input');
                input.type = 'text'
                input.maxLength = 1;
                
                input.addEventListener('input', ()=>{
                    let value = parseInt(input.value);
                    if(value < 1 || value > 9){
                        input.value = '';
                         return;
                    }
                    if(!isvalid(row, col, value)){
                        input.value = ''
                        alert("❌ Not allowed here!");
                    }
                });
                cell.append(input);
            }
            board.appendChild(cell);
        }
    }
}

function isvalid(row, col, value){

  // Check row
  for(let i = 0; i < 9; i++){

    if(i !== col && getVlaue(row, i) === value){
      return false;
    }

  }

  // Check column
  for(let i = 0; i < 9; i++){

    if(i !== row && getVlaue(i, col) === value){
      return false;
    }

  }

  // Check 3x3 box
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){

      let r = boxRow + i;
      let c = boxCol + j;

      // Skip current cell
      if(r === row && c === col) continue;

      if(getVlaue(r, c) === value){
        return false;
      }

    }
  }

  return true;
}



function getVlaue(row, col){
    let index = row * 9 + col;
    let cell = board.children[index];
    
    if (cell.classList.contains("fixed")) {
    return parseInt(cell.textContent);
    }
    let input = cell.firstChild;
    if(input && input.value !== ""){
        return parseInt(input.value);
    }
    return 0;

}

function check(){

  let index = 0;
  let correct = true;

  for(let row = 0; row < 9; row++){
    for(let col = 0; col < 9; col++){

      let cell = board.children[index];

      if(!cell.classList.contains("fixed")){

        let input = cell.firstChild;
        let value = parseInt(input.value);

        if(value !== solution[row][col]){
          input.style.color = "red";
          correct = false;
        } 
        else {
          input.style.color = "green";
        }

      }

      index++;
    }
  }

  if(correct){
    alert("🎉 You solved it! Great job!");
  }
}

function reset(){
    createBoard();
}