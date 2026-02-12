# Modern To-Do List

A clean, responsive, and dark-themed task management application built with vanilla JavaScript.

---

## 📸 Preview

> *Note: The interface features a modern dark mode palette with indigo accents and smooth fade-in animations.*

![To-Do-List](Assets\image.png)

---

## 📖 Overview

This project is a functional CRUD (Create, Read, Update, Delete) application designed to help users organize daily tasks. It features a modern, dark-themed UI built with CSS variables and handles application state using a local JavaScript array.

It is designed to be responsive and accessible, featuring keyboard navigation support and clear visual cues for task completion status.

### Why this project?

* **For Users:** A distraction-free environment to track daily goals.
* **For Developers:** A demonstration of array manipulation (`splice`, `push`), DOM rendering, and CSS variable-based theming.

---

## ✨ Features

* **Task Management:** Add new tasks easily using the input field or the `Enter` key.
* **Status Toggling:** Switch tasks between "Pending" and "Done" states, with visual strikethrough effects for completed items.
* **Dynamic Deletion:** Remove tasks instantly using the trash bin button.
* **Modern Aesthetics:** Uses the 'Poppins' font and a sophisticated dark color scheme (`#0f172a` background).
* **Smooth Animations:** List items utilize a `@keyframes fadeIn` animation when added to the DOM.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling:** CSS Flexbox, CSS Variables, Animations
* **Font:** Poppins (Google Fonts)

---

## 🚀 Live Demo

Try the To-Do List live here:

**[Link to Live Demo](https://NaseemChoudhary.github.io/JavaScriptBasicProjects/To-Do-List/)**

---

## 💻 Installation & Setup

Since this is a static site, no build step is required. You can run it locally by cloning the repository.

1. **Clone the repository**
```bash
git clone https://github.com/NaseemChoudhary/JavaScriptBasicProjects.git

```


2. **Navigate to the project directory**
```bash
cd JavaScriptBasicProjects/To-Do-List

```


3. **Open in Browser**
Simply open the `index.html` file in your preferred web browser.

---

## 🎮 Usage

1. **Add a Task:** Type your task into the input field and click "Add Task" or press **Enter**.
2. **Mark as Done:** Click the **Pending** button to toggle the status to **Done**. The text will dim and strike through.
3. **Delete:** Click the trash can icon (🗑️) to permanently remove the item from the list.

---

## 🎨 Front-End Details

### CSS Variables (Dark Theme)

The application utilizes CSS variables (`:root`) to maintain a consistent color palette and make theme adjustments easy:

```css
:root {
  --bg-color: #0f172a;       
  --card-bg: #1e293b;        
  --accent-color: #6366f1;  
  --success-color: #22c55e;  
}

```

### State Management

The app avoids direct DOM parsing for logic and instead relies on a single source of truth—the `todos` array. The UI is re-rendered whenever this state changes:

```javascript
let todos = []; // Stores objects like { name: "Task", status: false }

function renderTodos() {
    todoList.innerHTML = ''; // Clears list
    todos.forEach((todo, index) => {
        // Rebuilds DOM elements based on array state
    });
}

```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add features like "Local Storage Persistence" or "Drag and Drop ordering":

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/LocalStorage`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Naseem Choudhary**

* GitHub: [@NaseemChoudhary](https://github.com/NaseemChoudhary)
* LinkedIn: [Naseem Choudhary](https://www.linkedin.com/in/naseem-choudhary-08a654392)

---

*Made with ❤️ and CSS Variables.*