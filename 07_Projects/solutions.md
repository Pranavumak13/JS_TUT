# Projects Solution

## 1. Color Changer

Script.js file
```
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

```
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