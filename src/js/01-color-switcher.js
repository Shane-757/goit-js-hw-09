const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
stopButton.disabled = true;
let pause = " ";

startButton.addEventListener('click', () => {
    pause = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    disableStartButton();
});

stopButton.addEventListener('click', () => {
clearInterval(pause);
disableStopButton();
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disableStartButton() {
    startButton.disabled = true;
    stopButton.disabled = false;
}

function disableStopButton() {
    startButton.disabled = false;
    stopButton.disabled = true;
}