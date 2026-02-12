let number = 0;

document.getElementById(`inbutton`).onclick = function(){
    number = number + 1;
    document.getElementById("Number").textContent = number;
}

document.getElementById(`rebutton`).onclick = function(){
    number = 0;
    document.getElementById("Number").textContent = number;
}

document.getElementById(`debutton`).onclick = function(){
    number = number - 1;    
    document.getElementById("Number").textContent = number;
}