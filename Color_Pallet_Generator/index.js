let mainclass = [];
let Output = [];
let color = [];
let textcolor = [];
const bttn = document.getElementById(`bttn`);
mainclass[0] = document.getElementById(`color1`);
Output[0] = document.getElementById(`Output1`);
mainclass[1] = document.getElementById(`color2`);
Output[1] = document.getElementById(`Output2`);
mainclass[2] = document.getElementById(`color3`);
Output[2] = document.getElementById(`Output3`);
let strings = [
  "0","1","2","3","4","5","6","7","8","9",
  "A","B","C","D","E","F",
  "a","b","c","d","e","f"
]

function randomcolor(){
    let colorCode = ['#']
    for(let i = 1; i < 7; i++){
        colorCode[i] = strings[Math.floor(Math.random() * strings.length)];
    }
    return colorCode.join("");
};

for(let i = 0; i < mainclass.length; i++){
        color[i] = randomcolor();
        textcolor[i] = randomcolor();
        
        mainclass[i].style.backgroundColor = color[i];
        Output[i].textContent = color[i];
        Output[i].style.color = textcolor[i];
    }

bttn.onclick = function(){
    for(let i = 0; i < mainclass.length; i++){
        color[i] = randomcolor();
        textcolor[i] = randomcolor();
        
        mainclass[i].style.backgroundColor = color[i];
        Output[i].textContent = color[i];
        Output[i].style.color = textcolor[i];
    }
};

