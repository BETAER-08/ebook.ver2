// 현재 시간 업데이트
function updateTime() {
  const currentTime = document.getElementById('current-time');
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  currentTime.textContent = `${hours}:${minutes}:${seconds}`;
}

// 1초마다 현재 시간 업데이트
setInterval(updateTime, 1000);

// 타이머 기능
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const timerMilliseconds = document.getElementById('timer-milliseconds');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isTimerRunning = false;

function startTimer() {
  if (isTimerRunning) {
    return;
  }

  isTimerRunning = true;
  startButton.disabled = true;
  pauseButton.disabled = false;

  timerInterval = setInterval(function () {
    milliseconds += 10;

    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
    timerMilliseconds.textContent = String(milliseconds).padStart(2, '0');
  }, 10);
}

function pauseTimer() {
  if (!isTimerRunning) {
    return;
  }

  isTimerRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;

  clearInterval(timerInterval);
}

function resetTimer() {
  isTimerRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;

  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  timerMinutes.textContent = '00';
  timerSeconds.textContent = '00';
  timerMilliseconds.textContent = '00';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
