let output = document.getElementById(`output`);
let button = document.getElementById('subbtn');
let unitoftem = document.getElementById(`mode`);

button.onclick = function(){
    let tem = document.getElementById(`tem`).value;
    tem = Number(tem);
    if(unitoftem.value === "°C"){
        output.textContent = `${(tem * 9/5) + 32} F`;
    }
    else if(unitoftem.value === "F"){
        output.textContent = `${(tem - 32) * 5/9} °C`
    }
};