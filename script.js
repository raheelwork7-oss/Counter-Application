const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

function renderCounter() {
  counterValue.textContent = count;
  counterValue.classList.remove('pulse');
  void counterValue.offsetWidth;
  counterValue.classList.add('pulse');
}

function updateCount(change) {
  count += change;
  renderCounter();
}

incrementBtn.addEventListener('click', () => updateCount(1));
decrementBtn.addEventListener('click', () => updateCount(-1));
resetBtn.addEventListener('click', () => {
  count = 0;
  renderCounter();
});

document.addEventListener('keydown', (event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    return;
  }

  if (event.key === 'ArrowUp' || event.key === '+' || event.key === ' ') {
    event.preventDefault();
    updateCount(1);
  } else if (event.key === 'ArrowDown' || event.key === '-') {
    event.preventDefault();
    updateCount(-1);
  } else if (event.key.toLowerCase() === 'r') {
    count = 0;
    renderCounter();
  }
});

renderCounter();