const numbersContainer = document.querySelector('.numbers');
const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector('.hour');
const clock = document.querySelector('.clock');

function clockUpdate() {
  const time = new Date();
  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hours = time.getHours();

  // Calculation for smooth movement or standard steps
  const secDeg = (sec / 60) * 360;
  const minDeg = (min / 60) * 360 + (sec / 60) * 6;
  const hourDeg = (hours % 12 / 12) * 360 + (min / 60) * 30;

  secHand.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;
  minHand.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}

function addNumbers() {
  numbersContainer.innerHTML = '';
  // Use a radius that keeps elements safely inside the border
  const radius = (clock.offsetWidth / 2) * 0.82;

  for (let i = 1; i <= 60; i++) {
    const angleDeg = i * 6;
    const angleRad = (angleDeg * Math.PI) / 180;
    
    const x = Math.sin(angleRad) * radius;
    const y = -Math.cos(angleRad) * radius;

    if (i % 5 === 0) {
      // Hour Number
      const number = document.createElement('div');
      number.className = 'number';
      number.textContent = i / 5;
      number.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      numbersContainer.appendChild(number);
    } else {
      // Minute Tick
      const tick = document.createElement('div');
      tick.className = 'tick';
      // rotate(${angleDeg}deg) ensures the tick points to the center
      tick.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angleDeg}deg)`;
      numbersContainer.appendChild(tick);
    }
  }
}

// Update clock every second
setInterval(clockUpdate, 1000);
clockUpdate();

// Make numbers responsive to window resizing
window.addEventListener('resize', addNumbers);
addNumbers();