const display = document.getElementById(`display`);


function appenftodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = `${eval(display.value)}`;
    }catch(error){
        display.value = 'Error';
    }
}

function dellastelement(){
    let strins = display.value;
    strins = strins.slice(0, -1);
    display.value = strins;
}

function parathesis(){
    display.value = 'abbai jaana re';
    setTimeout(() => {
        display.value = "";
    }, 500);
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ("0123456789.+-*/%".includes(key)) {
        appenftodisplay(key);
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        dellastelement();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
