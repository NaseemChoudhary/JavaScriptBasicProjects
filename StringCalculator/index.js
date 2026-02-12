const input = document.getElementById('stringValue');
const output = document.querySelectorAll('.output');
const searchWord = document.getElementById("wordFilter")

input.addEventListener("input", () => {

    if (input.value.trim() === "") {
        output[0].innerHTML = "";
        wordFilter.style.display = "none";
        return;
    }
    output[0].innerHTML = "";
    searchWord.style.display = "block";

    let p1 = document.createElement("p");
    p1.textContent = `Letters with spaces: ${input.value.length}`;
    output[0].append(p1);

    // Letters without spaces
    let p2 = document.createElement("p");
    p2.textContent = `Letters without spaces: ${input.value.replace(/\s+/g, "").length}`;
    output[0].append(p2);

    // Words
    let p3 = document.createElement("p");
    p3.textContent = `Words: ${input.value.trim().split(/\s+/).length}`;
    output[0].append(p3);
    
});


searchWord.addEventListener("input", () => {
    const text = input.value.toLowerCase();
    const word = searchWord.value.toLowerCase();

    if (word === "") {
        output[1].innerHTML = "";
        return;
    }

    const words = text.split(/\s+/);
    let count = 0;

    words.forEach(w => {
        if (w === word) count++;
    });

    output[1].innerHTML = `"${word}" appears ${count} times.`;
});

function cleanSpaces() {
    let out = input.value.replace(/\s+/g, " ").trim();
    output[0].innerHTML = ""
    output[0].textContent = out;
        wordFilter.style.display = "none";

}

document.getElementById("upper").onclick = () => {
    out = input.value.toUpperCase();
    output[0].innerHTML = ""
    output[1].innerHTML = "";
        
    output[0].textContent = out;
    wordFilter.style.display = "none";

};

document.getElementById("lower").onclick = () => {
    out = input.value.toLowerCase();
    output[0].innerHTML = ""
    output[1].innerHTML = "";
        
    output[0].textContent = out;
    wordFilter.style.display = "none";

};


