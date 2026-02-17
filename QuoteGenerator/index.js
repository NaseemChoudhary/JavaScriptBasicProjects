let quotes = [];
let filteredQuotes = [];
let currentIndex = 0;

const stack = document.getElementById("cardStack");
const skipBtn = document.getElementById("skipBtn");
const authorInput = document.getElementById("authorName");
const themeSelect = document.getElementById("theme");
const categorySelect = document.getElementById("category");
const searchBtn = document.getElementById("search");
const randomSearch = document.getElementById("random");

fetch("quotes.json")
  .then(res => res.json())
  .then(data => {
    quotes = data;
    fillDropdowns();
    resetStack(quotes);
  });

function fillDropdowns() {

  const themes = new Set();
  const categories = new Set();

  quotes.forEach(q => {
    themes.add(q.theme);
    categories.add(q.category);
  });

  themes.forEach(t => {
    themeSelect.innerHTML += `<option>${t}</option>`;
  });

  categories.forEach(c => {
    categorySelect.innerHTML += `<option>${c}</option>`;
  });
}

function createCard(q) {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <p class="quote-text">"${q.quote}"</p>
    <p class="quote-author">— ${q.author}</p>
  `;
  return card;
}

/* Render Stack */
function renderStack() {

  stack.innerHTML = "";

  const visible = filteredQuotes.slice(currentIndex, currentIndex + 3);

  visible.forEach(q => {
    stack.appendChild(createCard(q));
  });
}

function resetStack(list) {

  filteredQuotes = [...list];
  currentIndex = 0;
  renderStack();
}

/* Skip */
function skipQuote() {

  currentIndex++;

  if (currentIndex >= filteredQuotes.length) {
    stack.innerHTML = "<p>No more quotes 😢</p>";
    return;
  }

  renderStack();
}

function filterQuotes() {
  const author = authorInput.value.toLowerCase();
  const theme = themeSelect.value;
  const category = categorySelect.value;
  console.log("nanna")
  const result = quotes.filter(q => {

    const matchAuthor =
      author === "" ||
      q.author.toLowerCase().includes(author);

    const matchTheme =
      theme === "All" ||
      q.theme === theme;

    const matchCategory =
      category === "All" ||
      q.category === category;

    return matchAuthor && matchTheme && matchCategory;
  });

  if (result.length === 0) {

    stack.innerHTML = "<p>No results 😔</p>";
    return;
  }

  resetStack(result);
}

function random(){
  const index = Math.floor(Math.random() * quotes.length);
  filteredQuotes.unshift(quotes[index])
  renderStack()
}

/* Events */
skipBtn.addEventListener("click", skipQuote);
searchBtn.addEventListener("click", filterQuotes);
randomSearch.addEventListener("click", random);