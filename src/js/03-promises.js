import Notiflix from "notiflix";
const startButton = document.querySelector('button');
let firstField = document.querySelector('[name="delay"]');
let secondField = document.querySelector('[name="step"]');
let thirdField = document.querySelector('[name="amount"]');


function createPromise(position, delay) {
  const data = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
        resolve();
      }
        reject();
      }, delay)
  });
  data
    .then((x) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch((y) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  })
}

function convert(e) {
  e.preventDefault();
  let convertFirstField = +firstField.value;
  let convertSecondField = +secondField.value;
  let convertThirdField = +thirdField.value;
  for (let i = 1; i <= convertThirdField; i++) {
    createPromise(i, convertFirstField);
    convertFirstField += convertSecondField;
  }
};
startButton.addEventListener('click', convert);
