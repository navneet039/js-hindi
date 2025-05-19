const user={
    username:"navneet",
    price:999,
    welcomemessage: function(){
           console.log(`${this.username} !welcome to website`)
           console.log(this)
    }

}
//this refers to current context

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

console.log(this)//--->agr node me hai to this empty object refer   but browser k andr this is window objevct globla


// function one(){
//     let username="hitesh"
//     console.log(this.username)//ye access nhi kar skte hai undefined
//     console.log(this)
// }
// one()

const two=()=>{
    let username="navneet"
    console.log(this)//empty object
    console.log(this.username)//undefined
}
two()
//Arrow functions do not have their own this.

//Instead, they inherit this from their surrounding (lexical) scope--->function k andr function

//In the global context of a Node.js environment (or strict mode in the browser), this is not bound to the global object (window or global) — it's usually just {} (an empty object).

//So this.username is undefined because this doesn't refer to an object where username is defined.


// const addTwo=(num1,num2)=>{
//     return num1+num2//explicit return

// }
const addTwo=(num1,num2)=> num1+num2//implicit return

const returnobj=(num1,num2)=> ({username:"nav"})
console.log(addTwo(3,4))

console.log(returnobj(1,2))

//**************IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)   global scope k pollution se problem hoti hai to usko hatane k liye iife use */

(function newfn(){
    console.log(`database connected`);
})();
// ()()

((name)=>{
    console.log(`DB CONNECTED two ${name}`)

})('navneet')


//javascript execution context

//global execution context   --->js is a singlethreaded

//functional execution context
//eval execution context


//1.. memory creation phase  --->2.execution phase










