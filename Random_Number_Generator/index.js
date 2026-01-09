let randomButton = document.getElementById("random");
let modeSelect = document.getElementById("mode");
let rangeBox = document.getElementById("rangeInputs");

function updateUI() {
  if (modeSelect.value === "range") {
    rangeBox.style.display = "block";
  } else {
    rangeBox.style.display = "none";
  }
}
// run when user changes mode
modeSelect.addEventListener("change", updateUI);

randomButton.onclick = function () {
  if (modeSelect.value === "range") {
    let min = document.getElementById(`min`).value;
    let max = document.getElementById(`max`).value;

    min = min === "" ? -2 : Number(min);
    max = max === "" ? 9 : Number(max);

    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("h1").textContent = num;
  } else if (modeSelect.value === "dice1") {
    let num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById("h1").textContent = num;
  } else if (modeSelect.value === "dice2") {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("h1").textContent = `${d1} ${d2}`;
  } else if (modeSelect.value === "dice3") {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let d3 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("h1").textContent = `${d1} ${d2} ${d3}`;
  } else if (modeSelect.value === "coin") {
    let num = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    if (num) {
      document.getElementById("h1").textContent = "Head";
    } else {
      document.getElementById("h1").textContent = "Tail";
    }
  }
};
let display = document.getElementById("h1");
let interval = setInterval(() => {
  display.textContent = Math.floor(Math.random() * 6) + 1;
}, 80);

setTimeout(() => {
  clearInterval(interval);
  display.textContent = finalResult;
}, 600);

