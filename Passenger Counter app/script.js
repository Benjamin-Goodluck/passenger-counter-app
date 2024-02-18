// Get elements
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const countDisplay = document.getElementById('count');

let count = 0;

// Update count display
function updateCount() {
  countDisplay.textContent = count;
}

// Event listeners
minusBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

plusBtn.addEventListener('click', () => {
  count++;
  updateCount();
});

// Initial count display
updateCount();

