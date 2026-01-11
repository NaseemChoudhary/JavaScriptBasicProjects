let guess = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let subbtn = document.getElementById("subbtn");
let message = document.getElementById("output");
console.log(guess);
let attempt = 0;

subbtn.onclick = function () {
  if(attempt >= 3){
    message.textContent = "Too many attempts"
    subbtn.disabled = true;
    return;
}
    let numinp = document.getElementById("inputnum").value;
  attempt++;
  if (guess == numinp) {
    message.textContent = "Right Guess in ${attempts}";
    subbtn.disabled = true;
  } else if (numinp >= guess - 10 && numinp <= guess + 10) {
    message.textContent = "Close";
  } else {
    message.textContent = " Too Far";
  }
};
window.onload = () => {
    document.getElementById("tem").focus();
};