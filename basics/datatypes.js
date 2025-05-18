"use strict";   //to treat all js code as newer version

// alert("hello") we are using nodejs not browser --->alert se pop up aata hai screen pe




//primitive datatypes


let name="navneet"//string
let age=21//number--->2^53
//bigint
let isloggedin=false
//boolean  ===> true/false
// null ---> standalone value ---->khali hai
// undefined  ----> value not assigned
//symbol--->uniqueness 


//object
// typeof null is object
// type of undefined--->undefined
console.log(typeof "sbb")



//datatypes conversion

let score = "33abc"
console.log(typeof(score))

let valueinNumber= Number(score)

console.log(typeof(valueinNumber))

console.log(valueinNumber)

// "33"--->33
//"33abc"--->NaN
//true--->1 / false--->0

//----->jo conversion string se number nhi ja skta hai uska NaN milta hai but null ka 0 undefined ka v NaN and bollean values ka 0 and 1

let islogin=1
let boolislogin=Boolean(islogin)
console.log(boolislogin)


//--->""--->false  1--->true   0--->false    "bsh"--->true


let number=33
let stringNumber=String(number)
console.log(stringNumber)
console.log(typeof stringNumber)