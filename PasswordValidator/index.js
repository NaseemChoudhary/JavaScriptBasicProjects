const password = document.getElementById("inputForPassword");
const toggleBtn = document.getElementById("toggleBtn");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");

toggleBtn.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "𓁹";
    } 
    else {
        password.type = "password";
        toggleBtn.textContent = "⌣";
    }

});


email.addEventListener("input", () => {

    message.textContent = "";
    if (!email.value.includes("@")) {
        message.textContent = "Enter a valid email";
        message.style.color = "red";
        message.style.opacity = "1";

    }

});

password.addEventListener("input", () => {

    let strength = 0;

    message.textContent = "";

    if (password.value.length < 8) {

        message.textContent = "Minimum 8 characters required";
        message.style.color = "red";
        return;
    }

    if (/[A-Z]/.test(password.value)) strength++;
    if (/[a-z]/.test(password.value)) strength++;
    if (/[0-9]/.test(password.value)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) strength++;

    if (strength === 1) {
        message.textContent = "Very Weak";
        message.style.color = "red";
    }

    else if (strength === 2) {
        message.textContent = "Weak";
        message.style.color = "orange";
    }

    else if (strength === 3) {
        message.textContent = "Strong";
        message.style.color = "lightgreen";
    }

    else if (strength === 4) {
        message.textContent = "Very Strong";
        message.style.color = "green";
    }
});
