![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Completed-success)
# Vibrant StopWatch

A precise, colorful, and responsive web-based stopwatch built with vanilla JavaScript.

---

## 📸 Preview

> *Note: The interface features a vibrant gradient aesthetic with a high-contrast digital display.*


![StopWatch](Assets\image.png)

---

## 📖 Overview

This project is a lightweight time-tracking tool designed to measure elapsed time with millisecond precision. It demonstrates core front-end concepts, specifically the manipulation of time intervals in JavaScript and the use of CSS gradients for a modern, energetic user interface.

It handles time logic using `Date` objects to ensuring accuracy over long periods, avoiding the drift often associated with simple counters.

### Why this project?

* **For Users:** A simple, distraction-free tool for tracking time for workouts, study sessions, or tasks.
* **For Developers:** A clear example of how to implement `setInterval`, format time strings (padding zeros), and manage state (running vs. stopped) without frameworks.

---

## ✨ Features

* **Precise Timing:** Tracks Hours, Minutes, Seconds, and Milliseconds (00:00:00:00).
* **Interactive Controls:** Dedicated buttons for **Start**, **Stop**, and **Reset** with distinct visual cues.
* **Vibrant UI:** Features a dynamic gradient background and glass-like container styling.
* **Visual Feedback:** Interactive hover and active states for tactile button feel.
* **Drift-Free Logic:** Calculates time based on system clock deltas rather than reliable tick counting.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Styling:** CSS Flexbox, Linear Gradients
* **Font:** Monospace (Display), Arial (UI)

---

## 🚀 Live Demo

Try the stopwatch live here:

**[Link to Live Demo](https://NaseemChoudhary.github.io/JavaScriptBasicProjects/StopWatch/)**

---

## 💻 Installation & Setup

Since this is a static site, no build step is required. You can run it locally by cloning the repository.

1. **Clone the repository**
```bash
git clone https://github.com/NaseemChoudhary/JavaScriptBasicProjects.git

```


2. **Navigate to the project directory**
```bash
cd JavaScriptBasicProjects/StopWatch

```


3. **Open in Browser**
Simply open the `index.html` file in your preferred web browser.

---

## 🎮 Usage

### Controls

* **Start**: Begins the timer. The timer will continue running even if you switch tabs (based on system time).
* **Stop**: Pauses the timer without resetting the values.
* **Reset**: Stops the timer and clears the display back to `00:00:00:00`.

---

## 🎨 Front-End Details

### Time Formatting Logic

The application ensures a consistent digital clock format by padding single digits with a leading zero using JavaScript's `.padStart()` method:

```javascript
let hours = Math.floor(elapseTime / (1000 * 60 * 60));
hours = String(hours).padStart(2, 0); // Converts "1" to "01"

```

### Gradient Styling

The UI uses distinct linear gradients to differentiate actions, providing immediate visual context for the buttons:

```css
/* Start Button - Green Gradient */
#start {
    background: linear-gradient(135deg, hsla(157, 96%, 47%, 0.747), hsl(86, 88%, 46%));
}

/* Stop Button - Red Gradient */
#stop {
    background: linear-gradient(135deg, hsla(44, 99%, 49%, 0.774), hsla(355, 94%, 49%, 0.856));
}

```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add features like "Lap functionality" or a "Dark Mode":

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/LapTimer`).
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

*Made with ❤️ and Vanilla JS.*