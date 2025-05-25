#project related to DOM
# project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1

```javascript
console.log("hitesh")
let btn=document.querySelectorAll('.button');
const body=document.querySelector("body");

btn.forEach((btn)=>{
  console.log(btn)
  btn.addEventListener('click',function(e){
   console.log(e);
   console.log(e.target);
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id;
   }
   else if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id;
  }
  else if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
  } else if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id;
  }
  })

});


```


## project 2

```javascript
const form=document.querySelector("form");
form.addEventListener("submit",function(e){
  e.preventDefault();
 const height= parseInt(document.querySelector("#height").value)
 const weight=parseInt(document.querySelector("#weight").value)
 const results=document.querySelector("#results")
 if(height=='' || height<0 || isNaN(height)){
   results.innerHTML=`please give a valid height ${height}`
 }
 else if(weight=='' || weight<0 || isNaN(weight)){
  results.innerHTML=`please give a valid weight ${weight}`
}
else{
 const bmi= (weight/((height*height)/10000)).toFixed(2)
 //show the result
 results.innerHTML=`<span>${bmi}</span>`
 const text=document.createElement("p");
 results.appendChild(text);
 if(bmi<18.6){
   text.innerText="Under Weight";
 }
 else if(bmi>18.6 && bmi<24.9){
   text.innerText="Normal Range";
 }
 else{
   text.innerText="Overweight";
 }
}

 
})
```


## project 3

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

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
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## project 6 randomcolor start stop
```javascript
//generate a random color

const randomcolor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let intervalid;
const startchangingcolor=function(){
  if(!intervalid){
    intervalid=setInterval(changebgcolor,1000)
  }
  function changebgcolor(){
    document.body.style.backgroundColor=randomcolor()
  }
 
}
const stopchangingcolor=function(){
  clearInterval(intervalid);
  intervalid=null;

}
document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)


```

### project 6
```javascript
console.log('Project 5');
const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" " ?"space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    </div>`
  

})
```