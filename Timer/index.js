const timerInput = document.getElementById('timerInput');
const inputHours = document.getElementById('hours');
const inputMin = document.getElementById('min');
const inputSec = document.getElementById('sec');
const timerOutput = document.getElementById('Timer');
const outputHours = document.getElementById('hoursOut');
const outputMin = document.getElementById('minOut');
const outputSec = document.getElementById('secOut');
const outputMili = document.getElementById('miliOut');
const beepSound = document.getElementById('beep');
const stopBtn = document.getElementById('stop');

let interval = null;
let isStopped = false;
let remainingMs = 0;

stopBtn.addEventListener("click", () => {
    isStopped = !isStopped;

    if (isStopped) {
        clearInterval(interval);
        stopBtn.textContent = "▶";
    } else {
        timerStartOutput();
        stopBtn.textContent = "⏸";
    }
});

function timerStartOutput(){
    clearInterval(interval);

    if (remainingMs === 0) {
        remainingMs = timerStartInput();
    }

    let milisec = remainingMs;

    timerOutput.style.display = 'block';

    interval = setInterval(() => {

        if (milisec <= 0) {

            clearInterval(interval);
            remainingMs = 0;

            beepSound.play();

            timerInput.style.display = 'block';
            timerOutput.style.display = 'none';

            isStopped = false;
            stopBtn.textContent = "▶";

            return;
        }


        const hours = String(Math.floor(milisec / 3600000)).padStart(2, "0");

        let remainsTime = milisec % 3600000;

        const min = String(Math.floor(remainsTime / 60000)).padStart(2, "0");

        remainsTime = remainsTime % 60000;

        const sec = String(Math.floor(remainsTime / 1000)).padStart(2, "0");

        const mili = String(remainsTime % 1000).padStart(3, "0");

        outputHours.value = hours;
        outputMin.value = min;
        outputSec.value = sec;
        outputMili.value = mili;


        milisec -= 10;
        remainingMs = milisec;

    }, 10);
}


// Read Input
function timerStartInput(){

    const hours = Number(inputHours.value || 0);
    const min = Number(inputMin.value || 0);
    const sec = Number(inputSec.value || 0);

    const milisec = hours * 3600000 + min * 60000 + sec * 1000;


    if (milisec <= 0) {
        alert("Please enter some time first ⏱️");
        return 0;
    }


    inputHours.value = '';
    inputMin.value = '';
    inputSec.value = '';


    timerInput.style.display = 'none';
    stopBtn.textContent = "⏸";


    return milisec;
}
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    remainingMs = 0;
    isStopped = false;
    stopBtn.textContent = "▶";

    timerOutput.style.display = "none";
    timerInput.style.display = "flex";

    hoursInput.value = "";
    minInput.value = "";
    secInput.value = "";

    updateDisplay();
});
