let output = document.getElementById(`output`);
let button = document.getElementById('subbtn');
let unitoftem = document.getElementById(`mode`);

function convert(){
    let tem = document.getElementById(`tem`).value;
    tem = Number(tem);
    if(isNaN(tem)){
        output.textContent = "Enter Valid Value"
        return;
    }
    if(unitoftem.value === "°C"){
        output.textContent = `(${tem}°C * 9/5) + 32 = ${((tem * 9/5) + 32).toFixed(2)} F`;
    }
    else if(unitoftem.value === "F"){
        output.textContent = `(${tem} F - 32) * 5/9 = ${((tem - 32) * 5/9).toFixed(2)} °C`
    }
}
document.getElementById("tem").addEventListener("input", convert);
unitoftem.addEventListener("change", convert);
window.onload = () => {
   document.getElementById("tem").focus();
};
