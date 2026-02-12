const toggle = document.getElementById("intoggle");

toggle.addEventListener("change", () => {

    if (toggle.checked) {
        document.body.classList.add("dark");
        document.querySelector('.ball').textContent = '⏾'
    } else {
        document.querySelector('.ball').textContent = '☀︎'
        document.body.classList.remove("dark");
    }

});
