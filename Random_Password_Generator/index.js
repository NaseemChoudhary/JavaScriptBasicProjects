const generateBtn = document.getElementById("bttn");
const output = document.getElementById("Output");
const copyBtn = document.getElementById("copy");
const copyMsg = document.getElementById("copyMsg");

generateBtn.onclick = () => {
  const length = Number(document.getElementById("size").value);
  const lower = document.getElementById("lowerCase").checked;
  const upper = document.getElementById("upperCase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-={}[]<>?";

  let chars = "";
  if (lower) chars += lowerChars;
  if (upper) chars += upperChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  if (!chars || length <= 0) {
    output.value = "";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  output.value = password;
};

copyBtn.onclick = () => {
  if (!output.value) return;

  output.select();
  document.execCommand("copy");

  copyMsg.textContent = "Password copied!";
  setTimeout(() => (copyMsg.textContent = ""), 2000);
};
