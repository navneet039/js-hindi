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