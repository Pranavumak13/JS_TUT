# Projects Solution

## 1. Color Changer

Script.js file
```javascript
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach((btn) => {
  return btn.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```

## 2. BMI Calculator

script.js file

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // cancels the default behaviour
  const ht = document.querySelector('#height');
  const htInput = parseInt(ht.value);

  const wt = document.querySelector('#weight');
  const wtInput = parseInt(wt.value);

  const results = document.querySelector('#results');

  if (htInput === '' || htInput < 0 || isNaN(htInput)) {
    results.innerHTML = `Please give us the valid height: ${htInput}`;
  } else if (wtInput === '' || wtInput < 0 || isNaN(wtInput)) {
    results.innerHTML = `Please give us the valid weight: ${wtInput}`;
  } else {
    const BMI = (wtInput / ((htInput * htInput) / 10000)).toFixed(1);
    let status = ""
    if(BMI<18.6){
      status="Underweight"
    }else if(BMI<=24.9){
      status="Normal"
    }else{
      status="Overweight"
    }
    // display content
    const resultItem = document.createElement("span")
    resultItem.innerText=`BMI index is: ${BMI} and you are ${status}`
    results.appendChild(resultItem)
  }
});

```

## 3. Digital Clock

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerHTML = `<span>${time}</span>`;
}, 1000);
```

## 4. Guess The Number

```javascript

let randomNum = parseInt(Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter number above 1');
  } else if (guess > 100) {
    alert('Please enter number below 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guessNum) {
  if (guessNum === randomNum) {
    // win
    displayMessage(`Horray, you have guessed it correctly!`);
    endGame();
  } else if (guessNum < randomNum) {
    //high
    displayMessage(`Ooo hoo, slighty go higer`);
  } else {
    //low
    displayMessage(`oops!!, go a bit shorter`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display manipulation occcures here
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame" class="guessSubmit">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    e.preventDefault();
    randomNum = parseInt(Math.floor(Math.random() * 100 + 1));
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```