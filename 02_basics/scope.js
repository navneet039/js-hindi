// let a=10
// const d=20
// var c=30
//{} curly braces k andr block scope
let a=1000//global scope
if(true){
    let a=10
    console.log("value of a in the fn is  : ",a)
    const d=20
    var c=30
}
console.log(a)
// console.log(b)
// console.log(c)//var me hai to block scope nhi hai iska



function one(){
    const username="navneet"
    function two(){
        const website="youtube"
        console.log(username)//here it can be accessed child can access parent variables

    }
    //console.log(website)//website cannot be accessed but parent cannot access child 
    two()
}

one()

if(true){
    const username="navneet"
    if(username){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


//++++++++++++++++++++++++ Interesting discussion


console.log(addone(5))//--->this will not give error
function addone(num){
    return num+1

}

console.log(addtwo(5))//---->this gives error  initialization bad me hai (hoisting)
const addtwo=function(num){
    return num+2
}

