const password = document.getElementById("inputForPassword");
const toggleBtn = document.getElementById("toggleBtn");

const email = document.getElementById("email");
const message = document.getElementById("message");

const form = document.getElementById("form");


// Show / Hide Password
toggleBtn.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "🙈";
    } 
    else {
        password.type = "password";
        toggleBtn.textContent = "👁️";
    }

});


// Email Validation
email.addEventListener("input", () => {

    message.textContent = "";
    message.style.opacity = "0";

    if (!email.value.includes("@")) {

        message.textContent = "Enter a valid email";
        message.style.color = "red";
        message.style.opacity = "1";

    }

});


// Password Strength Check
password.addEventListener("input", () => {

    let strength = 0;

    message.textContent = "";
    message.style.opacity = "0";

    if (password.value.length < 8) {

        message.textContent = "Minimum 8 characters required";
        message.style.color = "red";
        message.style.opacity = "1";

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

    message.style.opacity = "1";

});


// Submit Form
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (
        email.value.includes("@") &&
        password.value.length >= 8
    ) {

        alert("Login Successful ✅");

        form.reset();
        message.textContent = "";

    }

    else {

        alert("Please fix errors ❌");

    }

});
