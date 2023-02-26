import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startButton = document.querySelector('button');
const input = document.querySelector('input');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
let datePicked = null;
let timer = null;

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  if (selectedDates[0] < new Date()) {
 return Notiflix.Notify.info("Please choose a date in the future");
  } else {
    datePicked = selectedDates[0]
    console.log(datePicked)
  startButton.disabled = false;
}
  }
};

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  input.disabled = true;
  timer = setInterval(timeInsert, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(newDate) {
  day.innerHTML = newDate.days.toString().padStart(2, "0");
  hour.innerHTML = newDate.hours.toString().padStart(2, "0");
  min.innerHTML = newDate.minutes.toString().padStart(2, "0");
  sec.innerHTML = newDate.seconds.toString().padStart(2, "0");
}

function timeInsert() {
  let ms = datePicked - new Date();
  if (ms <= 0) {
    clearInterval(timer);
    ms = 0;
  input.disabled = false;
}
  const newDate = convertMs(ms);
  addLeadingZero(newDate);
  
}

flatpickr("#datetime-picker", options);