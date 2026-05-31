# JavaScript Basic Projects Collection

This repository is a personal collection of lightweight, vanilla JavaScript projects meant for learning and demonstration. Each project lives in its own folder and is implemented with HTML, CSS, and JavaScript only — no build tools required.

---

## Contents

This repository contains the following projects (click a project to open its `index.html` when available). Each entry includes short classification tags describing the primary techniques used (e.g., DOM, UI, Game, API):

- [AnalogClock](AnalogClock/index.html) — Tags: DOM · Animation · UI — A live analog clock with smooth hand movement and responsive layout.
- [Birthday_Project](Birthday_Project/index.html) — Tags: UI · Animation — Birthday greeting page with decorations and animations.
- [BirthdaySpecial](BirthdaySpecial/index.html) — Tags: UI · Animation — Special birthday greeting layout and effects.
- [Calculator](Calculator/index.html) — Tags: DOM · Utility · Math · UI — Glassmorphism-styled calculator with keyboard support.
- [Color_Pallet_Generator](Color_Pallet_Generator/index.html) — Tags: UI · DOM · Utility — Random color palette generator with glass UI.
- [CurrencyCalculator](CurrencyCalculator/index.html) — Tags: DOM · Utility — Basic currency calculator/conversion demo.
- [Digital_Clock](Digital_Clock/index.html) — Tags: DOM · UI — Digital clock showing current time and styling.
- [ExpenseTracker](ExpenseTracker/index.html) — Tags: DOM · CRUD · Storage — Minimal expense tracking interface (add/delete expenses).
- [ImageSlider](ImageSlider/index.html) — Tags: UI · DOM · Animation — Responsive image slider with navigation controls.
- [MemoryCardGame](MemoryCardGame/index.html) — Tags: Game · DOM · Logic — Card matching memory game.
- [Notes](Notes/index.html) — Tags: DOM · Storage · CRUD — Simple notes app for quick text notes and local state.
- [Number_Counter](Number_Counter/index.html) — Tags: DOM · UI — Increment/decrement counter demo.
- [Number Guessing game](Number%20Guessing%20game/index.html) — Tags: Game · Logic · DOM — Number guessing game with rounds and scoring.
- [PasswordValidator](PasswordValidator/index.html) — Tags: Form · Validation · DOM — Live password strength validator.
- [Portfolio](Portfolio/index.html) — Tags: UI · StaticSite · Responsive — Personal portfolio site showcasing projects and skills.
- [QuoteGenerator](QuoteGenerator/index.html) — Tags: DOM · Data — Random quote generator using a quotes list.
- [Random_Number_Generator](Random_Number_Generator/index.html) — Tags: Utility · DOM — Random number generator demo.
- [Random_Password_Generator](Random_Password_Generator/index.html) — Tags: Utility · Security · DOM — Random password generator with options.
- [Rock-Paper-Sisscor](Rock-Paper-Sisscor/index.html) — Tags: Game · DOM · Logic — Rock Paper Scissors game.
- [ShowHidePassword](ShowHidePassword/index.html) — Tags: Form · UX · DOM — Input that toggles password visibility (added index, CSS, JS).
- [SnakeGame ](SnakeGame%20/index.html) — Tags: Game · DOM · Logic — Classic Snake game (note: folder name contains a trailing space).
- [StopWatch](StopWatch/index.html) — Tags: Utility · DOM — Stopwatch with start/stop/reset functionality.
- [StringCalculator](StringCalculator/index.html) — Tags: Utility · Parser · DOM — Evaluate expressions and string-based calculator.
- [SukudoGame](SukudoGame/index.html) — Tags: Game · Logic · DOM — Sudoku-style puzzle interface.
- [Temprature_Converter](Temprature_Converter/index.html) — Tags: Utility · Conversion · DOM — Temperature converter between units.
- [ThemeSwithcer](ThemeSwithcer/index.html) — Tags: UI · Theme · DOM — Theme switching demo (light/dark or gradient).
- [Tic-Tac-Toe](Tic-Tac-Toe/index.html) — Tags: Game · DOM — Two-player Tic-Tac-Toe game.
- [Timer](Timer/index.html) — Tags: Utility · DOM — Countdown timer with controls.
- [To-Do-List](To-Do-List/index.html) — Tags: CRUD · Storage · DOM — CRUD to-do list with local state.
- [WeatherApp](WeatherApp/index.html) — Tags: API · Network · DOM — Weather dashboard UI (may require API key for live data).

---

## How to open and preview projects

Each project is a static site. To open one locally:

- Option 1 — Open directly in browser:
  - Navigate to the project folder and open `index.html` in any modern browser.

- Option 2 — Use a lightweight local server (recommended for routing or fetch requests):

  - Python 3 (quick):

    ```bash
    # from the repository root
    cd /home/mypc/Desktop/Mysaves/Projects/BasicJavaScritProject
    python3 -m http.server 8000
    # then open http://localhost:8000 in your browser
    ```

  - Node (http-server):

    ```bash
    npm install -g http-server
    http-server -p 8000
    ```

- Option 3 — Use VS Code Live Server extension and open the workspace root, then pick any `index.html` to preview.

Notes:
- Some projects that use local files (images in `Assets/`) will work fine via `file://`, but fetch/XHR will require a server.
- The project `ShowHidePassword` currently contains `index.html`, `style.css`, and `index.js` added during housekeeping.
- The `SnakeGame ` folder contains a trailing space in its name — the link above includes the space-encoded path. Rename the folder if you want a cleaner path.

---

## Project structure conventions

- Each project folder typically contains:
  - `index.html` — Main entry
  - `style.css` — Styles for the project
  - `index.js` or `text.js` — JavaScript logic
  - `Assets/` — Images and media used by the project
  - `README.md` — Project-specific notes (many projects already include this)

- The repository root `index.html` is a simple launcher page that links directly into each project. Open it to quickly browse the collection.

---

## Contributing

If you'd like to improve the collection:

- Fix bugs or improve UI in a project folder and update that project's `README.md` describing changes.
- Add screenshots to `Assets/image.png` for better README previews.
- Rename folders that contain trailing spaces (e.g. `SnakeGame `) to avoid path issues.

Suggested workflow:

```bash
# create a branch
git checkout -b fix/analog-clock-smoothing
# make changes
# run a local server and check your changes
git add .
git commit -m "Fix: analog clock smooth movement and responsive ticks"
git push origin fix/analog-clock-smoothing
```

---

## Notes & Known issues

- If you see a blank page, open the developer console (`F12`) to inspect errors. Common issues:
  - Wrong file encoding (save as UTF-8)
  - Missing `index.html` in a project folder
  - Browser blocking fetch calls when opened via `file://` (use a local server)

---

## Contact

This collection was curated by the repository owner. For questions or collaboration, open an issue or reach out via the links below:

- **GitHub:** [NaseemChoudhary](https://github.com/NaseemChoudhary)
- **LinkedIn:** [naseem-choudhary-08a654392](https://www.linkedin.com/in/naseem-choudhary-08a654392)

You can also use the contact form inside the `Portfolio/` project (see [Portfolio](Portfolio/index.html)).

---

## License

Unless otherwise specified in a project's `README.md`, you may assume these projects are for educational purposes. Add an explicit license file if you want to open-source the collection under a specific license.
