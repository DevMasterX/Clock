const weekDayEl = document.querySelector('.js-week-day');
const dateEl = document.querySelector('.js-date');
const monthEl = document.querySelector('.js-month');
const hoursEl = document.querySelector('.js-hours');
const minutesEl = document.querySelector('.js-minutes');
const secondsEl = document.querySelector('.js-seconds');
const yearEl = document.querySelector('.js-year');
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

updateTimeEverySecond();

function getCurrentTime() {
  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const year = now.getFullYear();

  return { day, date, month, hours, minutes, seconds, year };
}

function updateTimeEverySecond() {
  setInterval(() => {
    const currentTime = getCurrentTime();
    updateTimeTexContent(currentTime);
  }, 1000);
}

function updateTimeTexContent(currentTime) {
  const { day, date, month, year, hours, minutes, seconds } = currentTime;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  weekDayEl.textContent = day;
  dateEl.textContent = date;
  monthEl.textContent = Number(month) + 1;
  yearEl.textContent = year;
}
