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