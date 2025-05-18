//primitive and non primitive---->on the basis of data ko kis trh se memory me rkhte hai 


//primitive --->string  Number ,Boolean ,null,undefined ,Symbol,BigInt


// is javascript statically or dynamically typed---->js is dynamically typed language .this means 
//variables types are determined at runtime and you donot need to explicitly declare the type of variable before using it


const id=Symbol('123')//-->typeof is symbol
const anotherid=Symbol('123')
// ----->symbol also gives a returned value   it also of type symbol
console.log(id===anotherid)
const bignumber=887737274368184732676736n //bigint

//Reference type --->

//---->Arrays,Objects,----->typeof is objects---->Functions--->type is function object of objects

const heros=["shaktiman","nagraj"]

let info={
    name:"navneet",
    age:22
}

const myfn=function(){
    console.log("hello world")

}


console.log(typeof myfn)
console.log(typeof undefined)
console.log(typeof heros)
console.log(typeof id)


