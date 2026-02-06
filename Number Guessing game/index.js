let guess = Math.floor(Math.random() * 100) + 1;
let subbtn = document.getElementById("subbtn");
let message = document.getElementById("output");
let input = document.getElementById("inputnum");

console.log(guess); // for testing
let attempt = 0;
let maxAttempts = 3;

subbtn.onclick = function () {
  if (attempt >= maxAttempts) {
    message.textContent = "Game over. You have used all your attempts.";
    subbtn.disabled = true;
    return;
  }

  let numinp = Number(input.value);

  if (isNaN(numinp) || numinp < 1 || numinp > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempt++;

  if (numinp === guess) {
    message.textContent = `Correct! You guessed the number in ${attempt} attempt(s).`;
    subbtn.disabled = true;
  } else if (numinp >= guess - 10 && numinp <= guess + 10) {
    message.textContent = `Close! You are within 10 of the correct number. Attempts left: ${maxAttempts - attempt}`;
  } else {
    message.textContent = `Too far from the correct number. Attempts left: ${maxAttempts - attempt}`;
  }

  if (attempt >= maxAttempts && numinp !== guess) {
    message.textContent = `Game over. The correct number was ${guess}.`;
    subbtn.disabled = true;
  }
};

window.onload = () => {
  input.focus();
};
