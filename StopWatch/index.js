const display = document.getElementById(`display`);
let timer;
let isRunning = false;
let startTime = 0;
let elapseTime = 0;
let arr = {};
function Start(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(updateValues, 10);
        isRunning = true;
    }
}

function Stop(){
    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now() - startTime;
        isRunning = false;
        updateValues();
    }
}

function resettimer(){
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elapseTime = 0;
    display.textContent = `00:00:00:00`
}

function updateValues(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;
    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    hours = String(hours).padStart(2,0);
    let min = Math.floor(elapseTime / (1000 * 60) % 60);
    min = String(min).padStart(2,0);
    let sec = Math.floor((elapseTime / 1000)  % 60);
    sec = String(sec).padStart(2,0);
    let milisec = Math.floor((elapseTime % 1000) / 10);
    milisec = String(milisec).padStart(2,0);
    display.textContent = `${hours}:${min}:${sec}:${milisec}`;
}
