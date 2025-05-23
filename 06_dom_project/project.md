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
const clock=document.getElementById('clock');
setInterval(function(){
  
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000);
```

## project 4


```javascript
let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const loworhi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevguess = [];
let numguesses = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number more than 1.");
  } else if (guess > 100) {
    alert("Please enter a number less than 100.");
  } else {
    prevguess.push(guess);
    if (numguesses === 11) {
      displayguess(guess);
      displaymess(`Game over! Random number was: ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnumber) {
    displaymess("🎉 You guessed it right!");
    endgame();
  } else if (guess < randomnumber) {
    displaymess("📉 Number is too Low");
  } else {
    displaymess("📈 Number is too High");
  }
}

function displayguess(guess) {
  userinput.value = "";
  guessslot.innerHTML += `${guess} `;
  numguesses++;
  remaining.innerHTML = `${11 - numguesses}`;
}

function displaymess(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<button id="newgame">Start new game</button>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector("#newgame");
  newgamebutton.addEventListener("click", function () {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguesses = 1;
    guessslot.innerHTML = "";
    remaining.innerHTML = `${10}`;
    userinput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startover.removeChild(p);
    loworhi.innerHTML = "";
    playgame = true;
  });
}

```