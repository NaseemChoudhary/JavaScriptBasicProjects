# Glassmorphism Calculator
A sleek, responsive web calculator featuring a modern frosted-glass aesthetic.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Completed-success)
---



## 📸 Preview

> *Note: The interface features a translucent, frosted-glass effect that adapts to the dark-themed background.*

![Calculator](Assets\image.png)

---

## 📖 Overview

This project is a lightweight, web-based calculator built entirely with vanilla web technologies. It was designed to demonstrate modern CSS styling techniques—specifically **Glassmorphism**—while maintaining functional simplicity.

It is fully responsive, supporting touch interactions on mobile devices and keyboard input for desktop users. This project serves as a demonstration of DOM manipulation, event handling, and modern CSS layout properties like Grid and Flexbox.

### Why this project?

* **For Users:** A distraction-free calculation tool with a pleasing visual design.
* **For Developers:** A clean reference for implementing `backdrop-filter`, CSS Grid layouts, and mapping keyboard events to UI elements without external frameworks.

---

## ✨ Features

* **Modern UI:** Implements the "Glassmorphism" design trend using `backdrop-filter` and semi-transparent backgrounds.
* **Keyboard Support:** Full mapping for Numpad support, `Enter` (calculate), `Backspace` (delete), and `Escape` (clear).
* **Responsive Typography:** Utilizes CSS `clamp()` to ensure digits scale smoothly across different screen sizes.
* **Visual Feedback:** Interactive hover and active states for tactile button feel.
* **Error Handling:** Gracefully handles invalid mathematical expressions.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling:** CSS Grid, Flexbox, CSS Variables
* **Font:** Segoe UI / San Francisco (System Fonts)

---

## 🚀 Live Demo

Try the calculator live here:

**[Link to Live Demo](https://NaseemChoudhary.github.io/JavaScriptBasicProjects/Calculator/)**

---

## 💻 Installation & Setup

Since this is a static site, no build step is required. You can run it locally by cloning the repository.

1. **Clone the repository**
```bash
git clone https://github.com/NaseemChoudhary/JavaScriptBasicProjects/Calculator.git

```


2. **Navigate to the project directory**
```bash
cd Calculator

```


3. **Open in Browser**
Simply open the `index.html` file in your preferred web browser.
---

## 🎮 Usage

### Mouse / Touch

* Click numbers and operators to input equations.
* Press **AC** to clear the screen.
* Press **⌫** to delete the last character.
* Press **=** to evaluate the result.

### Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `0-9` | Input Numbers |
| `+ - * /` | Operators |
| `Enter` | Calculate (=) |
| `Backspace` | Delete last digit |
| `Escape` | All Clear (AC) |

---

## 🎨 Front-End Details

### Glassmorphism Implementation

The frosted glass effect is achieved using a combination of semi-transparent RGBA backgrounds and the CSS `backdrop-filter` property:

```css
.container {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

```

### Responsive Design

The layout uses **CSS Grid** for the keypad to ensure perfect alignment, while the text size uses `clamp()` to prevent overflow on small screens:

```css
font-size: clamp(1.8rem, 5vw, 2.2rem);

```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the logic or add scientific functions:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/ScientificMode`).
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
* Linkedin: [Linkedin](https://www.linkedin.com/in/naseem-choudhary-08a654392)

---

*Made with ❤️ and CSS Grid.*