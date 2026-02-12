let randomButton = document.getElementById("random");
let modeSelect = document.getElementById("mode");
let rangeBox = document.getElementById("rangeInputs");
let diceBox = document.getElementById(`DiceRoller`);
let output = document.getElementById(`h1`);
let imgOutput = document.getElementById('Images');

randomButton.onclick = function () {
  if (modeSelect.value === "range") {
    let min = document.getElementById(`min`).value;
    let max = document.getElementById(`max`).value;

    min = min === "" ? -2 : Number(min);
    max = max === "" ? 9 : Number(max);

    let interval = setInterval(() => {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      output.textContent = num;
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      output.textContent = finalResult;
    }, 600);
  } else if (modeSelect.value === "dice") {
    let NoDice = document.getElementById(`NoDice`).value;
    let diceResult = [];
    let imageResult = [];
    for(let i = 0; i < NoDice; i++){
      value = Math.floor(Math.random() * (6 - 1 + 1)) + 1
      diceResult.push(value);
      imageResult.push(`<img src="Assets/${value}.png">`);
    }
    output.innerHTML = `
  <div class="dice-values">${diceResult.join(" ")}</div>
  <div class="dice-images">${imageResult.join("")}</div>
`;

  } else if (modeSelect.value === "coin") {
    let num = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    if (num) {
      output.textContent = "Head";
    } else {
      output.textContent = "Tail";
    }
  }
};

let display = output;

let interval = setInterval(() => {
  output.textContent = Math.floor(Math.random() * 6) + 1;
}, 50);

setTimeout(() => {
  clearInterval(interval);
  output.textContent = finalResult;
}, 600);

function updateUI() {
  if (modeSelect.value === "range") {
    rangeBox.style.display = "block";
    diceBox.style.display = "none";
  } else if (modeSelect.value === "dice") {
    diceBox.style.display = "block";
    rangeBox.style.display = "none";
  }
}
updateUI();
modeSelect.addEventListener("change", updateUI);
