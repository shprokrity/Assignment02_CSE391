let counter = 0;
let interval = null;

const display = document.getElementById('display');
const notice = document.getElementById('notice');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  if (interval || counter >= 30) return;
  interval = setInterval(() => {
    counter += 3;
    if (counter > 30) {
      counter = 30;
    }
    display.textContent = counter;

    if (counter === 30) {
      clearInterval(interval);
      interval = null;
      notice.textContent = '⏹ Timer Stopped';
    }
  }, 3000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  counter = 0;
  display.textContent = '0';
  notice.textContent = '';
});
