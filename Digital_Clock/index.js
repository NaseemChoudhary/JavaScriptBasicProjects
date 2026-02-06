const elements = {
    year: document.getElementById("year"),
    month: document.getElementById("month"),
    date: document.getElementById("date"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
    ampm: document.getElementById("ampm"),
    day: document.getElementById(`dayLabel`),
    dayLabel: document.getElementById("dayLabel"),
};

const prev = {};

function updateValue(el, value, key) {
    if (prev[key] !== value) {
        el.textContent = value;
        el.classList.add("flip");

        setTimeout(() => {
            el.classList.remove("flip");
        }, 600);

        prev[key] = value;
    }
}


const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
];
function updateCalendar() {
    const now = new Date();
    let ampm = now.getFullYear() <= 12? "AM":"PM";
    updateValue(elements.year,  now.getFullYear(), "year");
    updateValue(elements.month, String(now.getMonth() + 1).padStart(2, "0"), "month");
    updateValue(elements.date,  String(now.getDate()).padStart(2, "0"), "date");
    updateValue(elements.hours, String(now.getHours() % 12).padStart(2, "0"), "hours");
    updateValue(elements.min,   String(now.getMinutes()).padStart(2, "0"), "min");
    updateValue(elements.sec,   String(now.getSeconds()).padStart(2, "0"), "sec");
    updateValue(elements.ampm, ampm, "ampm")
    elements.dayLabel.textContent = days[new Date().getDay()];
}

updateCalendar();
setInterval(updateCalendar, 1000);
