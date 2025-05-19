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



// ------>  operations----->

let value=3
let negval=-value
console.log(negval)
//  ** exponential  % modulo

let str1="hello"

let str2=" navneet"
let str3=str1+str2
console.log(str3)

console.log("1"+"2")//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32


console.log(+true)
console.log(+"")


//----->comparision---->

// < <=  > >= != 


console.log("2" >1)
console.log("02" > 1 )

console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)
//the reason is that an equality check == and comaprision > < >= <= works differntely .
//comparisions converts null to a number treating it as 0. that is why (92) null>=0 is true and null>0 is false

console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<=0)


// strict check === datatypes v check 

console.log("2"===2)